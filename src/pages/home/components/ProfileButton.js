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
            'background': '#282c34',
            'cursor': 'pointer',
            'padding': '5px',
            'borderRadius': '25px',
        },
        'p': {
            'width': '100%',
            'textAlign': 'center',
            'fontWeight': 'bold',
            'letterSpacing': '1.2px'
        },
        'img': {
            'width': '30px',
            'height': '30px',
            'clipPath': 'circle(50%)',
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
                <img style={style.img} src={props.picture} alt=''></img>
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