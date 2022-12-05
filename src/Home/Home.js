import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import { FacebookShareButton, FacebookIcon, WhatsappShareButton, WhatsappIcon, LinkedinShareButton, LinkedinIcon } from 'react-share';
import ShareIcon from '@mui/icons-material/Share';
import "react-datepicker/dist/react-datepicker.css";
import axios from '../api/axios'
import "./Home.css"
import PeopleAltSharpIcon from '@mui/icons-material/PeopleAltSharp';
import Testimonial from '../Testimonial/Testimonial';
import Footer from '../Footer/Footer';
import Calendars from '../Calendar/Calendar';
import { useNavigate,Link } from 'react-router-dom';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: 2,
    boxShadow: 24,
    p: 4,

};

export default function Home() {
    const [guilds, setGuilds] = useState([])
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    

    React.useEffect(() => {
        axios.get('/guild').then((res) => {
            setGuilds(res.data)
        }
        )
    }, [])
    console.log("guild", guilds)
    return (

        <>
            <div className="head-text">
                <img src="../campaign-creators3.jpg" width={'100%'} alt="Banner" style={{ borderRadius: 5, marginTop: 68 }} />
            </div>
            <div className='text-on-image'>
                <Typography style={{marginTop:-40}}>
                    <h1 className='text'> Zensar Guilds and <br /> Communities 2022 </h1>
                </Typography>
            </div>

            <Typography variant='h6' style={{ marginTop: 40, fontStyle: 'italic', fontFamily: "Segoe UI Regular WestEuropean,Segoe UI,Tahoma,Arial,sans-serif" }}>

                Learning is not only about skills and competencies, it is also about recognizing the human element, and nurturing the relationships.
                We at Zensar, strongly believe in building relationships and helping each other grow, collaborate and set highest standards of the best learning practices. And this is the foundation of our recently launched initiative.
                <br /><strong>- Guilds and Communities.</strong><br />
            </Typography>
            <Typography>

            </Typography>
            <Typography>
                <Typography variant="h4" style={{ textAlign: 'center', marginLeft: 20, fontWeight: 'bold', marginTop: 40 }}>ABOUT</Typography>
                <Grid container spacing={2} columns={12} style={{ textAlign: 'left', marginTop: 20 }}>

                    <Grid item xs={3}>
                        <img src='../abouti.png' width={'90%'} style={{ marginLeft: '10%' }} />
                    </Grid>
                    <Grid item xs={9}>
                        <Typography style={{ marginTop: 20, marginLeft: 20 }}>
                            <strong>Zensar Guild</strong> is a closed group of specialists, leaders of a domain, technology or role. Entry to this group is restricted to certain members, who share some pre-defined credential, only! They are the Torch bearers and Trend setters of their respective areas
                            <Typography style={{ marginTop: 30 }}>
                                <strong>Community</strong> is an open group, sharing a common interest in a specific domain, technology or a role. Anybody who is interested in the domain/ technology, that the community is formed for, can be a part of it.
                                <Typography style={{ marginTop: -23, marginLeft: '85%' }}><a href='https://zensar.sharepoint.com/sites/GuildsandCommunities/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FGuildsandCommunities%2FShared%20Documents%2FG%26C%20microsite%20%281%29%2Epdf&parent=%2Fsites%2FGuildsandCommunities%2FShared%20Documents&p=true&ga=1'>Know More</a></Typography>
                            </Typography>
                        </Typography>
                    </Grid>
                </Grid>
            </Typography>
            <Grid container columns={12} style={{ textAlign: 'left' }}>
                <Grid item xs={9}>
                    <Typography variant="h4" style={{ fontWeight: 'bold', fontFamily: '', marginLeft: 20, marginTop: 40 }}>Explore Communities</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography variant="h5" style={{ fontFamily: 'bold', marginTop: 40, marginLeft: 16 }}><strong>Upcoming Events</strong></Typography>
                </Grid>
            </Grid>
            <Grid container columns={12} style={{ textAlign: 'left', marginTop: 50, marginBottom: 50 }}>
                {guilds.map((guild) => {
                    return (
                        <Grid item xs={3} >
                            <Paper elevation={8} sx={{ maxWidth: 300 }} style={{ marginLeft: 20, borderRadius: 20 }}>
                                <Card sx={{ maxWidth: 300, borderRadius: 2 }}>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="../Home.PNG"
                                        alt="green iguana"
                                        style={{ zIndex: 0 }}
                                    />
                                    <CardContent style={{ position: 'relative', top: -30, zIndex: 100, backgroundColor: 'white', borderRadius: 20 }}>
                                        <Grid container spacing={2} columns={12} >
                                            <Grid item xs={10}>
                                                <Typography gutterBottom variant="subtitle1" fontWeight="bold" component="div" style={{ lineHeight: 1 }}>
                                                    {guild.name}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={2} >
                                                <Typography variant='small' style={{ position: 'relative', left: '60%', }}>
                                                    <PeopleAltSharpIcon style={{ paddingBottom: 0 }} />
                                                </Typography>

                                            </Grid>
                                        </Grid>
                                        <Typography variant="body2" color="text.secondary" style={{ textAlign: 'left' }}>
                                            {guild.purpose.slice(0, 90)}...<Link to={`/Guild/guilds/${guild._id}`}><a href=''>Read More</a></Link>
                                        </Typography>
                                        <Grid container spacing={2} columns={12} style={{ textAlign: 'left', marginTop: 20, marginBottom: -40 }}>
                                            <Grid item xs={6}>
                                                <Typography variant='subtitle2'>

                                                    <strong>Date Formed</strong>
                                                    <br />
                                                    <strong>Ratings</strong>

                                                </Typography>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Typography variant='subtitle2'>

                                                    Feb 18, 2020<br />
                                                    4.3<br />
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                    {/* <CardActions> */}
                                    {/* <Button onClick={handleOpen} size="small">Share</Button> */}
                                    <Button onClick={handleOpen} variant="text" style={{ position: 'relative', left: '81%', marginBottom: 5, color: 'black' }}><ShareIcon /></Button>
                                    <Modal
                                        aria-labelledby="transition-modal-title"
                                        aria-describedby="transition-modal-description"
                                        open={open}
                                        onClose={handleClose}
                                        closeAfterTransition
                                        BackdropComponent={Backdrop}
                                        BackdropProps={{
                                            timeout: 500,
                                        }}
                                    >
                                        <Fade in={open}>
                                            <Box sx={style}>
                                                <Typography id="transition-modal-title" variant="h6" component="h2">
                                                    <strong>Share Now</strong>
                                                </Typography>
                                                <Grid container columns={12} style={{ textAlign: 'center' }}>
                                                    <Grid item xs={4}>
                                                        <Typography id="transition-modal-description" sx={{ mt: 2 }} >
                                                            <FacebookShareButton url='https://mui.com/material-ui/react-card/' quote='contact' style={{ marginLeft: 10 }}>
                                                                <FacebookIcon size={40} round={true}></FacebookIcon>
                                                            </FacebookShareButton>
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={4}>
                                                        <Typography id="transition-modal-description" sx={{ mt: 2 }} >
                                                            <WhatsappShareButton url='http://localhost:3000/' quote='contact'>
                                                                <WhatsappIcon size={40} round={true}></WhatsappIcon>
                                                            </WhatsappShareButton>
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={4}>
                                                        <Typography id="transition-modal-description" sx={{ mt: 2 }} >
                                                            <LinkedinShareButton url='http://localhost:3000/' quote='contact'>
                                                                <LinkedinIcon size={40} round={true}></LinkedinIcon>
                                                            </LinkedinShareButton>
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        </Fade>
                                    </Modal>

                                    {/* </CardActions> */}
                                </Card>
                            </Paper>
                        </Grid>
                    )
                })}

                <Grid item xs={3} style={{ marginBottom: 10, maxWidth: 300, marginLeft: 15 }}>
                    <div>
                        <Calendars />
                    </div>
                </Grid>
            </Grid>
            <Grid container style={{ textAlign: 'center' }}>
                <Typography variant="h4" style={{ fontWeight: 'bold', fontFamily: '', marginLeft: '38%', marginTop: 30, marginBottom: 20 }}>Message From Leader</Typography>
            </Grid>
            <Grid container columns={12} style={{ textAlign: 'center' }}>
                <Grid item xs={7}>
                    <iframe width="730" height="350" src="https://www.youtube.com/embed/86o7W5_SXbY" title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ marginLeft: 20, marginTop: 20 }}></iframe>
                </Grid>
                <Grid item xs={5}>

                    <img src='../Quotes1.png' style={{ height: '33%', marginTop: 20, width: '85%' }} />
                    <img src='../Quotes2.png' style={{ height: '33%', marginTop: 10, width: '85%' }} />
                </Grid>
            </Grid>
            {/* </Grid> */}
            <Typography variant="h4" style={{ fontWeight: 'bold', fontFamily: '', marginTop: -70 }}>L & D Team</Typography>
            <Grid container columns={12}>
                <Testimonial style={{ marginBottom: 40 }} />
            </Grid>
            <Footer />
        </>
    );
}