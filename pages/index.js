import Link from 'next/link'

function Home({props}){
    
    function openPDF(){
        window.open('/TiagoMurilo.pdf', '_blank');
    }

    return(
        <div className="w-full h-full flex flex-col items-center py-8">
            <img className="rounded-full w-36 md:w-52" src="/profile.png"/>
            <h1 className="mt-8 text-5xl font-bold text-zinc-800">Tiago Murilo</h1>
            <h2 className="mt-5 text-3xl text-zinc-800">Software Engineer</h2>
            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 text-zinc-800">
                <a href="https://github.com/tiagomol1" target='_blank'>
                    <div className="border-solid border border-indigo-600 rounded-lg h-40 w-80 md:w-88 lg:w-96 p-4 border-zinc-200 hover:border-sky-600 hover:text-sky-600 cursor-pointer">
                        <h2 className="text-2xl font-bold p-2">Github</h2>
                        <p className="p-2 text-xl">Veja alguns dos meus projetos e estudos.</p>
                    </div>
                </a>
                <div onClick={openPDF} className="border-solid border border-indigo-600 rounded-lg h-40 w-80 md:w-88 lg:w-96 p-4 border-zinc-200 hover:border-sky-600 hover:text-sky-600 cursor-pointer">
                    <h2 className="text-2xl font-bold p-2">Currículo</h2>
                    <p className="p-2 text-xl">Conheça mais sobre minha trajetória profissional.</p>
                </div>
                <a href="https://www.linkedin.com/in/tiago-murilo-o-30876b14b/" target='_blank'>
                    <div className="border-solid border border-indigo-600 rounded-lg h-40 w-80 md:w-88 lg:w-96 p-4 border-zinc-200 hover:border-sky-600 hover:text-sky-600 cursor-pointer">
                        <h2 className="text-2xl font-bold p-2">LinkedIn</h2>
                        <p className="p-2 text-xl">Acompanhe minhas publicações nesta rede social.</p>
                    </div>
                </a>
                <a href="https://www.youtube.com/channel/UCBnwjpv8JCHIKPaz0I83Frw" target='_blank'>
                    <div className="border-solid border border-indigo-600 rounded-lg h-40 w-80 md:w-88 lg:w-96 p-4 border-zinc-200 hover:border-sky-600 hover:text-sky-600 cursor-pointer">
                        <h2 className="text-2xl font-bold p-2">Youtube</h2>
                        <p className="p-2 text-xl">Um projeto futuro!</p>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Home;