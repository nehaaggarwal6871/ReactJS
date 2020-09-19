import React from 'react';
const AvatarList=(props)=>{
    return(
        /* in tachyons, ma4-margin=4px , bg-hot-pink=background is hotpink, dib =display inline block */
        <div className="Avatar ma4 bg-pink dib pa4 tc grow shadow-4">
            {/* destructuring */}
            <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Avatar"></img>
            <h1> {props.name}</h1>
            <p> {props.work}</p>
        </div>
    )
}
export default AvatarList;