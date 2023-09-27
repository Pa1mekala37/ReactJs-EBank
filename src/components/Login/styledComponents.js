import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #152850;
`

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #e0eefe;
  height: 80vh;
  width: 60%;
  border-radius: 25px;
`

export const LoginLogo = styled.img`
  height: 350px;
  width: 450px;
  margin-top: 80px;
  margin-bottom: 80px;
`

export const LoginWelcomeHeading = styled.h1`
  color: #152850;
  font-size: 36px;
  font-family: 'Roboto';
  font-weight: bold;
`

export const FormContainer = styled.form`
  height: 80vh;
  width: 50%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 25px;
  padding-left: 10px;
  padding-right: 10px;
`

export const LoginButton = styled.button`
  width: 100%;
  color: #ffffff;
  background-color: #1565d8;
  font-size: 16px;
  font-family: 'Roboto';
  border: none;
  outline: none;
  border-radius: 4px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 20px;
`

export const ErrorMsg = styled.p`
  text-align: center;
  color: #ff0b37;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
`

export const InputLabel = styled.label`
  color: #5a7184;
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: bold;
  margin-bottom: 10px;
`

export const InputField = styled.input`
  height: 40px;
  border-radius: 6px;
  border: 1px solid #c3cad9;
  padding-left: 10px;
  font-size: 14px;
  font-family: 'Roboto';
  outline: none;
`
