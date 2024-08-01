import {useState} from 'react'

import {
  AppContainer,
  ContentContainer,
  MainHeading,
  Para,
  Input,
  ErrorMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [isError, setError] = useState(true)
  const [password, setPassword] = useState('')

  const onChangePassword = event => {
    setPassword(event.target.value)

    if (event.target.value.length >= 8) {
      setError(false)
    } else {
      setError(true)
    }
  }

  return (
    <AppContainer>
      <ContentContainer>
        <MainHeading>Password Validator</MainHeading>
        <Para>Check how strong and secure is your password</Para>
        <Input type="password" value={password} onChange={onChangePassword} />
        {isError && (
          <ErrorMsg>Your password must be at least 8 characters</ErrorMsg>
        )}
      </ContentContainer>
    </AppContainer>
  )
}

export default PasswordValidator
