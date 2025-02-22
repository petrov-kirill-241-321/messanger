const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

const initialState = {
  messages: [
    {
      id: 1,
      message: { text: "Как дела?", time: "12:01" },
      name: "artem",
    },
    { id: 2, message: { text: "норм", time: "12:02" }, name: "kirill" },
    {
      id: 3,
      message: { text: "че делаешь", time: "12:03" },
      name: "vadim",
    },
    { id: 4, message: { text: "ниче", time: "12:04" }, name: "Nika" },
    { id: 5, message: { text: "ниче", time: "12:04" }, name: "Arina" },
  ],
  newMessageBody: "",
  users: [
    { id: 1, name: "kirill" },
    { id: 2, name: "arina" },
    { id: 3, name: "nika" },
    { id: 4, name: "vadim" },
  ],
};

export function dialogsReduser(state = initialState, action) {
  // debugger;
  switch (action.type) {
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: 6,
            message: { ...{ text: body, time: "12:04" } },
            name: "Arina",
          },
        ],
        newMessageBody: "",
      };
    case UPDATE_NEW_MESSAGE_BODY:
      return { ...state, newMessageBody: action.body };
    default:
      return state;
  }
}

export function sendMessageCreator() {
  return { type: SEND_MESSAGE };
}

export function updateNewMessageBodyCreator(body) {
  return { type: UPDATE_NEW_MESSAGE_BODY, body: body };
}
