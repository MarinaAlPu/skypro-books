// import { useState } from "react";
import { SAttributeContainer, SLabel, SInput } from "./BookAttribute.styled";


export const BookAttribute = ({ name, value, onChange, valueInput }) => {
  // state заполнения данных
  // const [title, setTitle] = useState("");
  // const [author, setAuthor] = useState("");
  // const [cover, setCover] = useState("");
  // const [rate, setRate] = useState("");

  return (
    <SAttributeContainer>
      <SLabel htmlFor={name}>{value}</SLabel>
      <SInput
        onChange={(event) => onChange(event.target.value)}
        // onChange={(event) => {
        //   switch (name) {
        //     case "title":
        //       setTitle(event.target.value);
        //       break;
        //     case "author":
        //       setAuthor(event.target.value);
        //       break;
        //     case "cover":
        //       setCover(event.target.value);
        //       break;
        //     case "rate":
        //       setRate(event.target.value);
        //       break;
        //   }
        // }}
        id={name}
        value={valueInput}
        // value={name === "title" ? title : name === "author" ? author : name === "cover" ? cover : rate}
        type="text"
        placeholder={value} />
    </SAttributeContainer>
  )
}




// export const BookAttribute = ({ name, value, onChange, valueInput }) => {
//   return (
//     <SAttributeContainer>
//       <SLabel htmlFor={name}>{value}</SLabel>
//       <SInput
//         onChange={(event) => onChange(event.target.value)}
//         id={name}
//         value={valueInput}
//         type="text"
//         placeholder={value} />
//     </SAttributeContainer>
//   )
// }