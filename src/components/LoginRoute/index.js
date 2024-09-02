import Cookies from 'js-cookie'
import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import ContextController from '../../ContextConfiguration/configurationcontext'
import {
  MainContainer,
  LoginCont,
  ImageElement,
  InputElement,
  FormCont,
  LabelEle,
  InputEleCont,
  BtnSubmit,
  CheckboxCont,
  CheckboxEle,
  LabelShow,
  ErrorMsg,
  ErrMsgCont,
} from './StyledComponent'

class LoginRoute extends Component {
  state = {showPassword: 'password', userName: '', password: '', errMsg: ''}

  showPassword = event => {
    const status = event.target.checked
    if (status) {
      this.setState({showPassword: 'text'})
    } else {
      this.setState({showPassword: 'password'})
    }
  }

  getUsername = event => {
    this.setState({userName: event.target.value})
  }

  getPassword = event => {
    this.setState({password: event.target.value})
  }

  submitJwtToken = token => {
    const {history} = this.props
    Cookies.set('jwt_token', token, {expires: 30})
    history.replace('/')
  }

  submitDetails = async event => {
    event.preventDefault()
    const {userName, password} = this.state
    const details = {
      username: userName,
      password,
    }
    console.log(details)
    const options = {
      method: 'POST',
      body: JSON.stringify(details),
    }
    const url = 'https://apis.ccbp.in/login'
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.setState({errMsg: ''})
      this.submitJwtToken(data.jwt_token)
    } else {
      const errorMsg = `*${data.error_msg}`
      this.setState({errMsg: errorMsg})
    }
  }

  render() {
    const {showPassword, errMsg} = this.state

    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <ContextController.Consumer>
        {value => {
          const {isDark} = value

          const lightUrl =
            'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          const darkUrl =
            'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

          return (
            <MainContainer color={isDark ? '#231f20' : '#f9f9f9'}>
              <LoginCont color={isDark ? '#0f0f0f' : '#f9f9f9'}>
                <ImageElement
                  src={isDark ? darkUrl : lightUrl}
                  alt="website logo"
                />
                <FormCont>
                  <InputEleCont>
                    <LabelEle
                      htmlFor="username"
                      color={isDark ? '#f1f5f9' : '#475569'}
                    >
                      USERNAME
                    </LabelEle>
                    <InputElement
                      id="username"
                      type="input"
                      placeholder="Username"
                      onChange={this.getUsername}
                    />
                  </InputEleCont>
                  <InputEleCont>
                    <LabelEle
                      htmlFor="password"
                      color={isDark ? '#f1f5f9' : '#475569'}
                    >
                      PASSWORD
                    </LabelEle>
                    <InputElement
                      id="password"
                      type={showPassword}
                      placeholder="Password"
                      onChange={this.getPassword}
                    />
                    <CheckboxCont>
                      <CheckboxEle
                        type="checkbox"
                        id="showpassword"
                        onClick={this.showPassword}
                      />
                      <LabelShow
                        htmlFor="showpassword"
                        color={isDark ? '#f1f5f9' : '#181818'}
                      >
                        Show Password
                      </LabelShow>
                    </CheckboxCont>
                  </InputEleCont>

                  <BtnSubmit type="submit" onClick={this.submitDetails}>
                    Login
                  </BtnSubmit>
                  <ErrMsgCont>
                    <ErrorMsg>{errMsg}</ErrorMsg>
                  </ErrMsgCont>
                </FormCont>
              </LoginCont>
            </MainContainer>
          )
        }}
      </ContextController.Consumer>
    )
  }
}

export default LoginRoute
