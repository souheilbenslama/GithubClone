import React, {useEffect, useState} from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Avatar, CircularProgress} from "@mui/material";
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import GithubService from "../../services/github.service";
import styles from './styles.module.css';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const ProfileInfoComponent = () => {
    const [user, setUser] = useState<any>()
    useEffect(() => {
        GithubService.getUser().then((response: any) => {
            setUser(response.data);
        });
    }, [user]);


    return (
        <Card className={styles.card}>
            { user ? <>
                    <CardContent>
                        <Avatar
                            alt="Remy Sharp"
                            src={user.avatar_url}
                            className={styles.avatar}/>
                        <Typography gutterBottom variant="h5"
                                    className={styles.textCenter}
                                    component="div">
                            {user.name}
                            <Typography variant="body2"
                                        className={styles.textCenter}
                                        color="text.secondary">
                                {user.login}
                            </Typography>
                        </Typography>

                        <Typography variant="body2">
                            {user.bio}
                        </Typography>

                       <Typography className={styles.infobox} variant="body2"  >
                                        <div className={styles.center}>
                                         <EmailOutlinedIcon/>
                                        <span className={styles.ml5}>{user.email} </span>
                                        </div> 
                                    
                      

                    
                                        <div className={styles.center}>
                                            <LinkedInIcon/>
                                            <span className={styles.ml5}>{user.blog} </span>
                                        </div>
                    
                    
                                        <div className={styles.center}>
                                            <BusinessOutlinedIcon/>
                                            <span className={styles.ml5}>{user.company} </span>
                                        </div>
                    
                    
                                        <div className={styles.center}>
                                            <LocationOnOutlinedIcon/>
                                            <span className={styles.ml5}>{user.location} </span>
                                        </div>
                                  
                        
                                        <div className={styles.center}>
                                            <PeopleOutlineOutlinedIcon/>
                                            <span className={styles.ml5}>{user.followers} followers, {user.following} following</span>
                                        </div>
                        

                        </Typography>
                    </CardContent>

                    <CardActions>
                        <Button size="small" variant="outlined" href={user.html_url} fullWidth>
                            Consult Profile
                        </Button>
                    </CardActions>
                </> :
                <div>
                    <CircularProgress color="inherit" className={styles.m10}/>
                </div>
            }
        </Card>

    );
}
export default ProfileInfoComponent;