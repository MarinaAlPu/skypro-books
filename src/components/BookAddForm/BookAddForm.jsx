import { useState } from "react";
import { SMainContainer, STop, SBottom, STitle, SButton } from "./BookAddForm.styled";
import { BookAttribute } from "../BookAttribute/BookAttribute";
import { attributes } from "../../data";


export const BookAddForm = ({ addBook }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [cover, setCover] = useState("");
  const [rate, setRate] = useState("");

  return (
    // <>
    <SMainContainer>
      <STop>
        <STitle>Добавление книги</STitle>
      </STop>
      {attributes.map((attribute) => {
        return (
          <BookAttribute
            key={attribute.name} name={attribute.name} value={attribute.value}

            // title={title} author={author} cover={cover} rate={rate}
            onChange={(value) => {
              switch (attribute.name) {
                case "title":
                  setTitle(value);
                  break;
                case "author":
                  setAuthor(value);
                  break;
                case "cover":
                  setCover(value);
                  break;
                case "rate":
                  setRate(value);
                  break;
              }
            }}

            valueInput={attribute.name === "title" ? title : attribute.name === "author" ? author : attribute.name === "cover" ? cover : rate}
          >
          </BookAttribute>
        )
      })}
      <SBottom>
        <SButton
          type="button"
          onClick={() => {
            addBook({ title, author, cover, rate });
            setTitle("");
            setAuthor("");
            setCover("");
            setRate("");
          }}
        >
          Добавить книгу
        </SButton>
      </SBottom>
    </SMainContainer>
  )
}
