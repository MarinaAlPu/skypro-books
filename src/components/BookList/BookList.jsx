import { BookCard } from "../BookCard/BookCard";
import { SList } from "./Booklist.styled";
import { SLine } from "../BookCard/Bookcard.styled";


// на вход принимает массив книг
export const BookList = ({ books }) => {
  return (
    <SList>
      <SLine />
      {books.map((book, index) => {
        return (
          <li key={index}>
            <BookCard
              title={book.title}
              author={book.author}
              cover={book.cover}
              rate={book.rate}
              category={book.category}
            />
          </li>
        );
      })}
    </SList>
  )
}