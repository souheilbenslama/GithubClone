import {Octokit} from "@octokit/core";

/**
 * this class represents the Service that makes the github API calls
 * @dependencies { octokit}
 */

class GithubService{
    private octokit:Octokit;
    constructor() {
        this.octokit = new Octokit({
            auth: process.env.REACT_APP_GITHUB_TOKEN
        })
    }
    /**
     * Return available information about the GitHub account of the user defined by his username
     * @returns {object}
       */ 
     getUser (){
        var user =  this.octokit.request('GET /users/{username}', {
            username: process.env.REACT_APP_GITHUB_USERNAME||''
        });
       
        return user;
    }
    /**
     *  Return a list of repositories for the specified user
     * @returns {[object]}
     */
    
    getRepositories () {
        var repos = this.octokit.request('GET /users/{username}/repos', {
            username: process.env.REACT_APP_GITHUB_USERNAME||''
        });

        return repos ;
    }
}
export default new GithubService();