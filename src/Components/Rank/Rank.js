import React from 'react'

const Rank = ({name, entries}) => {
    return (
        <div>
            <div className='black f3'>
                {`The number of images ${name} has counted`}
            </div>
            <div className='black f1'>
                {entries}
            </div>
        </div>
    )
}

export default Rank