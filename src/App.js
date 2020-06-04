import React from 'react';
import Navigation from './components/navigation/navigation';
import Logo from './components/logo/logo';
import Rank from './components/rank/rank';
import FaceRecognition from './components/facerecognition/facerecognition';
import ImageLinkForm from './components/imagelinkform/imagelinkform';
import './App.css';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: '7873af76690246098c42a8bbb08b4493'
});

const particleOptions={
    particles: {
     number: {
       value: 30,
        density: {
          enable: true, 
          value_area: 200
        }
     }
    }
  }

class App extends React.Component {
  
      state = {
        input: '',
        imgUrl:''
      }


  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onSubmit=()=>{
    this.setState({imgUrl: this.state.input})
    // console.log(['log', this.state.input, this.state.imgUrl])
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
       this.state.input).then(
        function(response) {
          // do something with response
          console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
        },
        function(err) {
          // there was an error
        }
    );
  }

  render(){
    return (
      <div className="App">
              <Particles className='particles'
                params={particleOptions}  
              />
        <link rel="stylesheet" href="https://unpkg.com/tachyons@4/css/tachyons.min.css"/>
        <Navigation/>
        <Logo/>
        <Rank/>
        <ImageLinkForm onInputChange={this.onInputChange} onButtonClick={this.onSubmit}/>
        <FaceRecognition imageUrl={this.state.imgUrl}/>
      </div>
    );
  }
}

export default App;
