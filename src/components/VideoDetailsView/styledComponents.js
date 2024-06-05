import styled from 'styled-components'

export const VideoDetailMainContainer = styled.div`
  @media screen and (min-width: 768px) {
    max-width: 100vw;
    height: 100vh;
  }
`
export const VideoDetailBodyContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`
export const VideoDetailContainer = styled.div`
  width: 100vw;
  min-height: 91vh;
  @media screen and (min-width: 768px) {
    width: 75vw;
    height: 93vh;
    overflow-y: auto;
  }
  background-color: ${props => (props.displayMode ? '#0f0f0f' : '#f9f9f9')};
`
export const LoadingContainer = styled.div`
  margin-top: 80px;
  height: 75vh;
  display: flex;
  justify-content: center;
`
export const FailureContainer = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
