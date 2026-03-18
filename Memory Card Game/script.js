const emojis = ['🐶', '🐱', '🦊', '🐸', '🐵', '🦁', '🐼', '🐨'];
const grid = document.getElementById('card-grid');
const moveCounter = document.getElementById('move-count');
const restartBtn = document.getElementById('restart');
const timerDisplay = document.getElementById('timer');

// Game state
let firstCard = null;
let secondCard = null;
let lockBoard = false;
let moves = 0;
let matchCount = 0;
let timer = 0;
let timerInterval = null;

// Shuffle using Fisher-Yates
function shuffle(array) {
  let current = array.length;
  while (current !== 0) {
    let randomIndex = Math.floor(Math.random() * current);
    current--;

    [array[current], array[randomIndex]] = [array[randomIndex], array[current]];
  }
  return array;
}

// Generate cards
function generateCards() {
  const doubled = [...emojis, ...emojis];
  const shuffled = shuffle(doubled);

  grid.innerHTML = '';

  shuffled.forEach((emoji, index) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.emoji = emoji;
    card.innerHTML = `
      <div class="card-inner">
        <div class="card-front"></div>
        <div class="card-back">${emoji}</div>
      </div>
    `;
    card.addEventListener('click', handleCardClick);
    grid.appendChild(card);
  });
}

// Card click handler
function handleCardClick(e) {
  const clickedCard = e.currentTarget;
  if (
    lockBoard ||
    clickedCard === firstCard ||
    clickedCard.classList.contains('matched')
  ) {
    return;
  }

  clickedCard.classList.add('flipped');

  if (!firstCard) {
    firstCard = clickedCard;
    if (moves === 0) startTimer();
  } else {
    secondCard = clickedCard;
    lockBoard = true;
    moves++;
    moveCounter.textContent = moves;

    checkMatch();
  }
}

// Check for match
function checkMatch() {
  const isMatch = firstCard.dataset.emoji === secondCard.dataset.emoji;

  if (isMatch) {
    firstCard.classList.add('matched');
    secondCard.classList.add('matched');
    matchCount++;

    if (matchCount === emojis.length) {
      stopTimer();
      setTimeout(() => alert(`🎉 You won in ${moves} moves and ${timerDisplay.textContent}!`), 500);
    }

    resetTurn();
  } else {
    setTimeout(() => {
      firstCard.classList.remove('flipped');
      secondCard.classList.remove('flipped');
      resetTurn();
    }, 1000);
  }
}

// Reset current turn
function resetTurn() {
  [firstCard, secondCard] = [null, null];
  lockBoard = false;
}

// Timer functions
function startTimer() {
  timerInterval = setInterval(() => {
    timer++;
    const minutes = String(Math.floor(timer / 60)).padStart(2, '0');
    const seconds = String(timer % 60).padStart(2, '0');
    timerDisplay.textContent = `${minutes}:${seconds}`;
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

// Restart game
function resetGame() {
  [firstCard, secondCard] = [null, null];
  lockBoard = false;
  moves = 0;
  matchCount = 0;
  timer = 0;
  timerDisplay.textContent = '00:00';
  moveCounter.textContent = '0';
  clearInterval(timerInterval);
  generateCards();
}

// Hook up restart button
restartBtn.addEventListener('click', resetGame);

// Initialize
generateCards();
