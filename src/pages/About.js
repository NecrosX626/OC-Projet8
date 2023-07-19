import Banner from "../components/Banner"
import bannerSrc from "../assets/mountainBanner.png"
import Collapse from "../components/Collapse"
const bannerTitle = ""
const aboutCollapse = [
    {
        label : "Fiabilité",
        text : "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
    },
    {
        label : "Respect",
        text : "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme",
    },
    {
        label : "Service",
        text : "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme",
    },
    {
        label : "Sécurité",
        text : "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    }
]

function About(){
    return(
        <section className="aboutPage">
            <Banner img={bannerSrc} title={bannerTitle} />
            {aboutCollapse.map((element, index) =>(
                <Collapse key={"aboutCollapse" + index} label={element.label} content={element.text}/>
            ))}
        </section>
    )
}
export default About