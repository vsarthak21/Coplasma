import React, {Component} from 'react';
import Navibar from "../Navibar/Navibar.js"
// import Carousel from '../Carousel/Carousel.js';
// import About from '../About/About.js';
// import Services from '../Services/Services.js';
// import Testimonials from '../Testimonials/Testimonials.js';
// import News from '../News/News.js';
// import Footerx from '../Footerx/Footerx.js';

class Coplasma extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <Navibar/>
                {/* <Carousel/>
                <About/>
                <Services/>
                <Testimonials/>
                <News/>
                <Footerx/> */}
            </div>
        )
    }
}

export default Coplasma;