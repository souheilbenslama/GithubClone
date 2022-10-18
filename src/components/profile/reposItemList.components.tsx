import React from "react";
import moment from "moment";
import styles from './styles.module.css';
import {
     Chip,
    Typography,
    ListItem,
    ListItemText,
    ListItemButton,
    ListItemIcon
} from "@mui/material";


const ReposItemList = (props: { repository: any; index: React.Key | null | undefined; })=>{
   let repository: any = props.repository;
   /**
    * format a date to 'MMM Do YY' exp: Sep 13th 22
    * @param {any} it represnets the update  date of the repository
     */ 

    const formatDate = (date: any) => {
        return moment(date).format("MMM Do YY");
    }

    return ( <ListItemButton href={repository.html_url}  >
                                  <ListItem key={props.index} secondaryAction={ 
                                       <Chip className={styles.ml5}
                                          label={repository.private ? "private" : "public"}
                                       variant="outlined" size="small"/> }>
                                  <ListItemText className={styles.repositoryLink} primary={<h2>{repository.name}</h2>} secondary={
                                      <React.Fragment>
                                      <p> updated {formatDate(repository.updated_at)}</p>
                                       <Typography
                                      sx={{ display: 'inline' }}
                                      component="span"
                                      variant="body2"
                                      color="text.primary"
                                    >
                                     <p>{repository.description}</p>  
                                    </Typography>
                                    </React.Fragment>
                                       } /> 
                                  </ListItem>
                              </ListItemButton>                                                   
    );

}

export default ReposItemList ; 