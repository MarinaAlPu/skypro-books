import { SAttributeContainer, SLabel, SInput } from "./BookAttribute.styled";


export const BookAttribute = ({ name, value, onChange, valueInput }) => {
  return (
    <SAttributeContainer>
      <SLabel htmlFor={name}>{value}</SLabel>
      <SInput
        onChange={(event) => onChange(event.target.value)}
        id={name}
        value={valueInput}
        type="text"
        placeholder={value} />
    </SAttributeContainer>
  )
}
