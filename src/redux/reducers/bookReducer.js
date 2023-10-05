const initialState = {
    bookList: [],
}

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_BOOK":
            console.log("Books")
            return {
                ...state,
                bookList: [...state.bookList, action.payload],
            }
        default:
            return state;
    }
}

export default bookReducer