import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import './index.css';

const useStyles = makeStyles({
  card: {
    maxWidth: 500,
    marginTop: 50,
    marginLeft: 500,
  },
});

const News = ({
  data, handleClickOpen, handleClickDelete, handleClickOpenEdit,
}) => {
  const classes = useStyles();
  console.log('DATA', data);
  return (data.news.map(news => (
    <Card key={news.id} className={classes.card}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {news.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {news.review}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => handleClickOpen(news.id)}>
                    Learn More
        </Button>
        <Button size="small" color="primary" onClick={() => handleClickDelete(news.id)}>
                    Delete
        </Button>
        <Button size="small" color="primary" onClick={() => handleClickOpenEdit(news.id)}>
                    Edit
        </Button>
      </CardActions>
    </Card>
  ))
  );
};


export default News;
