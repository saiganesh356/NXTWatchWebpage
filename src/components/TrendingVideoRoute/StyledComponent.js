import Styled from 'styled-components'
import {Link} from 'react-router-dom'

export const MainContainer = Styled.li`
display:flex;
flex-direction:column;
margin:10px;
width:300px;
@media screen and (max-width:576px){
    display:flex;
    flex-direction:column;
    width:90%;
}
@media screen and (min-width:580px){
    width:90%;
}
`

export const InnerContainer = Styled.div`
display:flex;
flex-direction:column;
width:100%;
@media screen and (min-width:580px){
    flex-direction:row;
    width:100%;
}
`
export const ImageEle = Styled.img`

@media screen and (max-width:576px){
    width:100%;
}
@media screen and (min-width:580px){
width:350px;
}
`

export const TextAndImage = Styled.div`
display:flex;
flex-direction:column;
padding-top:10px;
@media screen and (min-width:580px){
    width:100%;
    flex-direction:column;
    padding:20px;
}
`

export const TextContainer = Styled.div`
display:flex;
flex-direction:column;

`

export const ImageProfile = Styled.img`
width:30px;
height:30px;
margin-right:5px;
`
export const ParaText = Styled.p`
color:${props => props.color};
font-family:"Roboto";
margin-top:0px;
margin-left:2px;
font-weight:500;
@media screen and (min-width:576px){
    font-size:20px;
}
`
export const NameText = Styled.p`
color:#64748b;
font-family:"Roboto";
margin-top:0px;
margin-left:2px;
`

export const DotElement = Styled.div`
color:${props => props.color};
`
export const TextContainerNames = Styled.div`
display:flex;
flex-direction:row;

`
export const LinkCont = Styled(Link)`
text-decoration:none;
`
