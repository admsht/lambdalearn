import React, { useState, useEffect, useLayoutEffect } from 'react';
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

   
    const renderData = (item) => 
    <div key={item.id} className='flex justify-center items-center'>
            <div className='mx-max-md'>
                <div>
                    <div className="mt-4 px-4 py-2 max-w-md border-2 border-spacing-2 rounded-xl border-solid shadow-md transition:delay-900 ease-in-out hover:drop-shadow-2xl">
                        <h1 className="text-3xl font-[600] text-gray-800">{item.name}</h1>
                        <p className="pb-4 leading-none text-gray-900">{item.date}</p>
                        <div key={item.description}>
                            <h1>{item.description}</h1>
                        </div>
                        <div className="flex items-center pt-4 space-x-4">
                            <div key={item.html_urll}>
                                <button type="button" className="px-2 py-1 transition ease-in-out delay-150 rounded-lg text-white bg-blue-500 hover:bg-blue-800 duration-300">
                                    <a href={item.html_url}>View on Github</a>
                                </button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
        </div>


    return (
        <>
        {/* TODO: Refactor this out */}
        <label>
            Language
            <select style={{paddingBottom:"24px"}}  name="lang-dropdown" value={lang} onChange={handleLangChange}>
                {options.map((option)=> (<option value={option.value}>{option.label}</option>))}
            </select>
        </label>
            {error ? <h2>Error happened{error}</h2> :
                data.map(val => renderData(val))}

        </>

    );
};

export default TrendingRepo;
