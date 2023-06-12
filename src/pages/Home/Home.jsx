import React from 'react'
import Navbar from '../../components/Navbar.component'
import "./Home.css"
// import flight from '../../../public/assets/flight.jpeg'

const Home = () => {
    return (
        <>
            <div className='wrap'>
                <Navbar></Navbar>
                <div className='home'>
                    {/* <img src={flight} /> */}

                </div>
            </div>
        </>
    )
}

export default Home