function Tags(props) {
  return (
    <ul className="flexHorizontal">
      {props.tags.map((tag, index) => (
        <li key={"tag" + index} className="tag">
           {tag}
        </li>
      ))}
    </ul>
  );
}

export default Tags;