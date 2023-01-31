import React from "react";
import Digits from "./Digits"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	let[counter, setCounter]=React.useState(0)
	React.useEffect(()=>{ 
		setInterval(()=>{
			setCounter(counter++)
		},1000)

	},[])
	return (
		<div className="digitsHolder"> 
			<Digits time={Math.floor(counter /10000)}/>
			<Digits time={Math.floor(counter /1000)}/>
			<Digits time={Math.floor(counter /100)}/>
			<Digits time={Math.floor(counter /10)}/>
			<Digits time={Math.floor(counter /1)}/>
			
		</div>
	);
};

export default Home;
