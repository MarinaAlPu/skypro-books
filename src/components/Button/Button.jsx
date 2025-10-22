import { SButton } from "./Button.styled";


export const Button = ({ text, onClick }) => {
  return (
    <SButton onClick={onClick}>{text}</SButton>
  )
}