import React from 'react'
import uiuxImg from "/home/ostoldev/Web Dev Study/flotilla-page/Flotilla/src/Logos/uiuxLogo.png";
import webImg from "/home/ostoldev/Web Dev Study/flotilla-page/Flotilla/src/Logos/webLogo.png";
import mobImg from "/home/ostoldev/Web Dev Study/flotilla-page/Flotilla/src/Logos/mobileLogo.png";
import "./MainContent.css"

const MainContent = () => {


    return (
        <div>
            <h1 className='title'>Our Services</h1>
            <p className='mainPar'>Lorem ipsum dolor sit amet, 
               consectetur adipiscing elit, 
               sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <ul className='projects-images'>
                <li>
                    <img src={mobImg}/>
                    <h4>Mobile App Developments</h4>
                </li>
                <li>
                    <img src={webImg}/>
                    <h4>Web Development Solutions</h4>
                </li>
                <li>
                     <img src={uiuxImg}/>
                     <h4>UI/UX Designs</h4>
                </li>
            </ul>

            <h2 className='subtitle'>Develop Your Project</h2>
            <button className='contactusBtn'>Contact Us</button>

        </div>
    )

}



export default MainContent