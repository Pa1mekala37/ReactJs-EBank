import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {
  BgContainer,
  CardContainer,
  LoginLogo,
  FormContainer,
  LoginButton,
  ErrorMsg,
  InputLabel,
  InputField,
  LoginWelcomeHeading,
  InputContainer,
} from './styledComponents'

class Login extends Component {
  state = {
    userId: '',
    userPin: '',
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeUserId = event => {
    this.setState({
      userId: event.target.value,
    })
  }

  onChangeUserPin = event => {
    this.setState({
      userPin: event.target.value,
    })
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({
      showSubmitError: true,
      errorMsg,
    })
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {userId, userPin} = this.state
    const userDetails = {userId, userPin}
    const loginUrl = 'https://apis.ccbp.in/ebank/login'
    const options = {
      mode: 'cors',
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(loginUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderUserIdField = () => {
    const {userId} = this.state

    return (
      <>
        <InputLabel htmlFor="userId">User ID</InputLabel>
        <InputField
          type="text"
          value={userId}
          id="userId"
          placeholder="Enter User ID"
          onChange={this.onChangeUserId}
        />
      </>
    )
  }

  renderUserPinField = () => {
    const {userPin} = this.state

    return (
      <>
        <InputLabel htmlFor="userPin">PIN</InputLabel>
        <InputField
          type="password"
          value={userPin}
          id="userPin"
          placeholder="Enter PIN"
          onChange={this.onChangeUserPin}
        />
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <BgContainer>
        <CardContainer>
          <LoginLogo
            src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
            alt="website login"
          />
          <FormContainer onSubmit={this.onSubmitForm}>
            <LoginWelcomeHeading>Welcome Back!</LoginWelcomeHeading>

            <InputContainer>{this.renderUserIdField()}</InputContainer>
            <InputContainer>{this.renderUserPinField()}</InputContainer>
            <LoginButton type="submit">Login</LoginButton>
            {showSubmitError && <ErrorMsg>{errorMsg}</ErrorMsg>}
          </FormContainer>
        </CardContainer>
      </BgContainer>
    )
  }
}

export default Login
