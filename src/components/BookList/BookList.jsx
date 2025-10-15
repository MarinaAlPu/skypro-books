import { BookCard } from "../BookCard/BookCard";
import { SList } from "./Booklist.styled";

// на вход принимает массив книг
export const BookList = ({ books }) => {
  return (
    <SList>
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
    </SList>
  )
}