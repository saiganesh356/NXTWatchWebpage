import {Link} from 'react-router-dom'
import Styled from 'styled-components'

export const MainContainer = Styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:column;
justify-content:space-between;
margin-top:0px;
padding-top:0px;
background-color:${props => props.backgroundColor};
`

export const OptionsCont = Styled.ul`
padding-left:0px;
list-style-type:none;
width:100%;
padding-top:0px;
display:flex;
flex-direction:column;
align-items:center;
width:100%;
`
export const ListItem = Styled.li`
display:flex;
align-items:center;
width:90%;
padding:2px 20px 2px 20px;
margin:2px;
text-decoration:none;
background-color:${props => props.backgroundColor};
border-radius:5px;
`
export const Para = Styled.p`
color:#475569;
margin-left:13px;
font-size:15px;
color:${props => props.color};
font-weight:500;
`
export const ImageElement = Styled.div`
font-size:30px;
margin-right:15px;
color:${props => props.color};
`
export const ButtonElement = Styled.button`
border:0px;
background-color:transparent;
outline:none;
padding:3px;
display:flex;
align-items:center;
width:100%;
color:${props => props.color};
font-weight:${props => props.fontWeight};
`

export const FooterCont = Styled.div`
display:flex;
flex-direction:column;
padding:0px 2px 27px 25px;
`

export const HeadingFooter = Styled.p`
color:${props => props.color};
font-weight:bold;
font-size:22px;
font-family:"Roboto";
font-size:${props => props.fontSize};

`
export const ImageContList = Styled.div`
display:flex;
align-items:center;
width:100%;
`
export const ImageFacebook = Styled.img`
width:30px;
margin-right:10px;
`

export const LinkCont = Styled(Link)`
text-decoration:none;
`
