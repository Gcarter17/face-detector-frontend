import React, { Component } from 'react'
import Navigation from './Components/Navigation/Navigation'
import Logo from './Components/Logo/Logo'
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm'
import Rank from './Components/Rank/Rank'
import FaceRecog from './Components/FaceRecog/FaceRecog'
import SignIn from './Components/SiginIn/SignIn'
import Register from './Components/Register/Register'
import './App.css';

import Clarifai from 'clarifai'

// https://samples.clarifai.com/face-det.jpg
const app = new Clarifai.App({
  apiKey: 'ada3f2cb8b004417988b6634aa04cc6c'
})

class App extends Component {
  state = {
    input: '',
    imageUrl: '',
    box: {},
    route: 'signIn',
    isSignedIn: false,
    user: {
      id: '',
      name: '',
      email: '',
      entries: 0,
      joined: ''
    }
  }

  // componentDidMount() {
  //   fetch('http://localhost:3000')
  //   .then(response => response.json())
  //   .then(console.log)
  // }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (boxStuff) => {
    this.setState({box: boxStuff})
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onSubmit = () => {
    this.setState({imageUrl: this.state.input})
    app.models
    .predict(
      Clarifai.FACE_DETECT_MODEL, this.state.input
    )
    .then(response => {
      if (response) {
      fetch('http://localhost:3000/image', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify({
          id: this.state.user.id
        })
      })
      .then(response => response.json())
      .then(count =>{
        this.setState(Object.assign(this.state.user, {entries: count}))
      })  
      }
      this.displayFaceBox(this.calculateFaceLocation(response)) 
    })
    .catch(err => console.log(err))
    document.getElementById('bounding-box').setAttribute("class", "bounding-box")
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
    } else if (route === 'signIn') {
      this.setState({isSignedIn: false})
    } else if (route === 'Home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
  }

  render() {    
     if (this.state.route === "signIn") {
      return (
        <div className="App">
          <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
          <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/> 
        </div>
      )
    } else if (this.state.route === "Home") {
      return (
        <div className="App">
          <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
          <Logo/>
          <Rank name={this.state.user.name} entries={this.state.user.entries}/>
          <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
          <FaceRecog box={this.state.box} imageUrl={this.state.imageUrl}/>
        </div>
      )
    } else if (this.state.route === "register") {
      return (
        <div className="App">
          <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
          <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
        </div>
      )
    }
  }
}

export default App;