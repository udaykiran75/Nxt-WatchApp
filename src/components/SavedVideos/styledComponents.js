import styled from 'styled-components'

export const SavedVideosHomeBgContainer = styled.div`
  @media screen and (min-width: 768px) {
    max-width: 100vw;
    height: 100vh;
  }
`
export const SavedHomeBodyContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`
export const NoSavedVideosContainer = styled.div`
  width: 100vw;
  min-height: 91vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 75vw;
  }
  background-color: ${props => (props.displayMode ? '#0f0f0f' : '#f9f9f9')};
`
export const NoSavedVideosImage = styled.img`
  margin-top: 0px;
  width: 270px;
  @media screen and (min-width: 768px) {
    width: 380px;
  }
`
export const NoSavedHeading = styled.h1`
  font-family: Roboto;
  font-size: 17px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
  color: ${props => (props.displayMode ? '#ffffff' : '#000000')};
`
export const NoSavedText = styled.p`
  font-family: Roboto;
  font-size: 15px;
  margin: 0px;
  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
  color: ${props => (props.displayMode ? '#7e858e' : '#383838')};
`
export const SavedVideosContainer = styled.div`
  background-color: ${props => (props.displayMode ? '#0f0f0f' : '#f9f9f9')};
`
