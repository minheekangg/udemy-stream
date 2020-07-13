import React from 'react';

const CLIENTID = process.env.REACT_APP_CLIENTID;

export default class GoogleAuth extends React.Component {
    state = {
        isSignedIn: false,
    }
    componentDidMount(){
        window.gapi.load('client:auth2', ()=> {
            window.gapi.client.init({
                clientId: CLIENTID,
                scope: 'email'
            })
            .then(()=> {
                this.auth = window.gapi.auth2.getAuthInstance();
                
                this.onAuthChange();
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        });
    }

    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    }

    renderAuthButton(){
        if (this.state.isSignedIn === null) {
            return <div>I dont know</div>
        } else if (this.state.isSignedIn) {
            return <div>I am signed in</div>
        } else {
            return <div>I am signed out</div>
        }
    }

    render(){
        return <div>{this.renderAuthButton()}</div>
    }
}