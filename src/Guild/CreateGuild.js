import * as React from "react";
import {
  Paper,
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Divider,
  Tooltip,
  Button,
} from "@mui/material";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import axios from "../api/axios";
 
const defaultPolestar = {
    name:'',
    designation:'',
    imageUrl:''
}

const defaultguild = {
  name: "",
  polestar:[],
  torchBearers: [],
  trendSetters: [],
  purpose: "",
};

export default function Createguild() {
  const [guild, setGuild] = React.useState(defaultguild);
  const [poleStar,setPoleStar] = React.useState(defaultPolestar)
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setGuild({ ...guild, [e.target.name]: e.target.value });
  };

  const handleChange =(e) =>{
    console.log(poleStar);
    // console.log(e.target.name);
    setPoleStar({...poleStar,[e.target.name]:e.target.value});
  }
 const  handleSubmit = ()=>{
    console.log('JOII');
        console.log("polestar",poleStar)
        console.log(guild);
        setGuild({...guild,polestar:[poleStar]});
  }
  const handleNavigate = () => {
    navigate("/guild");
  };
  return (
    <>
      <Paper elevation={12} style={{ margin: "5%" }} className="guild">
        <IconButton style={{ margin: "1%" }} onClick={handleNavigate}>
          <ArrowBackIcon />
        </IconButton>
        <div>
          <TextField
            id="outlined-basic"
            name="name"
            label="guild Name"
            variant="outlined"
            style={{ margin: "2%", width: "95%" }}
            onChange={changeHandler}
          />
          <Divider
            orientation="horizontal"
            flexItem
            style={{ margin: "0% 5% 0% 5%", fontWeight: "bolder" }}
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            name="name"
            label="polestar Name"
            variant="outlined"
            onChange={handleChange}
            style={{ margin: "2%", width: "25%" }}
          />
          <FormControl style={{ margin: "2%", width: "25%" }}>
            <InputLabel id="demo-simple-select-label">Designation</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="designation"
              value={guild.designation}
              label="Designation"
              onChange={handleChange}
            >
              <MenuItem value="Associate Vice President, Application Services">
                Associate Vice President, Application Services
              </MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <TextField
            id="outlined-basic"
            label="imageUrl"
            name="imageUrl"
            variant="outlined"
            onChange={handleChange}
            style={{ margin: "2%", width: "25%" }}
          />
          <Tooltip title="Add PoleStar">
            <IconButton style={{ marginTop: "2%" }}>
              <AddCircleIcon />
            </IconButton>
          </Tooltip>
          <Divider
            orientation="horizontal"
            flexItem
            style={{ margin: "0% 5% 0% 5%", fontWeight: "bolder" }}
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            name="torchBearers"
            label="TorchBearers"
            variant="outlined"
            onChange={changeHandler}
            style={{ margin: "2%", width: "45%" }}
          />

          <TextField
            id="outlined-basic"
            label="TrendSetters"
            name="trendSetters"
            variant="outlined"
            onChange={changeHandler}
            style={{ margin: "2%", width: "45%" }}
          />
          <Divider
            orientation="horizontal"
            flexItem
            style={{ margin: "0% 5% 0% 5%", fontWeight: "bolder" }}
          />
        </div>
        <TextField
          id="outlined-multiline-flexible"
          label="Purpose of guild"
          name="purpose"
          multiline
          maxRows={4}
          onChange={changeHandler}
          style={{ margin: "2%", width: "95%" }}
        />
        <Button
          variant="contained"
          style={{ margin: "2%", backgroundColor: "#241640" }}
          onClick={handleSubmit}
        >
          Create guild
        </Button>
      </Paper>
    </>
  );
}
