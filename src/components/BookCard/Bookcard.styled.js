import styled from "styled-components"

export const SMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: 5px 30px;
`

export const SContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
`

export const SCover = styled.img`
  width: 100px;
  height: 150px;
`

export const SRightPart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5px;
  margin: 5px 20px;
`

export const SContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const STitle = styled.p`
  font-size: 20px;
  font-weight: bold;
`

export const SAuthor = styled.p`
  font-size: 18px;
  font-weight: bold;
  `

export const SRate = styled.p`
  font-weight: bold;
  `

export const SCategory = styled.p`
  font-size: 14px;  
  /* font-weight: bold; */
`

export const SLine = styled.hr`
  border: 0; /* Убрать стандартную границу */
  height: 1px; /* Высота линии */
  background-color: gray; /* Цвет линии */
`