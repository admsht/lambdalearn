import React, { useState, useEffect } from 'react';
import { Octokit } from '@octokit/core';


const TrendingRepo = () => {
    const [Items, setItems] = useState([]);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [pagesRemainig, setPagesRemainig] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [lang, setLang] = useState('javascript');

    //dropdown options
    const options = [
        {value:"javascript",label:"Javascript"},
        {value:"c",label:"C"},
        {value:"c++",label:"C++"},
        {value:"python",label:"Python"},
        {value:"c#",label:"C#"},
    ];

    const callRestApi = async () => {
        if(!pagesRemainig) return;

        setIsLoading(true);
        const octokit = new Octokit({
            auth: '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'
          });
    
        try {
         const response = await octokit.request('GET /search/repositories', {q:`learn&code in:readme+react in:name+language:${lang}`,sort:"stars",order:"desc",per_page:10,page:page});
        //  TODO: Add correct error handling
         if(response.status !== 200) throw Error("Not succesful request");
         let newItems = response.data.items; 

         //checks if we have any pages remaining
         let linkHeader = response.headers.link;
         let hasNxtPage = linkHeader && linkHeader.includes(`rel=\"next\"`);
          
         setItems([...Items,...newItems]);
         setPagesRemainig(hasNxtPage);
        } catch (e) {
            console.log(e);
            setError(e.toString());
        }finally{
         setIsLoading(false);
        }
    };

    function onScroll(){
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;

        // checks if user has scrolled till the bottom of the page
        if(scrollTop + clientHeight >= scrollHeight) setPage(page + 1);
    }

    function handleLangChange(event){
        setLang(event.target.value);
    }

    useEffect(() => {
        callRestApi();
    }, [page]);
    
    useEffect(() => {
        window.addEventListener('scroll',onScroll);
        return () => window.removeEventListener('scroll',onScroll);
    }, [Items]);



    const renderData = (item) => <div key={item.id}>
    <h1>{item.name}</h1>
    </div>;

        return ( 
          <> 
          {/* TODO: Refactor this out */}
          <label>
            Language
            <select style={{paddingBottom:"24px"}}  name="lang-dropdown" value={lang} onChange={handleLangChange}>
                {options.map((option)=> (<option value={option.value}>{option.label}</option>))}
            </select>
        </label>

            {error? <h2>Error happened{error}</h2> : 
             Items.map(val => renderData(val))}
           </>
        );
    };
   

export default TrendingRepo;
