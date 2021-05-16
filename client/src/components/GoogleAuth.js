import React from 'react';
import {connect} from 'react-redux';
import {signIn,signOut} from '../actions';


class GoogleAuth extends React.Component{


    componentDidMount()
    {
        window.gapi.load('client:auth2',()=>{
            window.gapi.auth2.init({
                clientId: '183678389307-fu3mko8bvh7blhk5shorg9ubr4sq3o5a.apps.googleusercontent.com',
                scope: 'email'
            }).then(() =>{
                this.auth=window.gapi.auth2.getAuthInstance();
              this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }
    
    onAuthChange=(isSignedIn)=>{
        if(isSignedIn)
        {
            this.props.signIn(this.auth.currentUser.get().getId());
        }
        else{
            this.props.signOut();
        }
    }

    onSignInClick=()=>{
        this.auth.signIn();
    }
    onSignOutClick=()=>{
        this.auth.signOut();
    }
    renderAuth()
    {
        if(this.props.isSignedIn===null)
        {
            return null;
        } else if(this.props.isSignedIn===true)
        {
            return (<div>
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className="google icon"></i>
                    Sign Out
                </button>
                </div>);
        }
        else{}
        return (<div>
            <button onClick={this.onSignInClick} className="ui blue google button">
                <i className="google icon"></i>
                Sign IN
            </button>
            </div>);
    }

    render(){
        return(
            <React.Fragment>
            <div>{this.renderAuth()}</div>
            </React.Fragment>
        );
    }

}
const mapStateToProps=(state)=>{

    return {isSignedIn:state.auth.isSignedIn}
}

export default connect(mapStateToProps,{signOut,signIn})(GoogleAuth);