import { userInfo } from 'os'
import { LuMenu } from "react-icons/lu"
import { useDispatch, useSelector } from 'react-redux'
import { StateProps } from '../../../type'
import { removeUser } from '@/store/next.Slice'
import { signOut } from 'next-auth/react'

const BottomHeader = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector(
    (state: StateProps) => state.next
  );

  const handleSignOut = () => {
    signOut();
    dispatch(removeUser());
  }
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
      {userInfo && (
        <button onClick={handleSignOut} className='hidden md:inline-flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300 '>
          sair
        </button>
      )}

    </div>
  )
}

export default BottomHeader