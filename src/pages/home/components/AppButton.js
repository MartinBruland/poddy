import React from 'react'


const AppButton = (props) => {

    const style = {
        'button': {
            'width': '100px',
            'height': '100px',
            'background': '#1c1e24',
            'color': '#d0d5df',
            'margin': '5px',
            'borderRadius': '12px',
            'cursor': 'pointer'
        }
    }

    return (
        <button style={style.button}>
            {props.title}
        </button>
    )

}

export default AppButton
