const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
    dialogs: [
        {id: 1, name: 'Mari', img: "http://via.placeholder.com/50"},
        {id: 2, name: 'Roma', img: "http://via.placeholder.com/50"},
        {id: 3, name: 'Vlad', img: "http://via.placeholder.com/50"},
        {id: 4, name: 'Sasha', img: "http://via.placeholder.com/50"},
    ],
        messages: [
    {id: 1, message: 'Hello!', from: 'me', img: "http://via.placeholder.com/50"},
    {id: 2, message: 'How are you?', from: 'me', img: "http://via.placeholder.com/50"},
    {id: 3, message: 'I love you', from: 'me', img: "http://via.placeholder.com/50"},
    {id: 4, message: 'Hi)', from: 'you', img: "http://via.placeholder.com/50"},
    {id: 5, message: 'I love you to', from: 'you', img: "http://via.placeholder.com/50"},
    ],
    newMessageText: '',
};

const dislogsReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_MESSAGE:
          let newMessage = {
            id: 6,
            message: state.newMessageText,
            from: 'me',
            img: "http://via.placeholder.com/50"
          };
          state.messages.push(newMessage);
          state.newMessageText = "";
          return state;
      case UPDATE_NEW_MESSAGE_TEXT:
          state.newMessageText = action.newText;
          return state;
      default:
        return state;
    }
};

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextActionCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});

export default dislogsReducer;