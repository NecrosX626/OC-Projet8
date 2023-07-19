import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FetchData from "./FetchData";

function Gallery() {
  
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true);

  function loadData() {
    setLoading(true)
    FetchData()
      .then((result) => {
        setData(result)
      })
      .then(setLoading(false))
  }
  useEffect(() => {
    loadData()
  }, []);

  if (loading){
    return
  }
  else{
    return (
      <div className="gallery flexHorizontal">
        {data.map((location, index) => (
          <article key={"thumbnail" + location.id}>
            <Link to={`/Location/${index}`} className="links flexVertical">
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