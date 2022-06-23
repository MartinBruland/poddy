import React from 'react';




const ProfileButton = (props) => {

    let style = {
        'container': {
            'display': 'flex',
            'flexDirection': 'column',
            'justifyContent': 'center',
            'alignItems': 'center',
            'marginLeft': 'auto',
            'width': '200px',
        },
        'button': {
            'display': 'flex',
            'flexDirection': 'row',
            'justifyContent': 'flex-start',
            'alignItems': 'center',
            'width': '200px',
            'height': '40px',
            'color': '#d0d5df',
            'background': '#282c34',
            'borderRadius': '25px',
            'cursor': 'pointer'
        },
        'img': {
            'color': 'white'
        },
        'p': {
            'color': '#d0d5df',
            'width': '100%',
            'textAlign': 'center',
            'fontWeight': 'bold',
            'letterSpacing': '1.2px'
        },
        'dropdown': {
            'position': 'absolute',
            'display': 'none',
            'flexDirection': 'column',
            'justifyContent': 'flex-end',
            'alignItems': 'center',
            'width': '170px',
            'height': '200px',
            'background': '#1c1e24',
            'borderRadius': '12px',
            'top': '47px',
        },
        'dropdownBttn': {
            'width': '95%',
            'height': '30px',
            'cursor': 'pointer',
            'background': '#282c34',
            'color': '#d0d5df',
            'marginBottom': '5px',
            'borderRadius': '12px'
        }
    }


    function handleHover(){
        document.getElementById('dropdownContainer').style.display = 'flex'
      }
  
      function onMouseLeaveHander() {
        document.getElementById('dropdownContainer').style.display = 'none'
      }



    return (
        <div style={style.container} onMouseOver={handleHover} onMouseOut={onMouseLeaveHander} >
            <button style={style.button}>
                <img style={style.img} href={props.image} alt=''></img>
                <p style={style.p}>{props.username ?? 'Default User'}</p>
            </button>

            <div style={style.dropdown} id='dropdownContainer'>
                <button style={style.dropdownBttn}>Settings</button>
                <button style={style.dropdownBttn} onClick={() => props.logoutMethod()}>Logout</button>
            </div>

        </div>
    )
}

export default ProfileButton