import React from 'react'

const ImageLinkForm = ({onInputChange, onSubmit}) => {
    return (
        <div>
            <p className='black f3'>
                Try pasting in an <a target="_blank" rel="noopener noreferrer" href="https://unsplash.com/s/photos/face">image address</a> with "copy image address"
            </p>
            <div className='pa4 br3 shadow-5 center' style={{display: 'flex', width: '700px', textAlign:'center', background: '#149df2'}}>
                <input placeholder='Image url...' className='f4 pa2 w-70 center'type="text" onChange={onInputChange}/>
                <button onClick={onSubmit} className='w-30 grow f4 link br3 ph3 white bg-light-purple'>Detect</button>
            </div>
        </div>
    )
}

export default ImageLinkForm