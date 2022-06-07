import React from 'react'
import Blank from '../blank/Blank'
import Login from '../login/Login'
import "./home.css"
export default function Home() {
  return (
   <section className='section_container'>
       <Login/>
       <Blank/>
   </section>
  )
}
