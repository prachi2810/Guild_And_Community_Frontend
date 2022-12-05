import * as React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { useNavigate } from "react-router-dom";

export default function Post({ post: { title, body, author }, index }) {
  const [like, setLike] = React.useState(false);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Blogs/Read");
  };

  const handleLike = () => {
    setLike(!like);
  };
  return (
    <>
      <Card className="post-container" elevation={12} sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "#241640" }} aria-label="recipe">
              R
            </Avatar>
          }
          title={author}
          subheader="September 14, 2016"
        />

        <CardContent>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ maxHeight: "auto"}}
          >
            {body}
            <Button onClick={handleClick}>Read More</Button>
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites" onClick={handleLike}>
            {like ? (
              <FavoriteIcon style={{ color: "red" }} />
            ) : (
              <FavoriteIcon />
            )}
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
}
