import React from 'react'
import "./blank.css"
export default function Blank() {
    return (
        <div className='blank_container'>
           <div className='inner_container'>
           <h1 className='text-3' style={{color:"white"}}>Dummy Heading</h1>
            <p className='text-1'style={{color:"white"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
           </div>
        </div>
    )
}
