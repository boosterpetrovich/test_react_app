import React from 'react'
import { connect } from 'react-redux'
import firebase from 'firebase/app'
import 'firebase/auth'
import * as firebaseui from 'firebaseui'
import { setUserProfile } from '../actions/index'
import { userReducer } from '../reducers/index'

import '../../node_modules/firebaseui/dist/firebaseui.css'

class Auth extends React.Component {
    constructor(props) {
        super(props)
        // Initialize Firebase
        const config = {
            apiKey: "AIzaSyCEaIoyIZYqPHRmeCx0weoEpofIPx4taUQ",
            authDomain: "magazilla-4275a.firebaseapp.com",
            databaseURL: "https://magazilla-4275a.firebaseio.com",
            projectId: "magazilla-4275a",
            storageBucket: "",
            messagingSenderId: "280790960690"
        }
        firebase.initializeApp(config)
        let that = this;
        firebase.auth().onAuthStateChanged(function(user) {
            that.authStateChanged(user)
        })

    }

    login(e) {
        e.preventDefault()
        var ui = new firebaseui.auth.AuthUI(firebase.auth())

        ui.start('#firebaseui-auth-container', {
            signInFlow: 'popup',
            signInSuccessUrl: '/signin',
            signInOptions: [
                {
                    provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                    requireDisplayName: false
                }
            ]
        });
    }

    logout(e) {
        e.preventDefault()
        firebase.auth().signOut().then(e => {
            console.log('logged out successfully');
        })
    }

    authStateChanged(user) {
        if (user) {
            // update store
            this.props.setUserProfile(user)
        }
    }

    render() {

        // if ( !this.state.user.uid && !this.state.is_received ) {
        //     return (
        //         <div>
        //             loading ...
        //         </div>
        //     )
        // } else if( !this.state.user.uid && this.state.is_received ) {
        //     return (
        //         <div>
        //             Please <a href="#" onClick={this.login}>log in</a>
        //             <div id="firebaseui-auth-container"></div>
        //         </div>
        //     )
        // } else {
        //     return (
        //         <div>
        //             Hi {this.state.user.name} <a href="#" onClick={this.logout}>Logout</a>
        //         </div>
        //     )
        // }

    }
}

const mapStateToProps = state => ({
  currentUser: state.data.currentUser
})

const mapDispatchToProps = dispatch => ({
    setUserProfile: user => {
        dispatch(setUserProfile(user));
    },
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Auth)
