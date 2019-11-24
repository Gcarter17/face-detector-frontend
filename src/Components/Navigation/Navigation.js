import React from 'react'

const Navigation = ({onRouteChange, isSignedIn}) => {
    const style = {
        display: 'flex',
        justifyContent: 'flex-end'
    }
    if (isSignedIn){
        return(
        <nav style={style}>
            <p onClick={() => onRouteChange('signIn')} className='f3 link dim black underline pa3 pointer'>Sign Out</p>
        </nav>
        )
    }   else if (!isSignedIn) {
        return (
        <nav style={style}>
            <p onClick={() => onRouteChange('signIn')} className='f3 link dim black underline pa3 pointer'>Sign In</p>
            <p onClick={() => onRouteChange('register')} className='f3 link dim black underline pa3 pointer'>Register</p>
        </nav>
        )
    }
        
    
}

export default Navigation