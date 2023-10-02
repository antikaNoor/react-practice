import React from 'react'
import './Home.scss'
import Header from '../../components/header/header'
// import { Form } from 'react-router-dom'
import Form from '../../components/form/form'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <div className="bg-img">
        <div className="container">
          <div className='topnav-container'>
            <Header />
          </div>
          <div className="welcome">
            <h1 className="heading">Once Upon A Time</h1>
            <p className="heading-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            <button className="btn">
              <Link to='/fetch'>Explore</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
