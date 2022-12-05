import React, { useState } from "react";
import {Paper,TextField,Button,IconButton}from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";

const defaultBlog ={
  title:'',
  author:'',
  description:''
}
export default function CreateBlog() {
  const navigate = useNavigate();
  const [blog,setBlog] = useState(defaultBlog)

  const changeHandler = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };
  const handleCreate =() =>{
     
    axios.post(`blog/createBlog`,blog).then((response) => {
      console.log(response.data);
    });
  }
  const handleNavigate = () => {
    navigate("/blog");
  };
  return (
    <>
      <IconButton onClick={handleNavigate}>
        <ArrowBackIcon />
      </IconButton>
      <Paper elevation={6} style={{ margin: "3%" }}>
        <TextField
          id="outlined-basic"
          name="title"
          label="Enter Blog Title"
          variant="outlined"
          sx={{ margin: "3%", width: "120ch" }}
          onChange={changeHandler}
        />
          <TextField
          id="outlined-basic"
          name="author"
          label="Enter Name"
          variant="outlined"
          sx={{ margin: "3%", width: "120ch" }}
          onChange={changeHandler}
        />
        <TextField
          id="outlined-textarea"
          name="description"
          label="Write your content"
          multiline
          sx={{ marginTop: "1%", marginLeft: "3%", width: "120ch" }}
          onChange={changeHandler}

        />
        <div>
          <Button
            style={{
              marginTop: "2%",
              marginLeft: "3%",
              marginBottom: "1%",
              backgroundColor: "#241640",
            }}
            variant="contained"
            onClick={handleCreate}
          >
            Post a Blog
          </Button>
        </div>
      </Paper>
    </>
  );
}
