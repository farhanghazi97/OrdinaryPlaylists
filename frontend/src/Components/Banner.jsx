import React from "react";
import Waveform from "../MusicPlayer/Waveform";

export default function Banner(props) {
  return (
    <div className="home">
      <div className="container">
        {props.track ? (
          <div>
            <p id="title">NEW RELEASE</p>
            <h1>
              {props.track[0].name}
              {/* <p id="paragraph">
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec
          placerat ante. Sed interdum fringilla justo, eget tincidunt purus...”
        </p> */}
            </h1>
            {props.track ? <p>By {props.track[0].singer}</p> : ""}
          </div>
        ) : (
          ""
        )}
      </div>

      <section id="section10">
        <a href="#thanks">
          <span></span>
        </a>
      </section>
      <div className="waveform">
        <Waveform
          track={props.track ? props.track[0] : null}
          playing={props.playing}
          setPlaying={props.setPlaying}
          player={props.player}
        />
      </div>
    </div>
  );
}
