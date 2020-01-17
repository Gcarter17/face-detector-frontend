import React, { Component } from 'react'


class SignIn extends Component {
    state = {
        signInEmail: '',
        signInPassword: '',
    }
    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value})
    }
    // onWrongPassword = (event) => {
    //     this.setState({signInPassword: ''})
    //     console.log(this.state.signInPassword)

    // }

    onSubmitSignin = () => {
        fetch('https://safe-chamber-84153.herokuapp.com/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
        .then(response => {
            console.log(response)
            return response.json()})
        .then(user => {
            if (user.id) {
                this.props.loadUser(user)
                this.props.onRouteChange('Home')
            } else {
                alert('Login information was incorrect')
            }
        })
    }

    render() {
        const {onRouteChange} = this.props
        return (
            <div>
                <main className="pa4 black-80">
                    <div className="box-wrapper measure center">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input onChange={this.onEmailChange} className="pa2 input-reset ba bg-transparent w-100" type="email" name="email-address"  id="email-address"/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input onChange={this.onPasswordChange} className="b pa2 input-reset ba bg-transparent w-100" type="password" name="password"  id="password" />
                        </div>
                        </fieldset>
                        <div className="">
                        <input onClick={this.onSubmitSignin}className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"/>
                        </div>
                        <div className="lh-copy mt3">
                        <a onClick={() => onRouteChange('register')}href="#0" className="f6 link dim black db">Register</a>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
    
}

export default SignIn