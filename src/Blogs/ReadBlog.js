import * as React from "react";
import {
  Paper,
  Typography,
  IconButton,
  InputLabel,
  InputAdornment,
  FormControl,
  Input,
  Avatar,
  CardHeader,
} from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import axios from "../api/axios";

export default function SimplePaper() {
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  const [blog, setBlog] = React.useState([]);
  const [like, setLike] = React.useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  React.useEffect(() => {
    axios.get(`/blog/blogById/${id}`).then((res) => {
      const blogs = res.data;
      console.log("new", blogs);
      setBlog(blogs);
    });
    console.log("blog", blog);
  }, []);
  const handleNavigate = () => {
    navigate("/blog");
  };
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  // const navigate = useNavigate();
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLike = () => {
    setLike(!like);
    console.log("like", like);
  };
  return (
    <>
      <Paper elevation={24} style={{ margin: "2%", padding: "2%" }}>
        <div className="bgImage">
        <IconButton onClick={handleNavigate}>
          <ArrowBackIcon />
        </IconButton>
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: "#241640" }}
              aria-label="recipe"
              alt={blog.author}
            />
          }
          title={blog.author}
          subheader={blog.createdAt}
          style={{marginLeft:'2%'}}
        />
        </div>
        <hr />
        <Typography variant="h5" component="div" sx={{ marginTop: "2%" }}>
          {blog.title}
        </Typography>
        <Typography variant="body1" style={{ margin: "1%" }}>
          {blog.description}
        </Typography>
        <br />
        <div className="flex-container">
          <FormControl sx={{ m: 1, width: "120ch" }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">
              Leave a Comment
            </InputLabel>
            <Input
              id="standard-adornment-password"
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    <SendIcon sx={{ color: "#241640" }} />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <div style={{ marginTop: "1.5%", marginLeft: "2.5%" }}>
            <IconButton onClick={handleLike}>
              {like ? (
                <ThumbUpIcon style={{ color: "#241640" }} fontSize="large" />
              ) : (
                <ThumbUpOffAltIcon fontSize="large" />
              )}
            </IconButton>
            <IconButton>
              <ShareIcon fontSize="large" style={{ color: "#241640" }} />
            </IconButton>
          </div>
        </div>
      </Paper>
      <Paper elevation={3} style={{ margin: "2%", padding: "2%" }}>
        <h2 style={{ paddingLeft: "4%" }}>Comments</h2>
        <div style={{ margin: "2%", paddingLeft: "4%", paddingRight: "4%" }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: "#241640" }} aria-label="recipe">
                S
              </Avatar>
            }
            title="Srushti Shendkar"
            subheader="September 14, 2016"
          />
          <Typography variant="body1" style={{ paddingLeft: "1%" }}>
            An exclusive community for Product Owners & Product Managers
            facilitating collaboration through Knowledge Management sessions on
            current industry trends, building case studies, publishing Thought
            papers.
          </Typography>
          <hr />
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: "#241640" }} aria-label="recipe">
                P
              </Avatar>
            }
            title="Prachi Tolsankar"
            subheader="September 10, 2016"
          />
          <Typography variant="body1" style={{ paddingLeft: "1%" }}>
            An exclusive community for Product Owners & Product Managers
            facilitating collaboration through Knowledge Management sessions on
            current industry trends, building case studies, publishing Thought
            papers.
          </Typography>
          <hr />
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: "#241640" }} aria-label="recipe">
                S
              </Avatar>
            }
            title="Srushti Shendkar"
            subheader="September 14, 2016"
          />
          <Typography variant="body1" style={{ paddingLeft: "1%" }}>
            An exclusive community for Product Owners & Product Managers
            facilitating collaboration through Knowledge Management sessions on
            current industry trends, building case studies, publishing Thought
            papers.
          </Typography>
        </div>
      </Paper>
    </>
  );
}
