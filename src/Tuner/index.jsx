import React, { useState } from "react";
import Canvas from "./Canvas";
import "./Tuner.css";

const Tuner = () => {
	const [dimensions, setDimensions] = useState({
		width: window.innerWidth / 2.2,
		height: window.innerHeight / 1.5,
	});

	return (
		<div
			className="tuner__wrapper"
			style={{
				"--width": `${dimensions.width}px`,
				"--height": `${dimensions.height}px`,
			}}
		>
			<button className="tuner__button">{"<"}</button>
			<Canvas dimensions={dimensions} />
			<button className="tuner__button">{">"}</button>
		</div>
	);
};

export default Tuner;
