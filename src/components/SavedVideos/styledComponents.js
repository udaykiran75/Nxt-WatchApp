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
  width: 100vw;
  min-height: 91vh;
  @media screen and (min-width: 768px) {
    width: 75vw;
  }
  background-color: ${props => (props.displayMode ? '#0f0f0f' : '#f9f9f9')};
`
export const SavedHeaderDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 25px;
  @media screen and (min-width: 768px) {
    padding: 24px;
  }
  background-color: ${props => (props.displayMode ? '#313131' : '#f1f1f1')};
`
export const SavedImgCon = styled.div`
  margin-left: 15px;
  margin-right: 10px;
  height: 40px;
  width: 40px;
  text-align: center;
  border-radius: 150px;
  padding: 5px;
  background-color: ${props => (props.displayMode ? '#000000' : '#f1f5f9')};
`
export const SavedHeading = styled.h1`
  font-family: Roboto;
  font-size: 16px;
  @media screen and (min-width: 768px) {
    font-size: 25px;
    margin: 0px;
  }
  color: ${props => (props.displayMode ? '#ffffff' : '#000000')};
`
export const SavedVideosDiv = styled.ul`
  padding: 0px;
  margin: 15px;
`
export const DestopOverflowContainer = styled.div`
  @media screen and (min-width: 768px) {
    overflow: auto;
    max-height: 75vh;
  }
`
