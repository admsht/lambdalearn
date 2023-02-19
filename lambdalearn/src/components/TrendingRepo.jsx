import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Octokit } from '@octokit/core';

const TrendingRepo = () => {
    const [data, setdata] = useState([]);
    const [error, setError] = useState(null);

    const callRestApi = async () => {
        const octokit = new Octokit({
            auth: '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'
        });

        try {
            const response = await octokit.request('GET /search/repositories', { q: "learn&code in:readme+language:javascript", sort: "stars", order: "desc", per_page: 5 });
            if (response.status !== 200) throw Error("Not succesful request");
            setdata(response.data.items);
        } catch (e) {
            console.log(e);
            setError(e.toString());
        }
    };

    useLayoutEffect(() => {
        callRestApi();
    }, []);

    const renderData = (item) =>

        <div class="flex justify-items-center">
            <div className='mx-max-md'>
                <div key={item.id}>
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
            {error ? <h2>Error happened{error}</h2> :
                data.map(val => renderData(val))}

        </>

    );
};

export default TrendingRepo;
