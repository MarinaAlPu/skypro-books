// import { useState } from "react";
// import { BookList } from "./components/BookList/BookList"
// import { books } from "./data"
// import { BookAddForm } from "./components/BookAddForm/BookAddForm"

// function App() {
//   // const [count, setCount] = useState(0); // возвращет массив из 2 элементов

//   const [booksState, setbookState] = useState(books); // возвращет массив из 2 начальных книг

//   return (
//     <>
//       <BookList books={booksState} />
//       <BookAddForm />

//       <button>
//         <button onClick={() => {
//           setbookState([])
//         }}>
//           Удалить книгу
//         </button>

//       </button>

// {/* <div>{count}</div> */}
// {/* <button onClick={() => {
//   setCount(count + 1)
// }}>+</button>

// <button onClick={() => {
//   setCount(count - 1)
// }}>-</button> */}
//     </>
//   )
// }

// export default App

// import { BookCard } from "./components/BookCard/BookCard";
import { useState } from "react";
import { BookList } from "./components/BookList/BookList";
import { BookAddForm } from "./components/BookAddForm/BookAddForm";
import { books } from "./data";

function App() {
  const [booksState, setBooksState] = useState(books); // в booksState будет храниться вся data

  const addBook = (newBook) => {
    setBooksState((prevBooks) => [...prevBooks, newBook])
  }

  return (
    <>
      <BookList books={booksState} />
      <BookAddForm addBook={addBook}/>
      {/* <button onClick={() => {
        setbookState([])
      }}>Удалить книги</button> */}
    </>
  )
}

export default App