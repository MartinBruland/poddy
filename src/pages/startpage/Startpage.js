import React from 'react';
import './Startpage.css'


class Startpage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        };

    }



    render() {
        return (
            <div id='startpage'>
                
                <div id='loginView'>
                    <h1>LOGIN WITH SOLID</h1>
                    <button className='loginBttn' onClick={() => this.props.loginMethod('https://login.inrupt.com')}>Pod Spaces</button>
                    <button className='loginBttn' onClick={() => this.props.loginMethod('https://solidcommunity.net')}>Solid Community</button>
                    <button className='loginBttn' onClick={() => this.props.loginMethod('https://inrupt.net')}>Inrupt.net</button>
                    <input className='loginBttn' onKeyDown={(e) => this.props.loginMethod(e.target.value)} placeholder='Custom'></input>
                </div>
            </div>    
        )
    }


}
export default Startpage