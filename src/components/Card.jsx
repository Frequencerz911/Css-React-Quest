import banner from "../assets/temps.jpg";
import Clock1 from "../components/Clock1"
import "./Card.scss";


function Card() {

  return (

    <div className="Card">
      <h1 className="titleCard">
        LE TEMPS
      </h1>
      <img src={banner} />
      <div className="bodyCard">
        <p className="description">
          Fluide et inéluctable, sculpte nos vies de son empreinte indélébile. Il nous pousse à savourer l`instant, nous rappelant la fugacité de chaque moment. À la fois maître et complice, il façonne nos souvenirs et modèle nos destins. Le temps, précieux et énigmatique, nous enseigne la patience, nous offre des opportunités de croissance, et nous pousse à embrasser le futur avec audace. C`est lui qui nous rappelle que dans chaque tic-tac réside une chance de réinvention et de plénitude.
        </p>
      </div>
      <Clock1 />
    </div>
  );
}

export default Card;