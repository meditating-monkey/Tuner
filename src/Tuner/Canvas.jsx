import React, { useRef, useCallback, useEffect } from "react";

const Canvas = ({ dimensions }) => {
	const canvasRef = useRef(null);
	const context = useRef();

	const drawFn = useCallback(() => {
		context.current.fillRect(0, 0, 450, 600);
		requestAnimationFrame(drawFn);
	}, []);

	useEffect(() => {
		canvasRef.current.width = dimensions.width;
		canvasRef.current.height = dimensions.height;
		context.current = canvasRef.current.getContext("2d");
		const animationId = requestAnimationFrame(drawFn);

		return () => {
			cancelAnimationFrame(animationId);
		};
	}, []);

	return <canvas ref={canvasRef} className="tuner__canvas"></canvas>;
};

export default Canvas;
