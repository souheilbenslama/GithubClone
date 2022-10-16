import { Grid } from "@mui/material";
import React from "react";
import { ReactDOM } from "react";
import ProfileInfoComponent from "./profile-info.components";
import ProfileRepositoriesComponent from './repositories.components';

class Profile extends React.Component{


    render(): React.ReactNode {
        return(

            <Grid container spacing={2}>
                 <Grid item xs={12} md={4} lg={4} xl={4} sm={12}>
                 <ProfileInfoComponent/>
                </Grid>

                 <Grid item xs={12} md={4} lg={8} xl={8} sm={12}>
                    <ProfileRepositoriesComponent/>
                </Grid>


            </Grid>

        ) 
    }
}


export default Profile ;