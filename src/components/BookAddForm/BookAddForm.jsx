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




// import {useState} from "react";

// export const BookAddForm = ({ addBook }) => {
//   // state заполнения данных
//   const [title, setTitle] = useState()// для поля "название""

//   return (
//     <form>
//       <h3>Добавление книги</h3>
//       <div>
//         <label htmlFor="title">название</label>
//         <input onChange={(event) => {
//           setTitle(event.target.value)
//         }}
//         id="title"
//         value={title}
//         type="text"
//         placeholder="название" />
//       </div>
//       <div>
//         <label htmlFor="author">автор</label>
//         <input id="author" type="text" placeholder="автор" />
//       </div>
//       <div>
//         <label htmlFor="cover">обложка</label>
//         <input id="cover" type="text" placeholder="обложка" />
//       </div>
//       <div>
//         <label htmlFor="rate">рейтинг</label>
//         <input id="rate" type="text" placeholder="рейтинг" />
//       </div>
//       {/* prevBooksState - предыдущее состояние
//       [...prevBooksState, { }] - к предыдущему состоянию добавляем новую книгу */}
//       <button
//         type="button"
//         onClick={() => {
//           addBook({
//             title,

//             // сюда передаём объект книги

//           })
//           // setBooksState((prevBooksState) => [
//           //   ...prevBooksState,
//           //   {
//           //     title: "Moomins",
//           //     author: "Tove Jansson",
//           //     cover: "https://ir.ozone.ru/s3/multimedia-7/c1000/6847322875.jpg",
//           //     rate: "10",
//           //   },
//           // ])
//         }}
//       >
//         Добавить книгу
//       </button>
//     </form>
//   )
// }




// import { useState } from "react";
// import { SMainContainer, SContainer, STop, SLeft, SRight, SBottom, STitle, SButton } from "./BookAddForm.styled";


// export const BookAddForm = ({ addBook }) => {
//   // state заполнения данных
//   const [title, setTitle] = useState()// для поля "название""

//   return (
//     <>
//       <SMainContainer>
//         <STop>
//           <STitle>Добавление книги</STitle>
//         </STop>
//         <SContainer>
//           <SLeft>
//             <label htmlFor="title">название</label>
//           </SLeft>
//           <SRight>

//           </SRight>
//         </SContainer>
//         <SBottom>
//           <SButton
//             type="button"
//             onClick={() => {
//               addBook({
//                 title,
//                 // сюда передаём объект книги
//               })
//             }}
//           >
//             Добавить книгу
//           </SButton>
//         </SBottom>
//       </SMainContainer>
//     </>
//     // <form>
//     //   <STitle>Добавление книги</STitle>
//     //   <div>
//     //     <label htmlFor="title">название</label>
//     //     <input onChange={(event) => {
//     //       setTitle(event.target.value)
//     //     }}
//     //     id="title"
//     //     value={title}
//     //     type="text"
//     //     placeholder="название" />
//     //   </div>
//     //   <div>
//     //     <label htmlFor="author">автор</label>
//     //     <input id="author" type="text" placeholder="автор" />
//     //   </div>
//     //   <div>
//     //     <label htmlFor="cover">обложка</label>
//     //     <input id="cover" type="text" placeholder="обложка" />
//     //   </div>
//     //   <div>
//     //     <label htmlFor="rate">рейтинг</label>
//     //     <input id="rate" type="text" placeholder="рейтинг" />
//     //   </div>
//     //   {/* prevBooksState - предыдущее состояние
//     //   [...prevBooksState, { }] - к предыдущему состоянию добавляем новую книгу */}
//     //   <SButton
//     //     type="button"
//     //     onClick={() => {
//     //       addBook({
//     //         title,

//     //         // сюда передаём объект книги

//     //       })
//     //       // setBooksState((prevBooksState) => [
//     //       //   ...prevBooksState,
//     //       //   {
//     //       //     title: "Moomins",
//     //       //     author: "Tove Jansson",
//     //       //     cover: "https://ir.ozone.ru/s3/multimedia-7/c1000/6847322875.jpg",
//     //       //     rate: "10",
//     //       //   },
//     //       // ])
//     //     }}
//     //   >
//     //     Добавить книгу
//     //   </SButton>
//     // </form>
//   )
// }




