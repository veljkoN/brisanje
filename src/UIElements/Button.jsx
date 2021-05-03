import React from 'react'

const Button = props => {
    return (
        <button className={`btn btn-${props.class}`} onClick={props.click} disabled={props.disabled }>
            {props.children}
        </button>
    )
}

export default Button
