import React from 'react'
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';
import Navbar from '../../components/navbar/Navbar';
import "./home.scss"

const Home = () => {
  return (
    <div id='Home.jsx' className='home'>  
        <Navbar/>
        <Featured type="Series"/> 
        <List/>
        <List/>
        <List/>
        <List/>
    </div>
  )
}

export default Home;