import React, { useState, useEffect } from 'react';
import { Octokit } from '@octokit/core';


const TrendingRepo = () => {
    const [data, setdata] = useState([]);
    const [error, setError] = useState(null);
    
    const callRestApi = async () => {
        const octokit = new Octokit({
            auth: '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'
          });
    
        try {
         const response = await octokit.request('GET /search/repositories', {q:"learn&code in:readme+language:javascript",sort:"stars",order:"desc",per_page:10});
         if(response.status !== 200) throw Error("Not succesful request");   
         setdata(response.data.items);
        } catch (e) {
            console.log(e);
            setError(e.toString());
        }
    };

    useEffect(() => {
        callRestApi();
    }, []);

    const renderData = (item) => <div key={item.id}>
    <h1>{item.name}</h1>
</div>;
    
        return ( 
          <>
            {error? <h2>Error happened{error}</h2> : 
             data.map(val => renderData(val))}
           </>
        );
    };

export default TrendingRepo;
