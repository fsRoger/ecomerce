import { useState, useEffect } from 'react';
import { BsFillCreditCardFill } from 'react-icons/bs';
import FmtPrice from '../FmtPrice';
import { UseDispatch, useSelector } from 'react-redux';
import { StateProps, StoreProduct } from '../../../type';
import { loadStripe } from '@stripe/stripe-js';
import { useSession } from 'next-auth/react';

const CartPayment = () => {
  const { productData, userInfo } = useSelector((state: StateProps) => state.next);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    let amt = 0;
    productData.map((item: StoreProduct) => {
      amt += item.price * item.quantity;
      return;
    });
    setTotalAmount(amt);
  }, [productData]);

  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISH_KEY!
  );

  const { data: session } = useSession()

  const handleCheckout = async () => {
    const stripe = await stripePromise;

    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ items: productData, email: session?.user?.email }),
    });

    const checkoutSession = await response.json();
    const result: any = await stripe?.redirectToCheckout({
      sessionId: checkoutSession.id,
    });
    if (result.error) {
      alert(result?.error.message);
    }
  };

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex gap-2'>
        <span className='bg-green-600 rounded-full p-1 h-6 w-6 text-sm
         text-white flex items-center justify-center mt-1'>
          <BsFillCreditCardFill />
        </span>
        <p className='text-sm text-green-700'>
          Seu pedido se qualifica para o envio GRATUITO escolhendo esta opção em
          Confira. Veja detalhes.
        </p>
      </div>
      <p className='flex items-center justify-between px-2 font-semibold'>
        Total:{" "}
        <span className='font-bold text-xl'>
          <FmtPrice amount={totalAmount} />
        </span>
      </p>
      {userInfo ? (


        <div className='flex flex-col items-center'>
          <button onClick={handleCheckout} className='w-full h-10 text-sm font-semibold bg-amazon_blue 
        bg-opacity-50 text-white rounded-lg'>
            Prosseguir Comprando
          </button>
        </div>
      ) : (
        <div className='flex flex-col items-center'>
          <button className='w-full h-10 text-sm font-semibold bg-amazon_blue 
        bg-opacity-50 text-white rounded-lg'>
            Prosseguir Comprando
          </button>
          <p className='text-xs mt-1 text-red-500 font-semibold animate-pulse'>
            Favor fazer login
          </p>
        </div>
      )}

    </div>
  );
};

export default CartPayment;