import { useState } from "react";
import { SMainContainer, STop, SBottom, STitle, SButton } from "./BookAddForm.styled";
import { BookAttribute } from "../BookAttribute/BookAttribute";
import { attributes } from "../../data";

// const attributeName = [
//   { name: "title", value: "название" },
//   { name: "author", value: "автор" },
//   { name: "cover", value: "обложка" },
//   { name: "rate", value: "рейтинг" },
// ]

export const BookAddForm = ({ addBook }) => {
  // // state заполнения данных
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
      {/* <SContainer> */}
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
            {/* <SLabel htmlFor={attribute.name}>{attribute.value}</SLabel>
            <SInput
              onChange={(event) => {
                switch (attribute.name) {
                  case "title":
                    setTitle(event.target.value);
                    break;
                  case "author":
                    setAuthor(event.target.value);
                    break;
                  case "cover":
                    setCover(event.target.value);
                    break;
                  case "rate":
                    setRate(event.target.value);
                    break;
                }
              }}
              id={attribute.name}
              value={attribute.name === "title" ? title : attribute.name === "author" ? author : attribute.name === "cover" ? cover : rate}
              type="text"
              placeholder={attribute.value} /> */}
          </BookAttribute>
        )
      })}
      {/* <SAttribute>
        <SLabel htmlFor="title">название</SLabel>
        <SInput
          onChange={(event) => {
            setTitle(event.target.value)
          }}
          id="title" value={title} type="text" placeholder="название" />
      </SAttribute>
      <SAttribute>
        <SLabel htmlFor="author">автор</SLabel>
        <SInput
          onChange={(event) => {
            setAuthor(event.target.value)
          }}
          id="author" value={author} type="text" placeholder="автор" />
      </SAttribute>
      <SAttribute>
        <SLabel htmlFor="cover">обложка</SLabel>
        <SInput
          onChange={(event) => {
            setCover(event.target.value)
          }}
          id="cover" value={cover} type="text" placeholder="обложка" />
      </SAttribute>
      <SAttribute>
        <SLabel htmlFor="rate">рейтинг</SLabel>
        <SInput
          onChange={(event) => {
            setRate(event.target.value)
          }}
          id="rate" value={rate} type="text" placeholder="рейтинг" />
      </SAttribute> */}
      {/* </SContainer> */}
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
    // </>
    // <form>
    //   <STitle>Добавление книги</STitle>
    //   <div>
    //     <label htmlFor="title">название</label>
    //     <input onChange={(event) => {
    //       setTitle(event.target.value)
    //     }}
    //     id="title"
    //     value={title}
    //     type="text"
    //     placeholder="название" />
    //   </div>
    //   <div>
    //     <label htmlFor="author">автор</label>
    //     <input id="author" type="text" placeholder="автор" />
    //   </div>
    //   <div>
    //     <label htmlFor="cover">обложка</label>
    //     <input id="cover" type="text" placeholder="обложка" />
    //   </div>
    //   <div>
    //     <label htmlFor="rate">рейтинг</label>
    //     <input id="rate" type="text" placeholder="рейтинг" />
    //   </div>
    //   {/* prevBooksState - предыдущее состояние
    //   [...prevBooksState, { }] - к предыдущему состоянию добавляем новую книгу */}
    //   <SButton
    //     type="button"
    //     onClick={() => {
    //       addBook({
    //         title,

    //         // сюда передаём объект книги

    //       })
    //       // setBooksState((prevBooksState) => [
    //       //   ...prevBooksState,
    //       //   {
    //       //     title: "Moomins",
    //       //     author: "Tove Jansson",
    //       //     cover: "https://ir.ozone.ru/s3/multimedia-7/c1000/6847322875.jpg",
    //       //     rate: "10",
    //       //   },
    //       // ])
    //     }}
    //   >
    //     Добавить книгу
    //   </SButton>
    // </form>
  )
}



// export const BookAddForm = ({ addBook }) => {
//   // // state заполнения данных
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
//             onChange={(event) => {
//               switch (attribute.name) {
//                 case "title":
//                   setTitle(event.target.value);
//                   break;
//                 case "author":
//                   setAuthor(event.target.value);
//                   break;
//                 case "cover":
//                   setCover(event.target.value);
//                   break;
//                 case "rate":
//                   setRate(event.target.value);
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