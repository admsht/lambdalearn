function Header() {
    return (
        <div className='bg-gray-900 max-w-screen px-4 py-2 mx-auto'>
            <div>
                <header className="max-w-screen-xl py-4 mx-auto">
                    <nav className="px-4">
                        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                            <a href="https://google.com" className="flex items-center">
                                <span className="self-center text-white text-2xl font-semibold">Lambda Learn</span>
                            </a>
                        </div>
                    </nav>
                </header>
            </div>
        </div>
    );
}

export default Header;