import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {CharacterCard} from "../character-card";

export const CharacterList = ({dataCharacter}) => {
	return (
		<Box sx={{flexGrow: 1}}>
			<Grid container spacing={4}>
				{dataCharacter &&
					dataCharacter.map((item, index) => {
						return (
							<Grid key={index} item sm={4} xs={12}>
								<CharacterCard data={item} />
							</Grid>
						);
					})}
			</Grid>
		</Box>
	);
};
