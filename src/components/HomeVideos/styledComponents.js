import styled from 'styled-components'

export const HomeVideosContainer = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 20px;
  padding: 0px;
  list-style-type: none;
  @media screen and (min-width: 768px) {
    height: 90vh;
    min-width: 71vw;
  }
`

export const NoSearchResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  @media screen and (min-width: 768px) {
    max-height: 50vh;
  }
`
export const NoSearchResultImage = styled.img`
  width: 250px;
  margin-bottom: 15px;
`
export const NoSearchResultHeading = styled.h1`
  font-family: Roboto;
  font-size: 18px;
  margin: 0px;
  color: ${props => (props.displayMode ? '#ffffff' : '#000000')};
`
export const NoSearchResultText = styled.p`
  font-family: Roboto;
  font-size: 15px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
  color: ${props => (props.displayMode ? '#ffffff' : '#000000')};
`

export const NoSearchResultRetryButton = styled.button`
  background-color: #3b82f6;
  height: 30px;
  width: 100px;
  color: #ffffff;
  font-family: Roboto;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  outline: none;
  font-size: 14px;
  margin: 0px;
`
