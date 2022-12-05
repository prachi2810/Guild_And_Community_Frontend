import * as React from "react";
import { useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import {
  Avatar,
  CardMedia,
  CardHeader,
  CardActions,
  Button,
  IconButton,
  Typography,
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { useNavigate, Link } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";
import image from "../images/MicrosoftTeams-image (4).png";
import axios from "../api/axios";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import "../App.css";

export default function MainBlog() {
  const theme = useTheme();
  const [like, setLike] = React.useState(false);
  const [allBlogs, setAllBlogs] = React.useState([]);
  const [selected, setSelected] = React.useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/blog/allBlogs").then((res) => {
      const blogs = res.data;
      setAllBlogs(blogs);
    });
  }, []);

  const handleLike = () => {
    setLike(!like);
  };
  console.log("blogs", allBlogs);
  return (
    <>
      {/* <div className="vl"></div> */}
      <Grid container>
        <Grid xs={6} md={10} lg={9}>
          {allBlogs.map((blog, idx) => {
            return (
              <div>
                <Card
                  sx={{ display: "flex", margin: "3%", maxWidth: 950 }}
                  elevation={12}
                  className="card"
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      margin: "3%",
                    }}
                  >
                    <CardContent
                      sx={{ flex: "1 0 auto" }}
                      style={{ leftMargin: "-11%" }}
                    >
                      <CardHeader
                        avatar={
                          <Avatar
                            sx={{
                              bgcolor: "#241640",
                              height: "30px",
                              width: "30px",
                            }}
                            aria-label="recipe"
                          >
                            {blog.author[0].toUpperCase()}
                          </Avatar>
                        }
                        title={blog.author}
                      />

                      <Typography component="div" variant="h5">
                        {blog.title}
                      </Typography>

                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                      >
                        {blog.createdAt}{" "}
                      </Typography>
                    </CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        pl: 1,
                        pb: 1,
                      }}
                    >
                      <Typography>
                        {blog.description.slice(0, 100)}...
                        <Link to={`/blog/blogById/${blog._id}`}>
                          <Button>Read More</Button>
                        </Link>
                      </Typography>
                    </Box>
                    <CardActions disableSpacing>
                      <IconButton
                        aria-label="add to favorites"
                        onClick={handleLike}
                      >
                        {blog.likes ? (
                          <FavoriteIcon style={{ color: "red" }} />
                        ) : (
                          <FavoriteIcon />
                        )}
                      </IconButton>
                      <IconButton aria-label="share">
                        <ShareIcon />
                      </IconButton>
                      <IconButton>
                        <BookmarkBorderIcon />
                      </IconButton>
                    </CardActions>
                  </Box>

                  <CardMedia
                    component="img"
                    sx={{ width: 300, height: 200, padding: "60px" }}
                    image={image}
                    alt="Image"
                  />
                </Card>
              </div>
            );
          })}
        </Grid>

        <Grid xs={6} md={2} lg={3}>
          <div style={{ marginTop: "3%", position: "fixed" }}>
            <Typography
              sx={{ fontSize: 14, fontSize: "bolder" }}
              color="text.secondary"
              gutterBottom
            >
              DISCOVER MORE OF WHAT MATTERS TO YOU
            </Typography>
            <Chip label="Programming" style={{ marginTop: "2%" }} />
            <br />
            <Chip label="Data Science" style={{ marginTop: "2%" }} />
            <br />
            <Chip label="Technology" style={{ marginTop: "2%" }} /> <br />
            <Chip label="Self Improvement" style={{ marginTop: "2%" }} />
            <Typography
              sx={{ fontSize: 14, fontSize: "bolder", marginTop: "15%" }}
              color="text.secondary"
              gutterBottom
            >
              Trending Blogs
            </Typography>
            <Card
              sx={{ minWidth: 75, margin: "3% 5%", borderRadius: "11%" }}
              elevation={12}
            >
              <p></p>

              {allBlogs.map((blog) => {
                return (
                  <>
                    <Typography style={{ margin: "2% 2% 2% 15%" }}>
                      {blog.title}
                    </Typography>
                    <Divider
                      orientation="Horizontal"
                      flexItem
                      style={{ margin: "0% 7% 0% 7%", fontWeight: "bolder" }}
                    />{" "}
                  </>
                );
              })}
              <IconButton
                onClick={window.scrollTo(0, 0)}
                style={{
                  position: "fixed",
                  bottom: 0,
                  marginLeft: "19%",
                  backgroundColor: "grey",
                }}
              >
                <ArrowUpwardRoundedIcon style={{ color: "white" }} />
              </IconButton>
            </Card>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
