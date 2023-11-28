import React, { useState } from 'react'
import getData from './utils/getData'
import {Nav, NavItem, NavLink} from 'reactstrap';
import CircularProgress from '@mui/material/CircularProgress';

// css
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// components 
import People from './components/people/People'
import Degrees from './components/degrees/Degrees'
import Minors from './components/minors/Minors'
import Employment from './components/employment/Employment';

function App() {
  // vars
  const [loaded, setLoaded] = useState(false);
  const [aboutObj, setAboutObj] = useState();

  // functions 
  React.useEffect(()=>{
    getData('about/')
      .then((returnJson)=>{
        console.log('here', returnJson);
        setAboutObj(returnJson);
        setLoaded(true);
      })
  }, []);

  // render 
  if(!loaded){
    return(
      <div className='loadingDiv'>
        <CircularProgress />
      </div>
    );
  }

  // return
  return (
    <>
      <section className="AppBar">
        <Nav className='nav'>
          <NavItem className='navtitle'>
            <NavLink id='navtitle' disabled href="#">RIT | iSchool</NavLink>
          </NavItem>
          <NavItem className='navitem'>
            <NavLink className='navlink' active href="#about">About</NavLink>
          </NavItem>
          <NavItem className='navitem'>
            <NavLink className='navlink' href="#degrees">Degrees</NavLink>
          </NavItem>
          <NavItem className='navitem'>
            <NavLink className='navlink' href="#minors">Minors</NavLink>
          </NavItem>
          <NavItem className='navitem'>
            <NavLink className='navlink' href="#employment">Employment</NavLink>
          </NavItem>
          <NavItem className='navitem'>
            <NavLink className='navlink' href="#people">People</NavLink>
          </NavItem>
        </Nav>
      </section>

      <section className="App">
        <section className="About" id='about'>
          <h1>{aboutObj.title}</h1>
          <p id='pageDesc'>{aboutObj.description}</p>
          <div className='aboutQuote'>
            <p className='quote'>{aboutObj.quote}</p>
            <p>-- {aboutObj.quoteAuthor}</p>
          </div>
        </section>

        {/*other components*/}

        <section className='Degrees' id='degrees'>
          <Degrees/>
        </section>

        <section className='Minors' id='minors'>
          <Minors/>
        </section>

        <section className='Employment' id='employment'>
          <Employment/>
        </section>

        <section className='People' id='people'>
          <People/>
        </section>

      </section>
    </>
  )
}

export default App
