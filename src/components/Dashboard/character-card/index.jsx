import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export const CharacterCard = ({data}) => {
	return (
		<Card sx={{maxWidth: 345}}>
			<CardMedia component="img" height="280" image={data.image} alt={data.name} />
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{data.name}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					Especie:{data.species}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					Estado:{data.status}
				</Typography>
			</CardContent>
		</Card>
	);
};
