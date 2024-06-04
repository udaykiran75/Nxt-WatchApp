import styled from 'styled-components'

export const VideoPlayerContainer = styled.div`
  padding: 10px;
  @media screen and (min-width: 768px) {
    padding: 25px;
  }
`
export const VideoTitle = styled.p`
  font-family: Roboto;
  font-size: 15px;
  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
  color: ${props => (props.displayMode ? '#ffffff' : '#231f20')};
`
export const VideoOptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ViewsAndYearDiv = styled.div`
  display: flex;
`
export const Text = styled.p`
  font-family: Roboto;
  font-size: 12px;
  font-weight: bold;
  margin-right: 15px;
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
  color: #64748b;
`
export const IconsContainer = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    width: 240px;
  }
`
export const ReatIconButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`
export const ActiveText = styled.p`
  font-family: Roboto;
  font-size: 12px;
  font-weight: bold;
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
  color: ${props => (props.isActive ? '#2563eb' : '#64748b')};
`
export const HorizantalLine = styled.hr`
  color: grey;
  border: 1px solid;
`
export const ChannelContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
`
export const ChannelImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  margin-right: 20px;
`
export const ChannelInfo = styled.div`
  display: flex;
  flex-direction: column;
`
export const ChannelName = styled.p`
  font-family: Roboto;
  font-size: 15px;
  margin: 0px;
  color: ${props => (props.displayMode ? '#ffffff' : '#000000')};
`
export const ChannelSubscribers = styled.p`
  font-family: Roboto;
  font-size: 13px;
  margin: 5px;
  margin-left: 0px;
  color: ${props => (props.displayMode ? '#ffffff' : '#000000')};
`
export const ChannelDescription = styled.p`
  font-family: Roboto;
  font-size: 15px;
  color: ${props => (props.displayMode ? '#ffffff' : '#000000')};
`
