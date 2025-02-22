import React from "react";
import s from "./Messages.module.css";

export function Messages(props) {
  // debugger;
  return (
    <section className={`${s.messages} container`}>
      <div className="people">
        <ul className="people__list">{props.iconElements}</ul>
      </div>
      <ul className="chat-container">{props.messageElements}</ul>
      <div className="input_container">
        <textarea
          value={props.newMessageBody}
          onChange={props.onNewMessageChange}
        ></textarea>
        <button onClick={props.onSendMessageClick}>Отправить</button>
      </div>
    </section>
  );
}
