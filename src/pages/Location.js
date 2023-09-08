import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import Caroussel from "../components/Caroussel";
import Collapse from "../components/Collapse";
import Tags from "../components/Tags";
import Host from "../components/Host";
import Ratings from "../components/Ratings";

function Location() {
  //States du composant
  const [activeLocation, setActiveLocation] = useState([]);
  const [loading, setLoading] = useState(true);
  const { locationID } = useParams();
  //Récupération des données
  useEffect(() => {
    fetch("/locationsData.json")
      .then((response) => response.json())
      .then((locationsList) => {
        const location = locationsList.find((l) => l.id === locationID);
        setActiveLocation(location || null);
        setLoading(false);
      });
  }, [locationID, setActiveLocation, setLoading]);

  if (loading) {
    //Attente des données
    return;
  } else {
    //Gestion des ID de location inexistants
    if (activeLocation === null) {
      return <Navigate replace to={"/Missing"} />;
    } else {
      return (
        <main className="locationPage">
          <Caroussel pictures={activeLocation.pictures} />
          <div className="locationWrapper flexVertical">
            <div className="location flexHorizontal">
              <div className="location__title flexVertical">
                <h1>{activeLocation.title}</h1>
                <p>{activeLocation.location}</p>
                <Tags tags={activeLocation.tags} />
              </div>
              <div className="location__hostRating flexVertical">
                <Host host={activeLocation.host} />
                <Ratings rating={activeLocation.rating} />
              </div>
            </div>
            <div className="details flexHorizontal">
              <Collapse
                label="Description"
                content={activeLocation.description}
              />
              <Collapse
                label="Equipements"
                content={
                  <ul>
                    {activeLocation.equipments.map((element, index) => (
                      <li key={"equipments" + index}>{element}</li>
                    ))}
                  </ul>
                }
              />
            </div>
          </div>
        </main>
      );
    }
  }
}
export default Location;
