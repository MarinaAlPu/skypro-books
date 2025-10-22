import { BookList } from "../BookList/BookList";
import { BookAddForm } from "../BookAddForm/BookAddForm";
import { CategoryList } from "../CategoryList/CategoryList"
import { useState, useEffect } from "react";
import { getBooks, postBook } from "../../api";


export const Main = () => {
  const categories = {
    // all: "выбрать все",
    // adilt: "взрослые",
    // kids: "детские"
    все: "выбрать все",
    взрослые: "взрослые",
    детские: "детские"
  }

  const [booksState, setBooksState] = useState([]); // в booksState будет храниться вся data
  const [selectedCategory, setSelectedCategory] = useState(null);

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

  // console.log("booksState:");
  // console.log(booksState);
  
  const filteredBooks = selectedCategory ? booksState.filter((book) => book.category === selectedCategory) : booksState;
  
  // console.log("filteredBooks:");
  // console.log(filteredBooks);

  return (
    <>
      <CategoryList
        categories={categories}
        onSelectCategory={setSelectedCategory} />
      <BookList books={filteredBooks} />
      <BookAddForm addBook={addBook} />


      {/* <button onClick={() => {
            setbookState([])
          }}>Удалить книги</button> */}
    </>
  )
}








