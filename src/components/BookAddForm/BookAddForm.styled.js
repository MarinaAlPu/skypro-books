import styled from "styled-components"

export const SMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 5px 30px;
`

// export const SContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   gap: 5px;
//   margin: 5px 30px;
// `

export const STop = styled.div`
  display: flex;
  flex-direction: row;
  /* gap: 5px; */
  /* margin: 5px 30px; */
`

// export const SLeft = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 5px;
//   margin: 5px 30px;
// `

// export const SRight = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 5px;
//   margin: 5px 30px;
//   `

export const SBottom = styled.div`
  display: flex;
  flex-direction: row;
  /* gap: 5px; */
  `

export const SRow = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
  `

// export const SAuthorContainer = styled.div`
//     display: flex;
//     flex-direction: row;
//     gap: 10px;
//   `

// export const SCoverContainer = styled.div`
//     display: flex;
//     flex-direction: row;
//     gap: 10px;
//   `

// export const SRateContainer = styled.div`
//     display: flex;
//     flex-direction: row;
//     gap: 10px;
//   `

export const STitle = styled.p`
  font-size: 24px;
  font-weight: bold;
  `

export const SButton = styled.button`
  font-weight: bold;
  width: 150px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #101010;
  background-color: #f3f3f3;
  &:hover{
    background-color: #dbdbdbff;
    border: 1px solid #101010;
  }
`

export const SLabel = styled.label`
  width: 70px;
`

export const SInput = styled.input`
  width: 200px;
  border-radius: 5px;
  border: 1px solid #101010;
  height: 20px;
  padding-left: 5px;
`
