import Styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavbarSm = Styled.div`
width:100%;
display:flex;
align-items:center;
padding:22px;
justify-content:space-between;
background-color:${props => props.theme};
margin-bottom:0px;
`
export const LinkCont = Styled(Link)`
text-decoration:none;
`

export const LogoImg = Styled.img`
@media screen and (max-width:570px){
    width:100px;
}
width:140px;
`

export const BttnCont = Styled.div`
display:flex;
align-items:center;
@media screen and (min-width:570px){
    display:none
}
`

export const BttnElement = Styled.button`
border:0px;
background-color:transparent;
font-size:20px;
color:${props => props.color};
outline:none;
@media screen and (min-width:570px){
    font-size:25px;
}
`
export const NavbarMdBttn = Styled.div`
@media screen and (max-width:570px){
    display:none;
}
display:flex;
align-items:center;
`
export const ImgElementProfile = Styled.img`
width:35px;
margin-left:8px;
`
export const BtnLogout = Styled.button`
padding:5px;
border:2px solid;
border-color:${props => props.color};
width:100px;
margin-left:10px;
background-color:transparent;
border-radius:5px;
color:${props => props.color};
font-weight:bold;
`
export const ButtonPopupCont = Styled.div`
display:flex;
flex-direction:column;
align-items:center;
background-color:${props => props.backgroundColor};
padding:60px;
border-radius:10px;
@media screen and (max-width:575px){
    padding:40px 30px 40px 30px;
}

`
export const ParaText = Styled.p`
color:${props => props.color};
font-family:"Roboto";
margin-top:0px;
margin-left:2px;
font-weight:500;
`
export const ButtonContainerLogout = Styled.div`
display:flex;
align-items:center;
`
export const ButtonCancel = Styled.button`
padding:5px;
border:2px solid;
border-color:${props => props.borderColor};
width:100px;
margin-left:10px;
background-color:${props => props.backgroundColor};
border-radius:5px;
color:${props => props.textColor};
font-weight:bold;


`
export const SmallDevicesPopup = Styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
height:100vh;
width:100vw;
background-color:${props => props.backgroundColor};
`

export const BttnContainer = Styled.div`
display:flex;
justify-content:flex-end;
padding:20px;
width:100%;
`
export const ButtonRemove = Styled.button`
background-color:transparent;
border:0px;
outline:none;
font-size:${props => props.fontSize};
color:${props => props.color};
font-weight:bold;

`
