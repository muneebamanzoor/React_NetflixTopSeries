import Images from "./Images";
import Heading from "./Heading";

function Card(props){
    return(
      <div className="cards">
        <div className="card">
          { /* <img src={props.imgsrc} alt="tilepic" className="card_image"></img> */}
          <Images imgsrc={props.imgsrc} /> 
          <div className="card_info">
            <span className="card_category">{props.title}</span>
            {/* <h3 className="card_title">{props.sname}</h3> */}
            <Heading sname={props.sname}/>
            <a href={props.link} target="_blank">
              <button>Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    )
  };

  export default Card;