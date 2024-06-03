import styled from 'styled-components'

export const LoginbgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.displayMode ? '#181818' : '#f9f9f9')};
  min-height: 100vh;
`
export const LoginCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  width: 340px;
  border-radius: 8px;
  box-shadow: 0px 4px 16px 0px
    ${props => (props.displayMode ? '#313131' : '#bfbfbf')};
  background-color: ${props => (props.displayMode ? '#0f0f0f' : '#ffffff')};

  @media screen and (min-width: 768px) {
    width: 400px;
  }
`
export const LogoImage = styled.img`
  width: 100px;
`
export const FormElement = styled.form`
  margin-top: 5px;
  margin-bottom: 5px;
  width: 100%;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px;
`
export const Label = styled.label`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: bold;
  padding-bottom: 5px;
  color: ${props => (props.displayMode ? '#ffffff' : '#606060')};
`
export const Input = styled.input`
  padding: 7px;
  outline: none;
  font-size: 15px;
  font-family: Roboto;
`
export const CheckbokDiv = styled.div`
  display: flex;
  align-items: center;
  margin: 15px;
`
export const LoginBotton = styled.button`
  border: none;
  outline: none;
  background-color: #3b82f6;
  color: #ffffff;
  padding: 10px;
  font-size: 15px;
  font-family: Roboto;
  cursor: pointer;
  border-radius: 5px;
  margin-left: 15px;
  margin-right: 15px;
  width: 91%;
`
export const Checkbox = styled.input`
  cursor: pointer;
`
export const CheckboxLabel = styled.label`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: bold;
  padding-bottom: 5px;
  margin-top: 5px;
  margin-left: 5px;
  cursor: pointer;
  color: ${props => (props.displayMode ? '#ffffff' : '#606060')};
`
export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-family: Roboto;
  font-size: 15px;
  margin-left: 15px;
`
