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
export const FailureCont = Styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
width:100%;
padding:15px;
`
export const HeadingFooter = Styled.h1`
color:${props => props.color};
font-family:"Roboto";
font-size:${props => props.fontSize};

`
export const ImageFailure = Styled.img`
width:300px;
@media screen and (max-width:575px){
    width:200px;
}
`
export const NameText = Styled.p`
color:#64748b;
font-family:"Roboto";
margin-top:0px;
margin-left:2px;
text-align:center;
`
