import React from 'react'
import { handleIncomingRedirect, login, fetch, getDefaultSession } from '@inrupt/solid-client-authn-browser'
import { getSolidDataset, saveSolidDatasetAt } from "@inrupt/solid-client";

import Home from '../pages/home/Home';



class PoddyBackend extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            podProvider: '',
            webID: '',
            podURL: '',
            username: '',
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

    loginUser() {

    };

    logoutUser() {

    };

    getData() {

    };

    postData() {

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
        return <Home />
    }

}

export default PoddyBackend