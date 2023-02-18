function Hero() {
    return (
        <section class="bg-gray-900 h-screen">
            <div class="grid max-w-screen-xl px-4 py-8 mx-auto">
                <div class="mr-auto place-self-center lg:col-span-7">
                    <h1 class="max-w-2xl mb-4 text-4xl text-white font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">Stay up to date with the latest in free coding resources.</h1>
                    <p class="max-w-2xl mb-6 font-light text-gray-300 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Trending free-to-use Github Repos for learning software engineering and computer science.</p>
                    <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                        Get started
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Hero;