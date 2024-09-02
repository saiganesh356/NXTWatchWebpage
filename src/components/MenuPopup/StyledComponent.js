import Styled from 'styled-components'
import {Link} from 'react-router-dom'

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
width:100%;
padding:2px 20px 2px 20px;
margin:2px;
text-decoration:none;
background-color:${props => props.backgroundColor};
border-radius:5px;
margin:4px;
`
export const LinkCont = Styled(Link)`
text-decoration:none;
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
export const ImageElement = Styled.div`
font-size:30px;
margin-right:15px;
color:${props => props.color};
`
