import { useState } from "react";
// import { SMainContainer, STop, SBottom, STitle, SButton, STitleContainer, SAuthorContainer, SCoverContainer, SRateContainer, SLabel, SInput } from "./BookAddForm.styled";
import { SMainContainer, STop, SBottom, STitle, SAttributeContainer, SLabel, SInput } from "./BookAddForm.styled";
// import { BookAttribute } from "../BookAttribute/BookAttribute";
// import { attributes } from "../../data";
import { Button } from "../Button/Button";


// export const BookAddForm = ({ addBook }) => {
//   const [title, setTitle] = useState("");
//   const [author, setAuthor] = useState("");
//   const [cover, setCover] = useState("");
//   const [rate, setRate] = useState("");

//   return (
//     // <>
//     <SMainContainer>
//       <STop>
//         <STitle>Добавление книги</STitle>
//       </STop>
//       {attributes.map((attribute) => {
//         return (
//           <BookAttribute
//             key={attribute.name} name={attribute.name} value={attribute.value}

//             // title={title} author={author} cover={cover} rate={rate}
//             onChange={(value) => {
//               switch (attribute.name) {
//                 case "title":
//                   setTitle(value);
//                   break;
//                 case "author":
//                   setAuthor(value);
//                   break;
//                 case "cover":
//                   setCover(value);
//                   break;
//                 case "rate":
//                   setRate(value);
//                   break;
//               }
//             }}

//             valueInput={attribute.name === "title" ? title : attribute.name === "author" ? author : attribute.name === "cover" ? cover : rate}
//           >
//           </BookAttribute>
//         )
//       })}
//       <SBottom>
//         <SButton
//           type="button"
//           onClick={() => {
//             addBook({ title, author, cover, rate });
//             setTitle("");
//             setAuthor("");
//             setCover("");
//             setRate("");
//           }}
//         >
//           Добавить книгу
//         </SButton>
//       </SBottom>
//     </SMainContainer>
//   )
// }

export const BookAddForm = ({ addBook }) => {
  const categories = {
    adult: "взрослые",
    kids: "детские"
  }
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [cover, setCover] = useState("");
  const [rate, setRate] = useState("");
  const [category, setCategory] = useState("");

  return (
    // <>
    <SMainContainer>
      <STop>
        <STitle>Добавление книги</STitle>
      </STop>
      <SAttributeContainer>
        <SLabel htmlFor="title">название</SLabel>
        <SInput
          onChange={(event) => {
            setTitle(event.target.value)
          }}
          id="title" value={title} type="text" placeholder="название" />
        {/* <input onChange={(event) => {
            setTitle(event.target.value)
          }}
            id="title"
            value={title}
            type="text"
            placeholder="название" /> */}
      </SAttributeContainer>
      <SAttributeContainer>
        <SLabel htmlFor="author">автор</SLabel>
        <SInput
          onChange={(event) => {
            setAuthor(event.target.value)
          }}
          id="author" value={author} type="text" placeholder="автор" />
      </SAttributeContainer>
      <SAttributeContainer>
        <SLabel htmlFor="cover">обложка</SLabel>
        <SInput
          onChange={(event) => {
            setCover(event.target.value)
          }}
          id="cover" value={cover} type="text" placeholder="обложка" />
      </SAttributeContainer>
      <SAttributeContainer>
        <SLabel htmlFor="rate">рейтинг</SLabel>
        <SInput
          onChange={(event) => {
            setRate(event.target.value)
          }}
          id="rate" value={rate} type="text" placeholder="рейтинг" />
      </SAttributeContainer>
      <SAttributeContainer>
        <SLabel htmlFor="category">категория</SLabel>
        <SInput
          onChange={(event) => {
            setCategory(event.target.value)
          }}
          id="category" value={category} type="text" placeholder="категория" />
      </SAttributeContainer>
      <SBottom>
        <Button
          type="button"
          onClick={() => {
            addBook({ title, author, cover, rate, category });
            setTitle("");
            setAuthor("");
            setCover("");
            setRate("");
          }}
          text="Добавить книгу"
        >
        </Button>
      </SBottom>
    </SMainContainer>
  )
}



// <BookAttribute
//   key={attribute.name} name={attribute.name} value={attribute.value}

//   // title={title} author={author} cover={cover} rate={rate}
//   onChange={(value) => {
//     switch (attribute.name) {
//       case "title":
//         setTitle(value);
//         break;
//       case "author":
//         setAuthor(value);
//         break;
//       case "cover":
//         setCover(value);
//         break;
//       case "rate":
//         setRate(value);
//         break;
//     }
//   }}

//   valueInput={attribute.name === "title" ? title : attribute.name === "author" ? author : attribute.name === "cover" ? cover : rate}
// >
// </BookAttribute>