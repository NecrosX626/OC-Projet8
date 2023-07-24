import { useEffect, useState } from "react";

function Tags(props) {
  //Récuperation des données
  const [data, setData] = useState([])
  useEffect(() => {
    setData(props.location)
  }, []);

  return (
    <ul className="flexHorizontal">
      {data.map((tag, index) => (
        <li key={"tag" + index} className="tag">
           {tag}
        </li>
      ))}
    </ul>
  );
}

export default Tags;