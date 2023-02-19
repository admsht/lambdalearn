function Header() {
    return (
        <div className='bg-gray-900'>
            <div>
        <header className="max-w-screen-xl px-4 py-2 mx-auto lg:gap-8 xl:gap-0">
            <nav className="px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a href="https://google.com" className="flex items-center">
                        <span className="self-center text-white text-xl font-semibold whitespace-nowrap dark:text-white">LambdaLearn</span>
                    </a>
                </div>
            </nav>
        </header>
        </div>
        </div>
    );
}

export default Header;