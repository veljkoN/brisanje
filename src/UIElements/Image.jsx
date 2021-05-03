import React from 'react'

const Image = props => {
    return (
       <img src={props.src} alt={props.alt} style={{width:props.width, height:props.height}} />
    )
}

export default Image
