import React, { useState, useEffect } from 'react';
import { Octokit } from '@octokit/core';

// const restEndpoint = "https://api.github.com/users/admsht/repos";

const callRestApi = async () => {
    const octokit = new Octokit({
        auth: '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'
      });
    
    const response = await octokit.request('GET /search/repositories', {q:"learning&awesome+language:javascript"});
    // const jsonResponse = await response.json();
    console.log(response.data);
    // return JSON.stringify(jsonResponse);
};

const TrendingRepo = () => {
    
        callRestApi();
        return (
            <div>
                <h1>React App</h1>
            </div>
        );
    };

export default TrendingRepo;




    // function RenderResult() {
    //     const [apiResponse, setApiResponse] = useState("*** now loading ***");
    
    //     useEffect(() => {
    //         callRestApi().then(
    //             result => setApiResponse(result));
    //     }, []);
    // }
