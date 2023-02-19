function Hero() {
    return (
        <section className="bg-gray-900 rounded-b-3xl">
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
    );
}

export default Hero;