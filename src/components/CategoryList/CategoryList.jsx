import { SContainer, STitle, SContent } from "./CategoryList.styled";
import { Button } from "../Button/Button";


export const CategoryList = () => {
  return (
    <SContainer>
      {/* <STitle text="Категории" /> */}
      <STitle>Категории</STitle>
      <SContent>
        <Button text="Взрослые" />
        <Button text="Детские" />
      </SContent>
    </SContainer>
  )
}