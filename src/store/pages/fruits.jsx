import "./style.css"

import { useSelector } from "react-redux";

const FruitsPage = () => {
	//acessando o estado global e pegando o state fruits
  const fruits = useSelector((state) => state.fruits);

  return (
    <div className="fruitsDiv">
      {fruits.map((fruit) => (
        <p key={fruit}> {fruit} </p>
      ))}
    </div>
  );
}

export default FruitsPage;