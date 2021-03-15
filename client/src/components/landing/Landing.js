import React, {useEffect} from 'react'
import Navigation from './navigation/Navigation'
import Header from './header/Header'
import Gallery from './gallery/Gallery'
import About from './about/About'
import News from './news/News'
import Footer from './footer/Footer'
import './Landing.css'


const Landing = () => {

    useEffect(() => {
        document.title ='Datalink SRC';
      })
      
    return (
        <div>
        <div className='mb-5'>
        <Navigation/>
        </div>
        <Header/>
            <Gallery/>
            <About/>
            <News/>
            <Footer/>
        </div>
    )
}

export default Landing
