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


// применяем деструктуризацию
export const BookCard = ({title, author, cover, rate}) => {
  return <div>
    <h2>название: {title}</h2>
    <p>автор: {author}</p>
    <img src={cover} alt="Обложка" />
    <p>рейтинг: {rate}</p>
  </div>
}
