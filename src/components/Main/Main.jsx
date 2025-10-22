import { BookList } from "../BookList/BookList";
import { BookAddForm } from "../BookAddForm/BookAddForm";
import { CategoryList } from "../CategoryList/CategoryList"
import { useState, useEffect } from "react";
import { getBooks, postBook } from "../../api";


export const Main = () => {
  const [booksState, setBooksState] = useState([]); // в booksState будет храниться вся data

  const addBook = (newBook) => {
    postBook(newBook)
      .then((data) => {
        setBooksState((prevBooks) => [...prevBooks, data])
      })
  }

  useEffect(() => {
    getBooks()
      .then((data) => {
        setBooksState(data)
        // console.log(data);
      })
  }, [])
  
  return (
    <>
      <CategoryList />
      <BookList books={booksState} />
      <BookAddForm addBook={addBook} />

      {/* <button onClick={() => {
            setbookState([])
          }}>Удалить книги</button> */}
    </>
  )
}