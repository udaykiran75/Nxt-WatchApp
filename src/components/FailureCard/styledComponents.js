import styled from 'styled-components'

export const FailureCardContainer = styled.div`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    min-width: 60vh;
  }
`
export const FailureImage = styled.img`
  width: 200px;
`
export const FailedHeading = styled.h1`
  font-family: Roboto;
  font-size: 17px;
  color: ${props => (props.displayMode ? '#ffffff' : '#000000')};
`
export const FailedNote = styled.p`
  font-family: Roboto;
  font-size: 15px;
  margin: 0px;
  text-align: center;
  color: ${props => (props.displayMode ? '#ffffff' : '#000000')};
`
export const RetryButton = styled.button`
  background-color: #3b82f6;
  margin-top: 20px;
  margin-bottom: 0px;
  height: 30px;
  width: 100px;
  color: #ffffff;
  font-family: Roboto;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  outline: none;
  font-size: 14px;
`
