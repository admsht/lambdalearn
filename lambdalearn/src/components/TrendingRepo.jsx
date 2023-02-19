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
        setPage(1);
        setItems([]);
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
        {/* Header */}
         <a href="https://google.com" className="flex items-center">
                                <span className="pt-2 self-center text-gray-900 text-2xl font-bold">Lambda Learn</span>
                            </a>
                            <div class="float-right justify-right font-semibold py-2 px-4 border border-blue-500 rounded">
                            <label>
                            Language
                           <select style={{paddingBottom:"24px"}}  name="lang-dropdown" value={lang} onChange={handleLangChange}>
                             {options.map((option)=> (<option value={option.value}>{option.label}</option>))}
                            </select>
                            </label>
                            </div>
        {/* <div className='sticky top-0 max-w-screen px-4 py-2 mx-auto'>
            <div>
                <header className="max-w-screen-xl mx-auto">
                    <nav className="px-4">
                        <div className="flow-root mx-auto max-w-screen-xl">
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        </div> */}

        {/*Hero*/}
        <section className="bg-gray-900 rounded-xl">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto">
                <div className="mr-auto">
                    <h1 className="max-w-2xl mb-4 text-6xl text-white font-extrabold tracking-tight leading-none">Stay up to date with the latest in <a className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">free coding resources.</a></h1>
                    <p className="max-w-2xl mb-6 font-light text-xl text-gray-300">Trending free-to-use resource GitHub repositories for learning software development, updated every week.</p>


                    <section class="bg-gray-900">
                        <div class="px-4 py-8 text-left">
                            <dl class="flex gap-8 mx-auto text-gray-100">
                                <div class="flex flex-col items-center justify-center">
                                    <a class="mb-2 text-3xl md:text-4xl font-extrabold">372 M</a>
                                    <a class="font-light text-gray-300">github repos</a>
                                </div>
                                <div class="flex flex-col items-center justify-center">
                                    <a class="mb-2 text-3xl md:text-4xl font-extrabold">201</a>
                                    <a class="font-light text-gray-300">relevant queries</a>
                                </div>
                                <div class="flex flex-col items-center justify-center">
                                    <a class="mb-2 text-3xl md:text-4xl font-extrabold">5</a>
                                    <a class="font-light text-gray-300">trending repos</a>
                                </div>
                            </dl>
                        </div>
                    </section>
                    <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-600 hover:bg-blue-800 duration-300">
                        Get started
                    </a>
                </div>
            </div>
        </section>

        {/* Cards list*/}
            {error ? <h2>Error happened{error}</h2> :
                Items.map(val => renderData(val))}

        </>

    );
};

export default TrendingRepo;
