// export const BookAddForm = () => {
//   return (
//     <form>
//       <h3>Добавление книги</h3>
//       <div>
//         <label htmlFor="title">название</label>
//         <input id="title" type="text" placeholder="название" />
//       </div>
//       <div>
//         <label htmlFor="title">автор</label>
//         <input id="author" type="text" placeholder="автор" />
//       </div>
//       <div>
//         <label htmlFor="title">обложка</label>
//         <input id="cover" type="text" placeholder="обложка" />
//       </div>
//       <div>
//         <label htmlFor="title">рейтинг</label>
//         <input id="rate" type="text" placeholder="рейтинг" />
//       </div>
//       <button type="button"
//       onClick={() => {

//       }}
//       >Добавить книгу</button>
//     </form>
//   )
// }

import {useState} from "react";

export const BookAddForm = ({ addBook }) => {
  // state заполнения данных
  const [title, setTitle] = useState()// для поля "название""

  return (
    <form>
      <h3>Добавление книги</h3>
      <div>
        <label htmlFor="title">название</label>
        <input onChange={(event) => {
          setTitle(event.target.value)
        }}
        id="title"
        value={title}
        type="text"
        placeholder="название" />
      </div>
      <div>
        <label htmlFor="author">автор</label>
        <input id="author" type="text" placeholder="автор" />
      </div>
      <div>
        <label htmlFor="cover">обложка</label>
        <input id="cover" type="text" placeholder="обложка" />
      </div>
      <div>
        <label htmlFor="rate">рейтинг</label>
        <input id="rate" type="text" placeholder="рейтинг" />
      </div>
      {/* prevBooksState - предыдущее состояние
      [...prevBooksState, { }] - к предыдущему состоянию добавляем новую книгу */}
      <button
        type="button"
        onClick={() => {
          addBook({
            title,

            // сюда передаём объект книги

          })
          // setBooksState((prevBooksState) => [
          //   ...prevBooksState,
          //   {
          //     title: "Moomins",
          //     author: "Tove Jansson",
          //     cover: "https://ir.ozone.ru/s3/multimedia-7/c1000/6847322875.jpg",
          //     rate: "10",
          //   },
          // ])
        }}
      >
        Добавить книгу
      </button>
    </form>
  )
}