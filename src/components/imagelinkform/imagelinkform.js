import React from 'react';
import './imagelinkform.css';

const ImageLinkForm = ({onInputChange, onButtonClick}) => {
    return (
       <div className='ma4 mt0'>
          <p className='f3'>
            {'This app will detect a face from picture'}
          </p>
            <div className='center'>
              <div className='center form pa4 br3 shadow-5'>
                <input type='text' className='f4 pa2 w-70 center' onChange={onInputChange}/>
                <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple br3' onClick={onButtonClick}>Detect</button>
              </div>  
            </div>
       </div>
    );
}

export default ImageLinkForm;