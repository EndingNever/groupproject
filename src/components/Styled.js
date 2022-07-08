import styled from 'styled-components'

export const ShopNowButton = styled.button`
background-color: #F5F5F5;
box-shadow: 0 0 0 3px #F5F5F5;
border: none;
border-radius: 25px;
cursor: pointer;
padding: 12px;
margin-top: 16px;
width: 19em;

&:hover {
  background-color: #EDEDED;
}
&:active, :focus{
   /* display: inline-block; */
   /* width: -4px; */
    /* padding: 4px; */
  /*  font-weight: bold;
    font-size: 19px;
    background: #27d9b4; */
    box-shadow: 0 0 0 3px #EDEDED,
                inset 0 0 0 2px black;
}
`