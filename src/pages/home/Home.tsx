function Home() {
    return (
        <>
        <div className=" bg-cream">
            <div className="container mx-auto px-10">
                <div className="flex flex-row justify-between items-center">
                    <div className="space-x-45  p-10">
                        <h2 className="text-8xl text-bold  text-green-400">Fresh </h2>
                        <p className="text-3xl mt-2.5">A melhor escolha para você e sua família</p>
                        <div className="mt-12">
                            <button className="bg-green-200 my-3 py-2 px-4 rounded-full shadow-md text-medium transform hover:-translate-y-1 hover:scale-110 transition duration-300">
                                → Compre agora
                            </button>
                        </div>
                    </div>
                    <div className="flex-row-reverse">
                        <img
                            src='./src/assets/img-home.jpg'
                            alt='Imagem da página Home'
                            width={400}
                            height={100}
                            className="max-w-full h-auto" />
                    </div>
                </div>
            </div>
            <div className="bg-green-200 py-8 px-8 rounded-lg mt-8 ">
                <div className="container mx-auto flex flex-col md:flex-row justify-around items-center gap-8">
                    <div className="flex space-x-16 md:space-x-32 rounded-lg  p-6 ">
                        <h5 className="text-xl font-bold mb-2 text-cream text-center">
                            Entregamos em todo o território nacional
                            <img src="./src/assets/transporte-icon.svg"
                        alt="ícone transporte"
                        width={84} 
                        className="mx-auto"
                        />
                        </h5>
                        
                    </div>
                    <div className="rounded-lg  p-6">
                        <h5 className="text-xl font-bold mb-2 text-cream">
                            Produtos 100% orgânicos
                        </h5>
                        <img 
                        src="./src/assets/organico.svg"
                        alt='ícone orgânico'
                        width={84}
                        className="mx-auto"
                        />
                    </div>
                </div>
            </div>
        </div>


        </>
    )
}

export default Home;
