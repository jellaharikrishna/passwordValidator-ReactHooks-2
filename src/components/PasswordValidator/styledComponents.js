import styled from 'styled-components'

export const AppContainer = styled.div`
height: 100vh;
background-color: #24263c;
display: flex;
justify-content: center;
align-items: center;
`

export const ContentContainer = styled.div`
min-height: 250px;
max-width: 450px;
width: 90%;
background-color: #383a4e;
padding: 10px;
border-radius: 10px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media screen and (min-width: 768px){
  min-height: 280px;
  max-width: 400px;
}
`

export const MainHeading = styled.h1`
font-family: Roboto;
color: #ffffff;
font-size: 30px;
@media screen and (min-width: 768px){
 font-size: 35px;
}
`

export const Para = styled.p`
font-family: Roboto;
font-size: 14px;
color: #f8fafc;
width: 260px;
margin-top: 0;
margin-bottom: 40px;
text-align: center;
@media screen and (min-width: 768px){
width: 350px;
}
`

export const Input = styled.input`
height: 35px;
width: 80%;
font-family: Roboto;
padding-left: 15px;
outline: none;
border-width: 0;
border-radius: 2px;
background-color:  #edeeff;
`

export const ErrorMsg = styled.p`
font-family: Roboto;
color: #ef4444;
text-align: center;
font-size: 12px;
margin-top: 10px;
`

/*

// export const ErrorMsg = styled.p``

  AppContainer,
    ContentContainer,
    MainHeading,
    Para,
    Input,
    ErrorMsg,

*/
