import React from 'react'
import './FaceRecog.css'
// https://samples.clarifai.com/face-det.jpg

const FaceRecog = ({imageUrl, box}) => {
    return (
        <div style={{width: 'auto'}} className='center mt5'>
            <div className='relative center'>
                <img id="inputImage" src={imageUrl} width='700px' height='auto' alt='' />
                {/* <img id="inputImage" src='https://samples.clarifai.com/face-det.jpg' width='700px' height='auto' alt='' /> */}

                <div id="bounding-box" style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            </div>
        </div>
    )
}

export default FaceRecog