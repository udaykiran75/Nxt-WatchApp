import styled from 'styled-components'

export const HomebgContainer = styled.div`
  height: 100vh;
  width: 100vw;
`
export const HomeBodyContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`
export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  width: 100%;
  background-size: cover;
  height: 160px;
  justify-content: space-between;
  display: flex;
  padding: 15px;
  @media screen and (min-width: 768px) {
    height: 200px;
  }
`
export const BannerLeftPart = styled.div`
  width: 50%;
`
export const BannerRightPart = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const BannerImage = styled.img`
  width: 70px;
  @media screen and (min-width: 768px) {
    width: 100px;
  }
`
export const BannerButton = styled.button`
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  border: 1px solid #000000;
  color: #000000;
  font-family: Roboto;
  font-weight: bold;
  background: none;
`
export const BannerText = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: #000000;
  @media screen and (min-width: 576px) {
    font-size: 20px;
  }
`
export const BannerCloseButton = styled.button`
  border: none;
  background: none;
  height: 25px;
  cursor: pointer;
`
export const SearchBoxContiner = styled.div`
  display: flex;
  align-items: center;
  width: 63%;
  margin: 15px;
  margin-bottom: 10px;
  border: 1px solid #616e7c;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
  background-color: ${props => (props.displayMode ? '#000000' : '#ffffff')};
`
export const SearchInput = styled.input`
  padding: 5px;
  font-size: 14px;
  width: 100%;
  outline: none;
  border: none;
  background-color: ${props => (props.displayMode ? '#000000' : '#ffffff')};
  color: ${props => (props.displayMode ? '#ffffff' : '#000000')};
`
export const SearchIconButton = styled.button`
  height: 30px;
  width: 50px;
  text-align: center;
  border: none;
  outline: none;
  border-left: 1px solid #616e7c;
  cursor: pointer;
  background-color: ${props => (props.displayMode ? '#383838' : '#f1f1f1')};
`

export const BodyContainer = styled.div`
  min-height: 93vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    width: 75vw;
    height: 93vh;
  }
  background-color: ${props => (props.displayMode ? '#181818' : '#f9f9f9')};
`
export const HomeVideosContainer = styled.div`
  padding: 15px;
  padding-top: 0px;
  width: 100%;
  overflow-y: auto;
`
export const LoadingContainer = styled.div`
  min-height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
