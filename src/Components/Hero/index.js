import React, {useState} from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { HeroContainer,
       HeroItems,
       HeroBtn,
       HeroContent,
       HeroH1,
       HeroP 
} from './HeroElements';


const Hero = () =>{
 
    const [isOpen, setisOpen] = useState(false);

    const toggle = () =>{
        setisOpen(!isOpen);
    }

    return(
        <HeroContainer>
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <HeroContent>
                <HeroItems>
                    <HeroH1>Greatest Burger Ever</HeroH1>
                    <HeroP>Ready in 60 seconds</HeroP>
                    <HeroBtn>Place Order</HeroBtn>
                </HeroItems>
                
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero;