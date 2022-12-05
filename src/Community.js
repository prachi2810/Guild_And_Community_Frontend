import React from "react";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import GroupIcon from "@mui/icons-material/Group";
import rohan from "./images/Rohan.PNG";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Activities from "./Activities";
import "./App.css";


export default function Community() {
  const [guild,setGuild] = React.useState([])
  // React.useEffect(() => {
  //   axios.get("/blog/allBlogs").then((res) => {
  //     const blogs = res.data;
  //     setAllBlogs(blogs);
  //   });
  // }, []);
  return (
    <>
      <Paper
        elevation={12}
        style={{
          margin: "3px",
          backgroundColor: "#241640",
          paddingBottom: "15px",
        }}
      >
        <Chip
          elevation={18}
          icon={<GroupIcon />}
          label="57 Members"
          style={{
            fontWeight: "bold",
            margin: "3px",
            marginTop: "5%",
            backgroundColor: "white",
            opacity: 0.5,
          }}
        />

        <h1 style={{ color: "white", margin: "3px" }}>
          Product Owner / Product Manager Community
        </h1>
      </Paper>

      <Card elevation={8} sx={{ minWidth: 275, margin: "2%" }}>
        <div className="flex-container">
          <div className="flex-item-left">
            <img
              src={rohan}
              style={{
                height: "50%",
                width: "110%",
                marginTop: "11%",
              }}
            />
          </div>
          <CardContent>
            <div className="flex-item-right">
              <Typography variant="h5" component="div">
                Rohan Kudav
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                <b>Pole Star, Product Owner Guild</b>
                <div>Associate Vice President, Application Services</div>
              </Typography>
              <Typography component="div">Torch Bearers :</Typography>
              <Typography component="div">Trend Setters :</Typography>
            </div>
            <hr />
            <h3>Purpose of group</h3>
            <Typography variant="body1">
              An exclusive community for Product Owners & Product Managers
              facilitating collaboration through Knowledge Management sessions
              on current industry trends, building case studies, publishing
              Thought papers, articles and POVs on relevant Product \management
              topics, mentoring candidates for hackathons and curating assets
              and training content to build value for the enterprise. Our
              endeavor is to help promote Product Mindset within the
              organization.
            </Typography>
          </CardContent>
        </div>
      </Card>
      <div className="flex-container">
        <Card elevation={8} sx={{ margin: "3%", minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              <Activities />
            </Typography>
            <Typography variant="body2">
              Please reach out to
              <a href="https://zensar.com/"> Product_Owner</a>  for more details
              <br />
              <a href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf">
                Know more about the community
              </a>
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Request to Join</Button>
          </CardActions>
        </Card>
        <Card elevation={8} sx={{ margin: "3%", minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <Activities />
            </Typography>
            <Typography variant="body2">
              Please reach out to Product_Owner for more details
              <br />
              <a href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf">
                Know more about the community
              </a>
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Request to Join</Button>
          </CardActions>
        </Card>
        <Card elevation={8} sx={{ margin: "3%", minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <Activities />
            </Typography>
            <Typography variant="body2">
              Please reach out to Product_Owner for more details
              <br />
              <a href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf">
                Know more about the community
              </a>
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Request to Join</Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
}
