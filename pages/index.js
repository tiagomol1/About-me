function Home({props}){
    
    return(
        <div className="w-full h-full flex flex-col items-center py-8">
            <img className="rounded-full w-36 md:w-52" src="/profile.jpg"/>
            <h1 className="mt-8 text-5xl font-bold text-zinc-800">Tiago Murilo</h1>
            <h2 className="mt-5 text-2xl text-zinc-800">Software Engineer</h2>
            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 text-zinc-800">
                <div className="border-solid border-2 border-indigo-600 rounded h-36 w-80 md:w-88 lg:w-96 p-4 border-zinc-200 hover:border-blue-400 cursor-pointer">
                    <h2>Linkedin</h2>
                </div>
                <div className="border-solid border-2 border-indigo-600 rounded h-36 w-80 md:w-88 lg:w-96 p-4 border-zinc-200 hover:border-blue-400 cursor-pointer">
                    <h2>Linkedin</h2>
                </div>
                <div className="border-solid border-2 border-indigo-600 rounded h-36 w-80 md:w-88 lg:w-96 p-4 border-zinc-200 hover:border-blue-400 cursor-pointer">
                    <h2>Linkedin</h2>
                </div>
                <div className="border-solid border-2 border-indigo-600 rounded h-36 w-80 md:w-88 lg:w-96 p-4 border-zinc-200 hover:border-blue-400 cursor-pointer">
                    <h2>Linkedin</h2>
                </div>
            </div>
        </div>
    )
}

export default Home;