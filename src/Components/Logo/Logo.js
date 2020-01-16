import React from 'react'
import Tilt from 'react-tilt'

const Logo = () => {
    return (
        <div className ='ma4 mt0'>
            <Tilt className="Tilt br2 ml3 shadow-4" options={{ max : 25 }} style={{ height: 150, width: 150, background: 'white' }} >
                <div className="Tilt-inner"> Hello </div>
            </Tilt>
        </div>
    )
}

// export default Logo