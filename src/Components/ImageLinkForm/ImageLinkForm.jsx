import React from 'react'
import './ImageLinkForm.css'

const ImageLinkForm = () => {
  return (
    <div>
      <h1 className='head-text'>{'face detection App use by some government'}</h1>
      <div className='form'>
        <input className="fc-input" type='text' />
        <button className='button fc-btn'>
          <div id='spin'></div>
          Find Face
        </button>
      </div>
    </div>
  );
  
}
export default ImageLinkForm;