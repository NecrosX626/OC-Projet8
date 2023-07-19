import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import FetchData from "../components/FetchData";
import Caroussel from "../components/Caroussel";
import Collapse from "../components/Collapse";
import Tags from "../components/Tags";
import Host from "../components/Host";
import Ratings from "../components/Ratings";


function Location() {
  //Je récupère les données
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true);
  const { locationIndex } = useParams();

  function loadData() {
    setLoading(true)
    FetchData()
    .then((result) => setData(result))
    .then(() => setLoading(false))
  }
  useEffect(() => {
    loadData()
  }, []);

  if (loading){
    return
  }
  else{
    let activeLocation = data[locationIndex]
    return (
      <section className="locationSection">
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
          <div className="details flexVertical">
            <Collapse label="Description" content={activeLocation.description} />
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
      </section>
    );
  }
}
export default Location;
