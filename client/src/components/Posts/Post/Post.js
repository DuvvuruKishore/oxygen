import React from 'react';
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core/';

import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';

import { deletePost } from '../../../actions/posts';
import useStyles from './styles';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Typography>No of cylinders needed</Typography>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
      <CardContent>
      <Typography>Address</Typography>
        <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
      <Typography>timeline</Typography>
      <Typography variant="body2" color="textSecondary" component="h2">{post.tags}</Typography>
      
      <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" /> Delete</Button>
      </CardActions>
    </Card>
  );
};

export default Post;