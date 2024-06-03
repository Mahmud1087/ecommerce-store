import { ShoppingCart } from 'lucide-react';

const Cart = () => {
  return (
    <div className='relative'>
      <span className='absolute -right-3 -top-5 font-oswald font-medium h-6 w-6 bg-[#3c1323] text-white rounded-full flex items-center justify-center -z[1] text-sm'>
        0
      </span>
      <ShoppingCart className='relative' />
    </div>
  );
};
export default Cart;
