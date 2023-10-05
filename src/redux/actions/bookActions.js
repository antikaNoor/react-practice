export const addBook = (title, author, description, pages, price, stock, branch, image) => {
    return {
        type: "ADD_BOOK",
        payload: {
            id: new Date().getTime(),
            title: title,
            author: author,
            description: description,
            pages: pages,
            price: price,
            stock: stock,
            branch: branch,
            image: image
        }
    }
}