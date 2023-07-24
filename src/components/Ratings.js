import starInactiveSVG from "../assets/starInactive.svg";
import starActiveSVG from "../assets/starActive.svg";

function Ratings(props) {
  //Génération d'un tableau d'éléments selon la note
  const ratingArray = [];
  const setRating = () => {
    for (let i = 0; i < props.rating; i++) {
      ratingArray.push(starActiveSVG);
    }
    for (let i = 0; i < 5 - props.rating; i++) {
      ratingArray.push(starInactiveSVG);
    }
  };
  setRating();
  return (
    <ul className="ratings flexHorizontal">
      {ratingArray.map((star, index) => (
        <li key={"ratingStar" + index}>
          <img src={star} alt="starIcon" />
        </li>
      ))}
    </ul>
  );
}
export default Ratings;
