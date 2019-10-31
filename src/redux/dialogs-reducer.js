const ADD_MESSAGE = "ADD-MESSAGE";

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
};

const dislogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_MESSAGE:
            let newMessage = {
                id: 6,
                message: action.newMessageBody,
                from: 'me',
                img: "http://via.placeholder.com/50"
            };
            return ({...state,
                messages: [...state.messages, newMessage]}
                );
      default:
        return state;
    }
};

export const addMessage = (newMessageBody) => ({type: ADD_MESSAGE, newMessageBody});

export default dislogsReducer;