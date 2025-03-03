import React from "react";
import s from "./Preloader.module.css";
import loader from "../../image-ava/cat-spinner.gif";

export function Preloader() {
  return (
    <div>
      <div id={s.loop} class={s.center}></div>
      <div id={s.bikewrapper} class={s.center}>
        <div id={s.bike} class={s.centerBike}></div>
      </div>
    </div>
  );
}
