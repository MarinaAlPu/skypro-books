import { SContainer, STitle, SContent } from "./CategoryList.styled";
import { Button } from "../Button/Button";


export const CategoryList = ({ categories, onSelectCategory }) => {
  // console.log(categories);
  return (
    <SContainer>
      {/* <STitle text="Категории" /> */}
      <STitle>Категории</STitle>
      <SContent      >
        {/* <Button text="Взрослые" />
        <Button text="Детские" /> */}

        {Object.entries(categories).map(([key, value]) => {
          // console.log(key);
          // console.log(value);
          return (
            <Button
              key={key}
              onClick={() => key === "все" ? onSelectCategory(null) : onSelectCategory(key)}
              text={value}
            >
            </Button>
          )
        })}
      </SContent>
    </SContainer>
  )
}






// export const CategoryList = ({ categories, onSelectCategory }) => {
//   console.log(categories);
//   return (
//     <SContainer>
//       <STitle>Категории</STitle>
//       <SContent      >
//         {Object.entries(categories).map(([key, value]) => {
//           return (
//             <Button
//               key={key}
//               onClick={() => onSelectCategory(key)}
//               text={value}
//             >
//             </Button>
//           )
//         })}
//       </SContent>
//     </SContainer>
//   )
// }