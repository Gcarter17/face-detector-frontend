import React, { Component } from 'react'


class Register extends Component {
    state = {
        email: '',
        password: '',
        name: ''
    }

    onNameChange = (event) => {
        this.setState({name: event.target.value})
    }
    
    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
    }

    onSubmitSignin = () => {
        fetch('https://safe-chamber-84153.herokuapp.com/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name
            })
        })
        .then(response => {
            console.log(response)
            return response.json()})
        .then(user => {
            console.log(user)
            if (user.id) {
                                                        //this class "Register" being a component with state, to call a function from another stateful component (that is also obviously extending {Component}) you must call this.props."name of function"(whats being passed into the function) and that will work only if that function has been passed as a prop
                this.props.loadUser(user)  
                this.props.onRouteChange('Home')
                // this.props.onRouteChange('signIn')

            }
        })
    }

    render () {
        const {onRouteChange} = this.props
        
        return (
            <div>
                <main className="pa4 black-80">
                    <div className="box-wrapper measure center">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0">Register</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                            <input style={{width: '420px'}} onChange={this.onNameChange}className="pa2 input-reset ba bg-transparent" type="Name" name="Name"  id="name"/>
                        </div>
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
                        <input onClick={this.onSubmitSignin}className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register"/>
                        </div>
                        <div className="lh-copy mt3">
                        </div>
                    </div>
                </main>
            </div>
        )
    }
    
}

export default Register