import { CssBaseline } from '@material-ui/core';
import './App.css';
import Footer from './components/footer/Footer';
import Secone from './components/secone/Secone'
import ContinousSlider from './components/SliderImages/ContinousSlider';
import Secthree from './components/secthree/Secthree';
import Rodmaap from './components/RoadMap/Rodmaap';
import Header from "./components/Header/Header";
import New from './components/new/new';
import NewComp from './components/new-comp/new-comp';
import NewCompThree from './components/new-comp-three/new-comp-three';
import NewCompFour from './components/new-comp-four/new-comp-four';
import ScrollUpButton from "react-scroll-up-button";
import ReactScrollDown from 'react-scroll-down';
import InfiniteScroll from 'react-infinite-scroll-up-n-down';
import { useEffect } from 'react';

function App() {
  return (
    <div className="App">
     <CssBaseline />
     <Header/>
     
     {/* <ReactScrollDown /> */}
     <ScrollUpButton />
     <Secone/>
     <Secthree/>
     <div className='ok'>
     <NewComp/>
     </div>

     <div  className='new'>
       <New/>
     </div>

     <div  className='ok'>
       <NewCompThree />
     </div>

     <div className='newbg'>
       <NewCompFour/>
     </div>

     <ContinousSlider/>
    
    <div className='MainApp'>
      <Rodmaap/>
    </div>
      <Footer/>
    </div>
    
  );
}

export default App;

// create button that scroll down and scroll top on window in react js???