const initialState = {
    comments: [
        {
            name: "Yone",
            content: "Hi",
            avatar: `https://i.pravatar.cc/150?u=yone`,
        },
        {
            name: "Yasuo",
            content: "Hi man",
            avatar: `https://i.pravatar.cc/150?u=yasuo`,
        },
    ],
};

const FakebookReducer = (state = initialState, action) => {
    switch (action.type) {
        case "add_comment": {
            state.comments = [...state.comments, action.comment]
            return {...state}
        }
    }
    return { ...state };
};

export default FakebookReducer;
