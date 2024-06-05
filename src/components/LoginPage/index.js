import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import {
  LoginbgContainer,
  LoginCardDiv,
  LogoImage,
  FormElement,
  InputContainer,
  Label,
  Input,
  CheckbokDiv,
  LoginBotton,
  Checkbox,
  CheckboxLabel,
  ErrorMsg,
} from './styledComponents'

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
    isChecked: false,
    showErrorMsg: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeShowPassword = () => {
    this.setState(prevState => ({isChecked: !prevState.isChecked}))
  }

  onClickLoginButton = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const url = 'https://apis.ccbp.in/login'
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      Cookies.set('jwt_token', data.jwt_token, {expires: 30})
      const {history} = this.props
      history.replace('/')
    } else {
      this.setState(prevState => ({
        errorMsg: data.error_msg,
        showErrorMsg: !prevState.showErrorMsg,
      }))
    }
  }

  render() {
    const {username, password, isChecked, showErrorMsg, errorMsg} = this.state
    const inputType = isChecked ? 'text' : 'password'

    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkMode} = value
          const logoImage = isDarkMode
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <LoginbgContainer displayMode={isDarkMode}>
              <LoginCardDiv displayMode={isDarkMode}>
                <LogoImage src={logoImage} alt="website logo" />
                <FormElement onSubmit={this.onClickLoginButton}>
                  <InputContainer>
                    <Label htmlFor="username" displayMode={isDarkMode}>
                      USERNAME
                    </Label>
                    <Input
                      type="text"
                      id="username"
                      value={username}
                      onChange={this.onChangeUsername}
                      placeholder="Username"
                    />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="password" displayMode={isDarkMode}>
                      PASSWORD
                    </Label>
                    <Input
                      type={inputType}
                      id="password"
                      placeholder="Password"
                      value={password}
                      onChange={this.onChangePassword}
                    />
                  </InputContainer>
                  <CheckbokDiv>
                    <Checkbox
                      type="checkbox"
                      id="checkbox"
                      onClick={this.onChangeShowPassword}
                    />
                    <CheckboxLabel htmlFor="checkbox" displayMode={isDarkMode}>
                      Show Password
                    </CheckboxLabel>
                  </CheckbokDiv>
                  <LoginBotton type="submit">Login</LoginBotton>
                  {showErrorMsg && <ErrorMsg>{`*${errorMsg}`}</ErrorMsg>}
                </FormElement>
              </LoginCardDiv>
            </LoginbgContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default LoginPage
