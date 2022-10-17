import React, {useEffect, useState} from "react";
import {
    Box,
    InputAdornment,
    OutlinedInput,
    CircularProgress,
    List,
} from "@mui/material";
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import moment from "moment";
import GithubService from "../../services/github.service";
import styles from './styles.module.css';
import ReposBar from "./reposBar.components";
import ReposItemList from "./reposItemList.components";


const ProfileRepositoriesComponent = () => {
    const [repositories, setRepositories] = useState<any[]>([]);
    const [searchValue, setSearchValue]: [string, (search: string) => void] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value)
    };

    useEffect(() => {
        GithubService.getRepositories().then(response => {
            setRepositories(response.data);
        });
    }, [repositories]);
    return (
        <div>
           <ReposBar/>
            <Box className={styles.box}>
                <OutlinedInput id="search-input"
                               size="small"
                               className={styles.mb15}
                               placeholder="Find a repository..."
                               onChange={handleChange}
                               endAdornment={
                                   <InputAdornment position="end">
                                       <SearchSharpIcon sx={{color: 'action.active', mr: 1, my: 0.5}}/>
                                   </InputAdornment>
                               }
                               fullWidth/>
            </Box>

            <div className={styles.fullWidth }>
            
              <List  className={styles.listtre } >
                    {repositories.length ? repositories.map((repository, index) => {
                                if (searchValue === "" || repository.name.toLowerCase().startsWith(searchValue.toLowerCase())) {
                                    return (
                                    <ReposItemList repository={repository} index={index} ></ReposItemList>
                                    
                                    )
                                }else {
                                    return (<></>)
                                }
                    
                            } 
                        ) :
                        <div>
                            <CircularProgress color="inherit" className={styles.m10}/>
                        </div>

                    }
                </List>

            </div>

        </div>

    );
}
export default ProfileRepositoriesComponent;