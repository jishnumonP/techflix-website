import React,{useRef,useEffect} from 'react'
import Body from './components/Body/Body'
import { Content } from '../../components/Button/CustomButton'
import Services from './components/services/Services'
import Youtube from './components/Youtube/Youtube'


const Home = () => {

  return (
    <div className='homePage'>
      <Services/>
    <Body />
    </div>
  )
}

export default Home