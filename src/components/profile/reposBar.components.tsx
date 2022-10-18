import React, {useEffect, useState} from "react";
import {
    Box, Button, Chip,
    Typography,
} from "@mui/material";
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import ImportContactsTwoToneIcon from '@mui/icons-material/ImportContactsTwoTone';
import GithubService from "../../services/github.service";
import styles from './styles.module.css';


const ReposBar = () => {

    const [repositories, setRepositories] = useState<any[]>([]);
    useEffect(() => {
        GithubService.getRepositories().then(response => {
            setRepositories(response.data);
        });
    }, [repositories]);

    return ( <React.Fragment >
        <Box className={styles.box }>
            <Typography>
                <Button
                    className={styles.navButton}
                    variant="contained" disabled={true}
                    startIcon={<ImportContactsTwoToneIcon/>}
                >
                    Overview 
                </Button>
                <Button
                    className={styles.selectedNavButton } 
                    variant="contained"
                    startIcon={<BookOutlinedIcon/>} 
                >
                    Repositories <Chip label={repositories.length} size="small" className={styles.ml5}/>
                </Button>
                <Button
                    className={styles.navButton}
                    variant="contained" disabled={true}
                    startIcon={<BookOutlinedIcon/>}
                >
                    Projects 
                </Button>
            </Typography>
        </Box>
    </React.Fragment>);
}

export default ReposBar ;