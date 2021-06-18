import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { Link } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const useStyles = makeStyles({

    root: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    media: {
        height: 140,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    sources: {
        marginTop: '1vh', 
        marginLeft: '1ch' 
    }
});



const NewsCard = (props) => {
    const classes = useStyles();

    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                component="img"
                image={props.newsImage ? props.newsImage : '/assets/img/banner-default-old.jpg'}
                title="News Image"
            />
            
            <CardContent>
                <Link href={props.link} target="_blank">
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.title.length >= 60 ? props.title.slice(0, 60) + '...' : props.title}
                    </Typography>
                </Link>
            </CardContent>
            <CardActions>
                <Typography variant="subtitle2" color="textSecondary" component="p" className={classes.sources}>{props.source} {bull} {props.timeline}</Typography>
            </CardActions>
        </Card>
    );
}

export default NewsCard;
