function Host(props) {
    return (
      <div className="host flexHorizontal">
        <div className="host__name">
          <span>{props.host.name}</span>
        </div>
        <img
          className="host__pic"
          src={props.host.picture}
          alt="hostPic"
        />
      </div>
    );
  }
  export default Host;
  