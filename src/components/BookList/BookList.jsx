// import {BookCard} from "../BookCard/BookCard"

// export const BookList = ({books}) => {
//   return (
//     <ul>{books.map((book, index)  => {
//       return (
//         <li key={index}>
//           <BookCard
//           title={book.title}
//           author={book.author}
//           cover={book.cover}
//           rate={book.rate}
//           // {...rate} // если нужны все книги
//           />
//         </li>
//       )
//     })}

//     </ul>
//   )
// }

// // export default BookList

import { BookCard } from "../BookCard/BookCard";

// на вход принимает массив книг
export const BookList = ({ books }) => {
  return (
    <ul>
      {books.map((book, index) => {
        return (
          <li key={index}>
            <BookCard
              title={book.title}
              author={book.author}
              cover={book.cover}
              rate={book.rate}
            />
          </li>
        );
      })}
    </ul>
  )
}