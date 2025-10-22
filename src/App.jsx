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
// import { useState, useEffect } from "react";
// import { BookList } from "./components/BookList/BookList";
// import { BookAddForm } from "./components/BookAddForm/BookAddForm";
// import { books } from "./data";
import { GlobalStyle } from "./components/GlobalStyles";
// import { getBooks, postBook } from "./api";
import { Main } from "./components/Main/Main";
// import { catagories } from "./data";
// import { AppRoutes } from "./components/AppRoutes";


// ДЗ
// роутинг: корневой адрес - все книги открываются
// категории книг - свой адрес каждой категории (ключ для категории)
// главная страница - кнопка для перехода в категорию

// форма авторизации - вёрстка

function App() {
  // return <AppRoutes />


  // const [booksState, setBooksState] = useState([]); // в booksState будет храниться вся data

  // const addBook = (newBook) => {
  //   postBook(newBook)
  //     .then((data) => {
  //       setBooksState((prevBooks) => [...prevBooks, data])
  //     })
  // }

  // useEffect(() => {
  //   getBooks()
  //     .then((data) => {
  //       setBooksState(data)
  //       // console.log(data);
  //     })
  // }, [])

  return (
    <>
      <GlobalStyle />
      <Main />
      {/* <button onClick={() => {
        setbookState([])
      }}>Удалить книги</button> */}
    </>
  )
}

export default App