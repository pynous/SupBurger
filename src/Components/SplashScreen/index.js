import React, { useState, useEffect } from 'react'
import {
    MySplashScreen,
    SplashText
} from './SplashScreenElements';

const SplashScreen = () => {
 const [show, setShow] = useState(true);

    useEffect(()=>{
        const interval = setTimeout(()=> setShow(false), 2500);
       return () =>{
           clearInterval(interval);
       }
    }, []);
    
    return (


         show ? <MySplashScreen>
           <SplashText>Created By Younus Baloch :)</SplashText>
         </MySplashScreen>:null
    )
}

export default SplashScreen;
