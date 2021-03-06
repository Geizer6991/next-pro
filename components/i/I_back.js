import styled from 'styled-components'
import React from "react";

const I_back_style = styled.div`

 width:100%;
 height:100%;
 
& > video {
    -webkit-filter: brightness(40%);
    filter: brightness(30%);
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    top: 0;
    left: 0;
    z-index: -1;
  }
  &>.font_side{
  position:relative;
  width:100%;
  height:100%;
   z-index:1;
  }

`



let I_back = ({children})=>{
 return(
     <I_back_style>
         <video src={'https://www.vidsplay.com/wp-content/uploads/2017/04/stormy_beach.mp4?_=1'} muted autoPlay loop/>
         <div className={'font_side'}>{children}</div>
     </I_back_style>

 )
}
export default I_back;
