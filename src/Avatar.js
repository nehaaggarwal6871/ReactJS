import React from 'react';
import './Avatar.css';
import 'tachyons';
import AvatarList from './AavatarList';

const Avatar=(props)=>{

const AvatarListArray=[
    {
        id:1,
        name:"Neha Aggarwal" ,
        work:"Web Developer"
    },
    {
        id:2, 
        name:"Jagmohan Singh ", 
        work:"Full Stack Developer"
    },
    {
        id:3,
    name:"Nitesh Nagpal" ,
    work:"Front End Developer"
    },
    {
        id:4 ,
        name:"Mishti Aggarwal" ,
        work:"Back End Developer"
    }
]
    const ArrayAvatarCard= AvatarListArray.map( (AvatarCard,i) => {
        return <AvatarList id={AvatarListArray[i].id} name={AvatarListArray[i].name} work={AvatarListArray[i].work}/>
    } )
    return (
        <div>
            <h1>Welcome to Our Team</h1>
            {ArrayAvatarCard}
            <button> Learn More</button>
        </div>
    )

}
export default Avatar