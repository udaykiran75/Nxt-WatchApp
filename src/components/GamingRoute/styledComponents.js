import styled from 'styled-components'

export const GamingMainContainer = styled.div`
  @media screen and (min-width: 768px) {
    max-width: 100vw;
    height: 100vh;
  }
`
export const GamingBodyContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`
export const GamingVideosContainer = styled.div`
  width: 100vw;
  min-height: 91vh;
  @media screen and (min-width: 768px) {
    width: 75vw;
  }
  background-color: ${props => (props.displayMode ? '#0f0f0f' : '#f9f9f9')};
`
export const GamingHeaderDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 25px;
  @media screen and (min-width: 768px) {
    padding: 24px;
  }
  background-color: ${props => (props.displayMode ? '#313131' : '#f1f1f1')};
`
export const GamingImgCon = styled.div`
  margin-left: 15px;
  margin-right: 10px;
  height: 40px;
  width: 40px;
  text-align: center;
  border-radius: 150px;
  padding: 5px;
  background-color: ${props => (props.displayMode ? '#000000' : '#f1f5f9')};
`
export const GamingHeading = styled.h1`
  font-family: Roboto;
  font-size: 16px;
  @media screen and (min-width: 768px) {
    font-size: 25px;
    margin: 0px;
  }
  color: ${props => (props.displayMode ? '#ffffff' : '#000000')};
`
export const GamingLoadingContainer = styled.div`
  height: 75vh;
  display: flex;
  justify-content: center;
`
export const GamingListContainer = styled.ul`
  padding: 0px;
  margin: 10px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    margin: 15px;
  }
`

export const DestopOverflowContainer = styled.div`
  @media screen and (min-width: 768px) {
    overflow: auto;
    max-height: 75vh;
  }
`
