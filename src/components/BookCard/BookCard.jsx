// export const BookCard = ({ title, author, cover, rate }) => {

//   return (
//     <div>
//       <h2>{title}</h2>
//       <p>{author}</p>
//       <img src={cover} alt="обложка" />
//       <p>рейтинг: {rate}</p>
//     </div>
//   )
// }

// // export default BookCard
// // { title: "1984", author: "George Orwell", cover: "https://example.com/1984.jpg", rate: "4.8" }


// export const BookCard = (props) => {
//   console.log(props);
//   return <div>
//     <h2>{props.title}</h2>
//     <p>{props.author}</p>
//     <img src={props.cover} alt="Обложка" />
//     <p>{props.rate}</p>
//   </div>
// }


// export const BookCard = ({ title, author, cover, rate }) => {
//   console.log(props);
//   return <div>
//     <h2>название: {title}</h2>
//     <p>автор: {author}</p>
//     <img src={cover} alt="Обложка" />
//     <p>рейтинг: {rate}</p>
//   </div>
// }

// import styled from "styled-components";
import { SMainContainer, SContainer, SContent, SRightPart, STitle, SCover, SAuthor, SRate, SLine } from "./Bookcard.styled";


// применяем деструктуризацию
export const BookCard = ({ title, author, cover, rate }) => {
  return (
    // <>
    <SMainContainer>
      <SContainer>
        <SCover src={cover} alt="Обложка"></SCover>
        <SRightPart>
          <SContent>
            <STitle>название: {title}</STitle>
            <SAuthor>автор: {author}</SAuthor>
          </SContent>
          <SRate>рейтинг: {rate}</SRate>
        </SRightPart>
      </SContainer>
      <SLine />
    </SMainContainer>
  )
}
