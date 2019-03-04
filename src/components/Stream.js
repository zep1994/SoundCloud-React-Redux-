import React from 'react'

function Stream({ track=[] }) {
    return (
        <div>
            {
                tracks.map((track, map) => {
                    return <div className="track" key={key}>{track.title}</div>
                })
            }
        </div>
            
    )
}

export default Stream 
