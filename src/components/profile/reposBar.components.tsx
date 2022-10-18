import React, {useEffect, useState} from "react";
import {
    Box, Button, Chip,
    Divider,
    InputAdornment,
    OutlinedInput,
    Tooltip,
    Typography,
    CircularProgress,
    List,
    ListItem,
    ListItemText,
    ListItemButton,
    ListItemIcon
} from "@mui/material";
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import ImportContactsTwoToneIcon from '@mui/icons-material/ImportContactsTwoTone';
import moment from "moment";
import GithubService from "../../services/github.service";
import styles from './styles.module.css';
import ImportContactsTwoTone from "@mui/icons-material/ImportContactsTwoTone";
import { render } from "@testing-library/react";

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