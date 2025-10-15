import { SMainContainer, SContainer, SContent, SRightPart, STitle, SCover, SAuthor, SRate, SLine } from "./Bookcard.styled";

export const BookCard = ({ title, author, cover, rate }) => {
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
        </SRightPart>
      </SContainer>
      <SLine />
    </SMainContainer>
  )
}
