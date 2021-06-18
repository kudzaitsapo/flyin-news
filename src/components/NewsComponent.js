import { Divider, makeStyles, Grid, Backdrop } from '@material-ui/core';
import React from 'react';
import { fetchTopStories } from '../services/http.service';
import { timeAgo } from '../utils/timeline';
import NewsCard from './NewsCard';
import { CircularProgress } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'block'
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

const NewsComponent = () => {
    const classes = useStyles();
    const [articles, setArticles] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        async function getArticles() {
            setLoading(true);
            try {
                const response = await fetchTopStories();
                setArticles(response.data.articles);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }

        getArticles();
    }, []);
    return (
        <div>
            <h1>Top Stories</h1>
            <Divider />
            
            <Backdrop className={classes.backdrop} open={loading}>
                <CircularProgress color="inherit" />
            </Backdrop>
            <div className={classes.cardGrid}>

               <Grid container spacing={2}>
                   {articles.map((article, index) => (
                       <Grid item key={index} xs={12} sm={6} md={3}>
                           <NewsCard newsImage={article.urlToImage} title={article.title} link={article.url} source={article.source.name} timeline={timeAgo(article.publishedAt)} />
                       </Grid>
                   ))}
               </Grid>
            </div>
        </div>
    );
}

export default NewsComponent;
