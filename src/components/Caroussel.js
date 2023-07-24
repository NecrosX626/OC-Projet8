import { useState } from "react"
import arrowRight from "../assets/arrowRight.svg"
import arrowLeft from "../assets/arrowLeft.svg"

function Caroussel(props){
    //Fonctions de changement de slide
    const [visibleSlide, switchSlide] = useState(0)
    const previousSlide = () =>{
        if (visibleSlide > 0){
            switchSlide(visibleSlide - 1)
        }
        else{
            switchSlide(props.pictures.length - 1)
        }
    }
    const nextSlide = () =>{
        if (visibleSlide >=  props.pictures.length - 1){
            switchSlide(0)
        }
        else{
            switchSlide(visibleSlide + 1)
        }
    }
    return(
        <div className="caroussel flexVertical">
                <img className="caroussel__slide" src={props.pictures[visibleSlide]} alt="carouselImg"/>
                <img className="caroussel__arrow--left" src={arrowLeft} onClick={previousSlide} alt="Caroussel arrow left"/>
                <img className="caroussel__arrow--right" src={arrowRight} onClick={nextSlide} alt="Caroussel arrow right"/>
                <span>{visibleSlide + 1 + "/" +  props.pictures.length}</span>
        </div>
    )
}
export default Caroussel