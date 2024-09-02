import {Link} from 'react-router-dom'
import Styled from 'styled-components'

export const MainContainer = Styled.div`
display:flex;
flex-direction:column;
margin:5px;
width:300px;
text-decoration:none;
@media screen and (max-width:576px){
    width:100%;
}
`
export const LinkCont = Styled(Link)`
text-decoration:none;
`

export const InnerContainer = Styled.div`
display:flex;
flex-direction:column;
`
export const ImageEle = Styled.img`
width:300px;
@media screen and (max-width:576px){
    width:100%;
}

`

export const TextAndImage = Styled.div`
display:flex;
align-items:center;
padding-top:10px;
`

export const TextContainer = Styled.div`
display:flex;
flex-direction:column;

`

export const ImageProfile = Styled.img`
width:30px;
height:30px;
margin-right:5px;
@media screen and (max-width:575px){
    width:20px;
    height:20px;
}
`
export const ParaText = Styled.p`
color:${props => props.color};
font-family:"Roboto";
margin-top:0px;
margin-left:2px;
@media screen and (max-width:575px){
    font-size:13px;
}
`
export const NameText = Styled.p`
color:#64748b;
font-family:"Roboto";
margin-top:0px;
margin-left:2px;
@media screen and (max-width:575px){
    font-size:10px;
    margin-right:2px;
}

`

export const DotElement = Styled.div`
color:${props => props.color};
margin-top:0px;
margin-bottom:0px;
@media screen and (max-width:570px){
    display:none;
}
`
