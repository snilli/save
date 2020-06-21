import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
	root: {
		maxWidth: 600,
		backgroundColor: "red",
	},
	media: {
		height: 140,
	},
});

export default function MediaCard() {
	const classes = useStyles();
	const a = process.env.NEXT_PUBLIC_ANALYTICS_ID;
	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image="/static/images/cards/contemplative-reptile.jpg"
					title="Contemplative Reptile"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{a}
					</Typography>
					<Typography
						style={{ color: "blue" }}
						variant="h1"
						component="h2"
						gutterBottom
					>
						h1. Heading
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						fdsfdsf
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<img src="/images/image/img-013-pagumon.png" alt="" />
				<Button size="small" color="primary">
					Share
				</Button>
				<Button size="small" color="primary">
					Learn More
				</Button>
			</CardActions>
		</Card>
	);
}
