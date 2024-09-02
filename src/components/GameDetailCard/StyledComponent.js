import Styled from 'styled-components'
import {Link} from 'react-router-dom'

export const ListItems = Styled.li`
display:flex;
flex-direction:column;
margin:3px;
@media screen and (max-width:570px){
    width:30%;
}
@media screen and (min-width:575px){
    width:220px;
}

`
export const ImageElement = Styled.img`
@media screen and (max-width:570px){
    width:100px;
}
@media screen and (min-width:570px){
    width:200px;
}
`
export const ParaText = Styled.p`
color:${props => props.color};
font-family:"Roboto";
margin-top:10px;
margin-left:2px;
font-weight:500;
@media screen and (max-width:575px){
    font-size:13px;
}
`
export const NameText = Styled.p`
color:#64748b;
font-family:"Roboto";
margin-top:0px;
margin-left:2px;
@media screen and (max-width:580px){
    font-size:10px;
}
`
export const LinkCont = Styled(Link)`
text-decoration:none;
`
