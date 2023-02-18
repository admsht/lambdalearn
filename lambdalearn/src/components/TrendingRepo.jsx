import React, { useState, useEffect } from 'react';

const restEndpoint = "https://api.github.com/users/admsht/repos";

const callRestApi = async () => {
    const response = await fetch(restEndpoint);
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    return JSON.stringify(jsonResponse);
};


    const TrendingRepo = () => {

        function RenderResult() {
            const [apiResponse, setApiResponse] = useState("*** now loading ***");
        
            useEffect(() => {
                callRestApi().then(
                    result => setApiResponse(result));
            }, []);
        }

        return (
            <div>
                <h1>React App</h1>
                <RenderResult />
            </div>
        );
    };



export default TrendingRepo;
