import React from "react"
import Story from "./Story"
import "./StoryReel.css"

function StoryReel() {
  return (
    <div className='storyReel'>
        <Story image={require("./panget_ginger.jpg")} profileSrc={require("./mypicture.jpg")} title={"Erald Sanchez"} />
        <Story image={require("./jech_myday.jpg")} profileSrc={require("./jech.jpg")} title={"Jericho Sibayan"} />
        <Story image={require("./pads_myday.jpg")} profileSrc={require("./pads.jpg")} title={"Micaiah Alban"} />
        <Story image={require("./ryanbang_myday.jpg")} profileSrc={require("./ryanbang.jpg")} title={"Ryan Jacobo"} />
        <Story image={require("./kyles_myday.jpg")} profileSrc={require("./kyles.jpg")} title={"Kyle Gallego"} />
    </div>
    
    
  )
}

export default StoryReel