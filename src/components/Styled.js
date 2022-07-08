import styled from 'styled-components'

const ButtonPrimary = styled.button`
background-color: #F5F5F5;
/* box-shadow: 0 0 0 3px #F5F5F5; */
border: 5px solid #F5F5F5;
border-radius: 25px;
cursor: pointer;
padding: 12px;
margin-top: 16px;
width: 20em;
position: relative;
`

export const ShopNowButton = styled(ButtonPrimary)`

&:hover {
  background-color: #EDEDED;
  border: 5px solid #EDEDED;
  
}
&:active, :focus{
  &::after{
    content:"";
    border: 2px solid black;
    position: absolute;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    top: 0px;
    left: 0px;
    border-radius: 32px;
  }
}
`

export const ApparelButton = styled(ButtonPrimary)`
  border: 3px solid black;
  width: 10em;
  transition: all ease-in-out 0.2s;
  &:hover{
    border: 3px solid black;
    background-color: black;
    color: #fff;
  }
`