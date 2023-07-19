function Banner(props) {
    return(
        <div className="banner flexVertical">
            <img src={props.img} alt="bannerImg"/>
            {props.title !== "" ? <h2>{props.title}</h2> : null}
        </div>
    )
}
export default Banner