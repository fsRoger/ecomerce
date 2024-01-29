import { LuMenu } from "react-icons/lu"

const BottomHeader = () => {
  return (
    <div className='w-full h-10 bg-amazon_light text-sm text-white px-4 flex items-center'>
      <p className='flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300'>
        <LuMenu className='text-xl' />Todos
      </p>
      <p className='hidden md:inline-flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300 '>
        Venda na Amazon
      </p>
      <p className='hidden md:inline-flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300 '>
        Mais Vendidos
      </p>
      <p className='hidden md:inline-flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300 '>
        Ofertas do Dia
      </p>
      <p className='hidden md:inline-flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300 '>
        Prime
      </p>
      <p className='hidden md:inline-flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300 '>
        Novidades na Amazon
      </p>
      <p className='hidden md:inline-flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300 '>
        Música
      </p>
      <p className='hidden md:inline-flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300 '>
        Livros
      </p>
      <p className='hidden md:inline-flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300 '>
        eBooks Kindle
      </p>
      <p className='hidden md:inline-flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300 '>
        Eletrônicos
      </p>
      <p className='hidden md:inline-flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300 '>
        Ideias de Presente
      </p>
      <p className='hidden md:inline-flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300 '>
        Computadores
      </p>
      <p className='hidden md:inline-flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300 '>
        Games
      </p>
      <p className='hidden md:inline-flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300 '>
        Casa
      </p>
    </div>
  )
}

export default BottomHeader