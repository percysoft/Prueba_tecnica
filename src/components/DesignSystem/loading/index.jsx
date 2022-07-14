import React, {useEffect, useState} from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export const CircularProgressWithLabel = (props) => {
	const [progress, setProgress] = useState(10);

	useEffect(() => {
		const timer = setInterval(() => {
			setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
		}, 50);
		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<Box sx={{position: "relative", display: "inline-flex", width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
			<CircularProgress variant="determinate" value={progress} />
			<Box
				sx={{
					top: 0,
					left: 0,
					bottom: 0,
					right: 0,
					position: "absolute",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					color: "white",
				}}
			>
				<Typography variant="caption" component="h1" color="text.primary">
					{`${Math.round(progress)}%`}
				</Typography>
			</Box>
		</Box>
	);
};
