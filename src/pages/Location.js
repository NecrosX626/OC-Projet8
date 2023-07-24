import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import FetchData from "../components/FetchData";
import Caroussel from "../components/Caroussel";
import Collapse from "../components/Collapse";
import Tags from "../components/Tags";
import Host from "../components/Host";
import Ratings from "../components/Ratings";

function Location() {
  //States du composant
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { locationIndex } = useParams();
//Récupération des données
  function loadData() {
    setLoading(true);
    FetchData()
      .then((result) => setData(result))
      .then(() => setLoading(false));
  }
  useEffect(() => {
    loadData();
  }, []);

  if (loading) {
    //Attente des données
    return;
  } else {
    //Gestion des ID de location inexistants
    let locationsNb = data.length;
    if (locationIndex >= locationsNb) {
      return(
        <Navigate replace to={"/Missing"} />
      )
    }
    else{
      let activeLocation = data[locationIndex];
      return (
        <main className="locationPage">
          <Caroussel index={locationIndex} />
          <div className="locationWrapper flexVertical">
            <div className="location flexHorizontal">
              <div className="location__title flexVertical">
                <h1>{activeLocation.title}</h1>
                <p>{activeLocation.location}</p>
                <Tags location={activeLocation.tags} />
              </div>
              <div className="location__hostRating flexVertical">
                <Host location={activeLocation} />
                <Ratings location={activeLocation} />
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
