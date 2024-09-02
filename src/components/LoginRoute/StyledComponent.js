import Styled from 'styled-components'

export const MainContainer = Styled.div`
width:100%;
height:100vh;
display:flex;
align-items:center;
justify-content:center;
background-color:${props => props.color};
`

export const LoginCont = Styled.div`
padding:20px;
width:30%;
display:flex;
flex-direction:column;
align-items:center;
border-radius:15px;
background-color:${props => props.color};
@media screen and (max-width:570px){
    width:90%;
}
@media screen and (min-width:570px) and (max-width:780px){
    width:50%;
}
@media screen and (min-width:780px){
    padding:40px 20px 40px 20px;
}

`

export const ImageElement = Styled.img`
width:180px;
@media screen and (max-width:570px){
    width:100px;
}
`

export const InputElement = Styled.input`
padding:8px;
border:1px solid #475569;
border-radius:5px;
width:100%;
margin-top:5px;
color:#475569;
background-color:transparent;
outline:none;
`

export const FormCont = Styled.form`
padding:10px;
width:100%;
display:flex;
flex-direction:column;
align-items:center;
`

export const LabelEle = Styled.label`
align-self:flex-start;
font-weight:500;
margin-bottom:2px;
font-family:"Roboto";
color:${props => props.color};
@media screen and (max-width:570px){
    font-size:12px;
}
`
export const InputEleCont = Styled.div`
width:100%;
padding:10px;
margin:5px 0px 5px 0px;
@media screen and (max-width:570px){
    padding:7px;
}


`
export const BtnSubmit = Styled.button`
background-color:#4f46e5;
padding:5px;
border:0px;
border-radius:4px;
width:95%;
color:#ffffff;
font-weight:bold;
margin-top:20px;
`

export const CheckboxCont = Styled.div`
display:flex;
align-items:center;
margin-top:10px;
`
export const CheckboxEle = Styled.input`
border:1px solid #475569;
margin-right:2px;
`

export const LabelShow = Styled.label`
color:${props => props.color};
font-weight:500;
font-family:"Roboto";
`
export const ErrorMsg = Styled.p`
color:#ff0b37;
font-family:"Roboto";
font-size:12px;
`
export const ErrMsgCont = Styled.div`
width:95%;`
