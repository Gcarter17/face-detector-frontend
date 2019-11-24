import React from 'react'

const ImageLinkForm = ({onInputChange, onSubmit}) => {
    return (
        <div>
            <p className='f3'>
                This will detect faces in your pictures, give it a try
            </p>
            <div className='pa4 br3 shadow-5 center' style={{display: 'flex', width: '700px', textAlign:'center', background: 'green'}}>
                <input className='f4 pa2 w-70 center'type="text" onChange={onInputChange}/>
                <button onClick={onSubmit} className='w-30 grow f4 link br3 ph3 white bg-light-purple'>Detect</button>
            </div>
        </div>
    )
}

export default ImageLinkForm