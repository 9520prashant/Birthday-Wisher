import { useLocation } from "react-router-dom";

interface PersonInfo {
    paragraph:string;
}

export  const BirthdayCard :React.FC<PersonInfo> =  (props) => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const name = params.get("name");

    return (
        <div className="birthdayCard">
        <div className="cardFront">
          <h3 className="happy">HAPPY BIRTHDAY {name}!</h3>
          <div className="balloons">
            <div className="balloonOne" />
            <div className="balloonTwo" />
            <div className="balloonThree" />
            <div className="balloonFour" />
          </div>
        </div>
        <div className="cardInside">
          <h3 className="back">HAPPY BIRTHDAY {name}!</h3>
          <p>Dear Friend,</p>
          <p>
            {props.paragraph}
          </p>
        </div>
      </div>
    )
};
  