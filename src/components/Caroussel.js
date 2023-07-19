import { useState, useEffect } from "react"
import FetchData from "./FetchData"
import arrowRight from "../assets/arrowRight.svg"
import arrowLeft from "../assets/arrowLeft.svg"

function Caroussel(props){
    //Récupération des Données
    const [data, setData] = useState([])
    function loadData() {
        FetchData()
          .then((result) => {
            setData(result[props.index].pictures)
          })
      }
      useEffect(() => {
        loadData()
      }, []);
    //Définition des fonctions pour changer de slide
    const [visibleSlide, switchSlide] = useState(0)
    const previousSlide = () =>{
        if (visibleSlide > 0){
            switchSlide(visibleSlide - 1)
        }
        else{
            switchSlide(data.length - 1)
        }
    }
    const nextSlide = () =>{
        if (visibleSlide >=  data.length - 1){
            switchSlide(0)
        }
        else{
            switchSlide(visibleSlide + 1)
        }
    }
    //Composant
    return(
        <div className="caroussel flexVertical">
                <img className="caroussel__slide" src={data[visibleSlide]} alt="carouselImg"/>
                <img className="caroussel__arrow--left" src={arrowLeft} onClick={previousSlide} alt="Caroussel arrow left"/>
                <img className="caroussel__arrow--right" src={arrowRight} onClick={nextSlide} alt="Caroussel arrow right"/>
                <span>{visibleSlide + 1 + "/" +  data.length}</span>
        </div>
    )
}
export default Caroussel