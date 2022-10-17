import { Container, Grid } from "@mui/material";
import React from "react";
import { ReactDOM } from "react";
import ProfileInfoComponent from "./UserInfo.components";
import ProfileRepositoriesComponent from './reposList.components';
import styles from './styles.module.css';
class Profile extends React.Component{


    render(): React.ReactNode {
        return(
            <div>
                
            <Container fixed>
            <Grid  container spacing={2} >
                 <Grid  item xs={12} md={4} lg={4} xl={4} sm={12}>
                 <ProfileInfoComponent/>
                </Grid>


                 <Grid  item xs={12} md={4} lg={8} xl={8} sm={12}>
                    <ProfileRepositoriesComponent/>
                </Grid>


            </Grid>

            </Container>
        </div>

        ) 
    }
}


export default Profile ;