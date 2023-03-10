function Header() {
    return (
        <div className='sticky top-0 max-w-screen px-4 py-2 mx-auto'>
            <div>
                <header className="max-w-screen-xl mx-auto">
                    <nav className="px-4">
                        <div className="flow-root mx-auto max-w-screen-xl">
                            <a className="flex items-center pt-2 self-center text-gray-900 text-2xl font-bold">Lambda Learn</a>
                        </div>
                        <button class="float-right bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                            Button
                        </button>
                    </nav>
                </header>
            </div>
        </div>
    );
}

export default Header;