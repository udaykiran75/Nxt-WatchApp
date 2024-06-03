import styled from 'styled-components'

export const NotFoundMainBgContainer = styled.div`
  @media screen and (min-width: 768px) {
    max-width: 100vw;
    height: 100vh;
  }
`
export const NotFoundBodyContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`
export const NotFoundContainer = styled.div`
  width: 100vw;
  min-height: 91vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 75vw;
  }
  background-color: ${props => (props.displayMode ? '#000000' : '#f1f5f9')};
`
export const NotFoundImage = styled.img`
  width: 270px;
  @media screen and (min-width: 768px) {
    width: 370px;
  }
`
export const NotFoundHeading = styled.h1`
  font-family: Roboto;
  font-size: 17px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
  color: ${props => (props.displayMode ? '#ffffff' : '#000000')};
`
export const NotFoundText = styled.p`
  font-family: Roboto;
  font-size: 15px;
  margin: 0px;
  text-align: center;
  color: ${props => (props.displayMode ? '#7e858e' : '#383838')};
`
