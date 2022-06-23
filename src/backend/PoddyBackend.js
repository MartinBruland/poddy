import React from 'react'
import { handleIncomingRedirect, login, fetch, getDefaultSession, logout } from '@inrupt/solid-client-authn-browser'
import { getSolidDataset, getStringNoLocale, getThing, getThingAll, saveSolidDatasetAt, getFile, getNamedNode, getUrl } from "@inrupt/solid-client";

import Home from '../pages/home/Home';
import Startpage from '../pages/startpage/Startpage';



class PoddyBackend extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            podProvider: '',
            webID: '',
            podURL: '',
            username: '',
            picture: '',
            isLoggedIn: false,
            appData: {}
        };

        this.loginUser = this.loginUser.bind(this);
        this.logoutUser = this.logoutUser.bind(this);
        this.getData = this.getData.bind(this);
        this.postData = this.postData.bind(this);
        this.createDataset = this.createDataset.bind(this);
        this.createData = this.createData.bind(this);
        this.updateData = this.updateData.bind(this);
        this.deleteData = this.deleteData.bind(this);
    };

    componentDidMount = async () => {

        let localWebID = '';

        await handleIncomingRedirect().then(() => {

            localWebID = getDefaultSession().info.webId;

            this.setState({isLoggedIn: getDefaultSession().info.isLoggedIn})
            this.setState({webID: localWebID})
            this.setState({podURL: localWebID.split('/profile/card#me')[0]})

            
        }).then( async () => {

            const predicateUsername = 'http://www.w3.org/2006/vcard/ns#fn';
            const predicatePicture = 'http://www.w3.org/2006/vcard/ns#hasPhoto';

            const profileCard = await this.getData(localWebID);
            const thing = getThing(profileCard, localWebID);


            const username = getStringNoLocale(thing, predicateUsername);
            this.setState({username: username});

            const picture = getUrl(thing, predicatePicture);
            this.setState({picture: picture});

        })
        
    }


    loginUser = async (value) => {

        this.setState({podProvider: value});

        if (!getDefaultSession().info.isLoggedIn) {
            await login({
              oidcIssuer: value,
              redirectUrl: window.location.href,
              clientName: "Poddy"
            });
        }

    };

    logoutUser = async () => {

        await logout().then(() => {
            // reset all states
            this.setState({podProvider: ''});
            this.setState({webID: ''});
            this.setState({podURL: ''});
            this.setState({username: ''});
            this.setState({isLoggedIn: false});
            this.setState({appData: {}});
        })

    };

    getData = async (location) => {
        const dataset = await getSolidDataset(location, { fetch: fetch });
        return dataset
    };

    postData = async (location, data) => {
        const dataset = await saveSolidDatasetAt(location, data, { fetch: fetch });
        return dataset
    };

    createDataset() {

    };

    createData() {

    };

    updateData() {

    };

    deleteData() {

    };

    render() {

        if (getDefaultSession().info.isLoggedIn) {
            return <Home username={this.state.username} picture={this.state.picture} logoutMethod={this.logoutUser} />
        }

        return <Startpage loginMethod={this.loginUser} />
        
    }

}

export default PoddyBackend