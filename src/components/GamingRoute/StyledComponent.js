import Styled from 'styled-components'

export const MainContainer = Styled.div`
display:flex;
height:90vh;
@media screen and (max-width:570px){
    display:flex;
    width:100%;

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
background-color:${props => props.backgroundColor};
@media screen and (max-width:576px){
    width:100%;
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

export const VideoListContainer = Styled.ul`
padding-left:0px;
list-style-type:none;
@media screen and (max-width:570px){
    flex-wrap:wrap;
    display:flex;
    justify-content:center;
    overflow-y:scroll;
    height:90%;
    width:100%;
}
@media screen and (min-width:575px){
    display:flex;
    flex-wrap:wrap;
    height:700px;
    overflow-y:scroll;
    width:94%;
    margin-left:20px;
    scrollbar-width:none;

}
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
width:40%;
justify-self:center;
@media screen and (max-width:570px){
    width:220px;
}
`
export const HeaderCont = Styled.div`
display:flex;
align-items:center;
width:100%;
background-color:${props => props.backgroundColor};
padding:10px 10px 10px 35px;
@media screen and (max-width:576px){
    padding:10px 10px 10px 25px;
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
export const HeadingFooter = Styled.h1`
color:${props => props.color};
font-family:"Roboto";
font-size:${props => props.fontSize};

`
export const NameText = Styled.p`
color:#64748b;
font-family:"Roboto";
margin-top:0px;
margin-left:2px;
`
export const RetryBttn = Styled.button`
color:#ffffff;
padding:8px;
width:120px;
border:0px;
border-radius:4px;
background-color:#4f46e5;
`
