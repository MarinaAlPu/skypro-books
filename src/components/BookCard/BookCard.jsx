import { SMainContainer, SContainer, SContent, SRightPart, STitle, SCover, SAuthor, SRate, SCategory, SLine } from "./Bookcard.styled";

export const BookCard = ({ title, author, cover, rate, category }) => {
  return (
    <SMainContainer>
      <SContainer>
        <SCover src={cover} alt="Обложка"></SCover>
        <SRightPart>
          <SContent>
            <STitle>название: {title}</STitle>
            <SAuthor>автор: {author}</SAuthor>
          </SContent>
          <SRate>рейтинг: {rate}</SRate>
          <SCategory>категория: {category}</SCategory>
        </SRightPart>
      </SContainer>
      <SLine />
    </SMainContainer>
  )
}
