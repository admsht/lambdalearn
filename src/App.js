function App() {
  return (
<section className="bg-white dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
      <h1 className="mb-2 text-2xl font-semibold leading-none text-gray-900">Repo name</h1>
      <p className="mb-4 leading-none text-gray-900">10/21/22</p>
      <h1>
          <a className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">This is an exmaple of one of the possible descirptions</a>
      </h1>
      <div className="flex items-center pt-4 space-x-4">  
          <button type="button" className="inline-flex items-center text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-2 py-1.5 text-center">
              View on Github
          </button> 
      </div>
  </div>
</section>
  );
}

export default App;
