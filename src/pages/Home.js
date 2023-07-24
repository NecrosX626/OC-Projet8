import Banner from "../components/Banner"
import Gallery from "../components/Gallery.js"
import bannerSrc from "../assets/seaBanner.png"
const bannerTitle = "Chez vous, partout et ailleurs"

function Home(){
    return(
        <main className="homePage">
            <Banner img={bannerSrc} title={bannerTitle} />
            <Gallery />
        </main>
    )
}
export default Home