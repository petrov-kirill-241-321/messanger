import React from "react";
import s from "./Messages.module.css";
import avatar from "../../image-ava/cat.png";
import "./Messages.module.css";
import { NavLink } from "react-router-dom";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogsPage";
import { Messages } from "./Messages";
import { store } from "../../redux/redux-store";
import { useSelector, useDispatch } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

const Icon = ({ name, idUser }) => {
  // debugger;
  return (
    <li className={s.item}>
      <img src={avatar} alt="" className={s.image} />
      <div>
        <NavLink to={`/${idUser}`}>
          <h4 className={s.title}>{name}</h4>
        </NavLink>
        <p className={s.lastmessage}>{}</p>
      </div>
    </li>
  );
};

const Message = ({ time, message }) => {
  // debugger;

  return (
    <li className="message received">
      <span className={s.times}>{time}</span>
      <p>{message}</p>
    </li>
  );
};

export const MessagesContainer = () => {
  // debugger;
  const dispatch = useDispatch();
  const users = useSelector((state) => state.dialogsPage.users);
  const messages = useSelector((state) => state.dialogsPage.messages);
  let dialogsPage = useSelector((state) => state.dialogsPage);
  let newMessageBody = dialogsPage.newMessageBody;

  let iconElements = users.map((icon) => (
    <Icon name={icon.name} idUser={icon.id} />
  ));
  let messageElements = messages.map((message) => (
    <Message message={message.message.text} time={message.message.time} />
  ));

  let onSendMessageClick = () => {
    dispatch(sendMessageCreator());
  };
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    dispatch(updateNewMessageBodyCreator(body));
  };

  return (
    <Messages
      iconElements={iconElements}
      messageElements={messageElements}
      onNewMessageChange={onNewMessageChange}
      onSendMessageClick={onSendMessageClick}
      newMessageBody={newMessageBody}
    />
  );
};
export default withAuthRedirect(MessagesContainer);
