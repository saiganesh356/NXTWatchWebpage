import Styled from 'styled-components'

export const MainContainer = Styled.div`
display:flex;
height:90vh;
background-color:${props => props.backgroundColor};
@media screen and (max-width:570px){
    display:flex;
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
width:100%;
display:flex;
height:100%;
flex-direction:column;
background-color:${props => props.backgroundColor};
@media screen and (max-width:576px){
    width:100%;
}
`

export const AdContainer = Styled.div`
background-image:url("https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png");
width:100%;
height:43%;
padding:40px;
display:${props => props.property};
flex-direction:column;
justify-content:center;
background-size:cover;
@media screen and (max-width:570px){
    width:100%;
}
`
export const BtnImageCont = Styled.div`
display:flex;
align-items:center;
justify-content:space-between;
width:90%;
@media screen and (max-width:576px){
    width:100%;
}
`

export const ImageElement = Styled.img`
width:120px;
@media screen and (max-width:576px){
    width:80px;
}
`

export const Heading = Styled.p`
color:#1e293b;
font-size:20px;
@media screen and (max-width:576px){
    font-size:18px;
}
`
export const ButtonGetNow = Styled.button`
border:1px solid #1e293b;
padding:5px;
color:#1e293b;
width:120px;
background-color:transparent;
`
export const ButtonRemove = Styled.button`
background-color:transparent;
border:0px;
outline:none;
font-size:${props => props.fontSize};
color:${props => props.color};
font-weight:bold;
`

export const InputContainer = Styled.div`
display:flex;
align-items:center;
justify-content:space-between;
border:1px solid;
border-color:${props => props.borderColor};
width:40%;
margin-left:10px;
border-radius:4px;
@media screen and (max-width:570px){
    width:90%;
}
`

export const InputElement = Styled.input`
padding:5px;
border:0px;
outline:none;
width:100%;
height:100%;
background-color:transparent;
color:${props => props.color};
`
export const ImageContSearch = Styled.div`
display:flex;
align-items:center;
justify-content:center;
padding:8px 25px 8px 25px;
background-color:${props => props.backgroundColor};
`
export const AllElementsCont = Styled.div`
padding:40px 10px 40px 10px;
width:100%;
height:100%;
`
export const VideoListContainer = Styled.ul`
padding-left:0px;
list-style-type:none;
width:100%;
height:${props => props.height};

display:flex;
flex-wrap:wrap;
overflow-y:scroll;
scrollbar-width:none;
transition:height 0.3s ease;
@media screen and (max-width:570px){
    height:${props => props.height};
    display:flex;
    flex-grow:1;
    overflow-y:scroll;
    width:100%;
    
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
padding:15px;
`
export const ImageFailure = Styled.img`
width:300px;
@media screen and (max-width:575px){
    width:200px;
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
export const EmptyCont = Styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
width:100%;
height:100%;
padding:15px;
`
