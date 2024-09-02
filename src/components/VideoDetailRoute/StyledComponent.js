import Styled from 'styled-components'
import ReactPlayer from 'react-player'
import {AiOutlineLike} from 'react-icons/ai'
import {BiDislike} from 'react-icons/bi'
import {RiMenuAddFill} from 'react-icons/ri'

export const MainContainer = Styled.div`
display:flex;
height:100vh;
padding-bottom:10px;
@media screen and (max-width:570px){
    display:flex;
    height:90vh;

}
`

export const SideBar = Styled.div`
width:18%;
height:100%;
padding:0px;
@media screen and (max-width:570px){
    display:none;
}
@media screen and (min-width:570px) and (max-width:770px){
    width:30%;
}
`
export const VideoContainer = Styled.div`
width:82%;
display:flex;
flex-direction:column;
padding:20px;
background-color:${props => props.backgroundColor};
@media screen and (max-width:576px){
    width:100%;
    height:95%;
    overflow-y:scroll;
}
@media screen and (min-width:580px){
    height:100%;
    overflow-y:scroll;
    scrollbar-width:none;
}

`

export const Heading = Styled.p`
color:${props => props.color};
font-size:27px;
font-weight:bold;
font-family:"Roboto";
@media screen and (max-width:576px){
    font-size:22px;
}
`

export const VideoItemCont = Styled.div`
width:100%;
padding-bottom:30px;
`
export const LoaderContainer = Styled.div`
width:100%;
height:100%;
display:flex;
align-items:center;
justify-content:center;
`
export const FailureCont = Styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
width:100%;
height:100%;
`
export const ImageFailure = Styled.img`
width:30%;
@media screen and (max-width:575px){
    width:220px;
}
`
export const BtnImageCont = Styled.div`
display:flex;
align-items:center;
justify-content:center;
margin-right:20px;
color:#ff0000;
background-color:${props => props.backgroundColor};
padding:15px;
border-radius:35px;
font-size:40px;
@media screen and (max-width:576px){
    font-size:30px;
}

`
export const ReactPlayerCont = Styled(ReactPlayer)`
width:100%;
`

export const ParaText = Styled.p`
color:${props => props.color};
font-family:"Roboto";
margin-top:0px;
margin-left:2px;
font-weight:500;
@media screen and (min-width:575px){
    font-size:20px;
}
`

export const TextCont = Styled.div`
width:100%;
padding-top:20px;
`
export const TextAndImage = Styled.div`
display:flex;
padding-top:10px;
`
export const NameText = Styled.p`
color:#64748b;
font-family:"Roboto";
margin-top:0px;
margin-left:2px;
@media screen and (max-width:575px){
    font-size:13px;
}
`
export const DotElement = Styled.div`
color:${props => props.color};
`
export const TextContElement = Styled.div`
width:100%;
display:flex;
justify-content:space-between;
@media screen and (max-width:570px){
    flex-direction:column;
    align-items:flex-start;
}
@media screen and (min-width:576px){
    flex-direction:row;
    align-items:center;
}
`
export const ButtonElement = Styled.button`
display:flex;
align-items:center;
background-color:transparent;
border:0px;
padding:8px;
color:#64748b;
font-size:18px;
margin-right:6px;
padding-top:0px;
color:${props => props.color};
@media screen and (max-width:575px){
    font-size:12px;
}
`
export const LikeBttn = Styled(AiOutlineLike)`
font-size:20px;
margin-right:5px;
`
export const DisLikeBttn = Styled(BiDislike)`
font-size:20px;
margin-right:5px;
`

export const SaveBttn = Styled(RiMenuAddFill)`
font-size:20px;
margin-right:5px;
`
export const HorizantalLine = Styled.hr`
background-color:#64748b;
height:2px;
border:none;
width:100%;
`
export const ImageProfile = Styled.img`
width:30px;
height:30px;
margin-right:5px;
@media screen and (min-width:578px){
    width:50px;
    height:50px;
}
`
export const TextContainer = Styled.div`
display:flex;
flex-direction:column;

`
export const ParaTextDes = Styled.p`
color:${props => props.color};
font-family:"Roboto";
margin-top:0px;
margin-left:2px;
font-weight:400;
font-size:12px;
@media screen and (min-width:575px){
    font-size:15px;
    height:100%;
    
}
`
export const HeadingFooter = Styled.h1`
color:${props => props.color};
font-family:"Roboto";
font-size:${props => props.fontSize};

`
export const RetryBttn = Styled.button`
color:#ffffff;
padding:8px;
width:120px;
border:0px;
border-radius:4px;
background-color:#4f46e5;
`
