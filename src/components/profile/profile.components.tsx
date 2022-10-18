/**
 * a profile class that represent the profile component that is formed by user info component and repositories component
 * @extends {React.Component}
 * about its dependencies
 * @package {@mui/material }
 * @package {react}
 */

import { Container, Grid } from "@mui/material";
import React from "react";
import UserInfoComponent from "./UserInfo.components";
import ProfileRepositoriesComponent from './reposList.components';



class Profile extends React.Component{


    render(): React.ReactNode {
        return(
            <div>
                
            <Container fixed>
            <Grid  container spacing={2} >
                 <Grid  item xs={12} md={4} lg={4} xl={4} sm={12}>
                 <UserInfoComponent/>
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