import React from 'react';
import { Link } from "react-router-dom";
import './Home.css';
import AppButton from './components/AppButton';
import DateWidget from './components/DateWidget';
import ProfileButton from './components/ProfileButton';

class Home extends React.Component {

  constructor(props) {

    super(props);

    this.state = {

    };

  };



  render() { 
    return (
      <div id="home">
        <header>
          <DateWidget />
          <ProfileButton username={this.props.username} picture={this.props.picture} logoutMethod={() => this.props.logoutMethod()} />
        </header>
        <main>
        
          <h1>poddy</h1>

          <input id='searchbar' placeholder="Search..." />

          <div id='applicationContainer'>

            <Link to='/about'>
              <AppButton title='About' />
            </Link>



            <Link to='/podbrowser'>
              <AppButton title='Pod Browser' />
            </Link>

            <Link to='/bookmarks'>
              <AppButton title='Bookmarks' />
            </Link>
            
            <Link to='/marketplace'>
              <AppButton title='Marketplace' />
            </Link>

            <Link to='/rss'>
              <AppButton title='RSS Feed' />
            </Link>

            <Link to='/homesystem'>
              <AppButton title='Home System' />
            </Link>

            <Link to='/connections'>
              <AppButton title='Connections' />
            </Link>

            <Link to='/calendar'>
              <AppButton title='Calendar' />
            </Link>

            <Link to='/reminders'>
              <AppButton title='Reminders' />
            </Link>

            <Link to='/notes'>
              <AppButton title='Notes' />
            </Link>




          </div>

        </main>
      </div>
    )
    
  }
}

export default Home;