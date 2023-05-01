import React from 'react'

function About({aboutphoto}) {
  return (
    <div className='aboutpage'>

    <div>
    <h1>About us</h1>

    <p>This page is Created to pratice the React leasons</p>
    <p>This React-Movie-App is created by using this concepts : </p>

    <ol>
      <li>React Components</li>
      <li>Conditional rendering</li>
      <li>React Hooks : useState,useEffect</li>
      <li>State Managment</li>
      <li>Events</li>
      <li>Component lifecycle</li>
      <li>React router</li>
      <li> API Consumption</li>
    </ol>
    
    <p>This Project is divided in these Pages :</p>

    <ul>
      <li>Home page : It gives the description of the page and the new films listed</li>
      <li>Movie page : In this page the users can search the favourite films using input field</li>
      <li>About Us : In this page users get informed about the Movie-App </li>
    </ul>
      
    <p>For any suggestion feel free to write to the email :</p>
    <a className='emaillink' href="also13lila@hotmail.com">also13lila@hotmail.com</a>

    <h3>Enjoy the App!</h3>
  </div>

  <div className='imageabout'>
    <img src={aboutphoto } alt ="react-movie"/>
  </div>
    </div>
  )
}

export default About