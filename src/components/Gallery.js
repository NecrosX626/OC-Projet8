import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Gallery() {
  //States du Composant
  const [locationsList, setLocationsList] = useState([])
  const [loading, setLoading] = useState(true);
  //Récupération des Données
  useEffect(() => {
    fetch("http://localhost:3000/locationsData.json")
      .then((response) => response.json())
      .then((data) => (setLocationsList(data)))
      .then(setLoading(false))
  }, [setLocationsList, setLoading]);

  if (loading){
    return
  }
  else{
    return (
      <div className="gallery flexHorizontal">
        {locationsList.map((location) => (
          <article key={"thumbnail" + location.id}>
            <Link to={`/Location/${location.id}`} className="links flexVertical">
              <img src={location.cover} alt="thumbnail" />
              <div className="gradient">
                <h3>{location.title}</h3>
              </div>
            </Link>
          </article>
        ))}
      </div>
    );
  }
}
export default Gallery;