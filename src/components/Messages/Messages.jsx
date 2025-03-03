import React from "react";
import s from "./Messages.module.css";

export function Messages({
  iconElements,
  messageElements,
  newMessageBody,
  onNewMessageChange,
  onSendMessageClick,
}) {
  return (
    <section className={`${s.messages} container`}>
      <div className="people">
        <ul className="people__list">{iconElements}</ul>
      </div>
      <ul className="chat-container">{messageElements}</ul>
      <div className="input_container">
        <textarea
          value={newMessageBody}
          onChange={onNewMessageChange}
        ></textarea>
        <button onClick={onSendMessageClick}>Отправить</button>
      </div>
    </section>
  );
}
