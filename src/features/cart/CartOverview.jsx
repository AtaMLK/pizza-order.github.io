import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalCartPrice, getTotalCartQuantity } from './cartSlice';
import { formatCurrency } from '../../utils/helpers';

function CartOverview() {

const totalCartQuantity = useSelector(getTotalCartQuantity)

const totalCartPrice = useSelector(getTotalCartPrice)

if(!totalCartQuantity) return null

  return (
<<<<<<< HEAD
    <div className='bg-stone-800 uppercase  text-stone-200 flex item-center justify-between px-4 py-6 sm:px-6 text-sm md:text-base'>
      <p className='font-semibold text-stone-300 space-x-4 sm:space-x-6'>
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
=======
    <div className='bg-stone-800 uppercase  text-stone-200 flex item-center justify-between px-4 py-3 sm:px-6 text-sm md:text-base'>
      <p className='font-semibold text-stone-300 space-x-4 sm:space-x-6'>
        <span>23 pizzas</span>
        <span>$23.45</span>
>>>>>>> e728c5e1ea7a969074703b7d22afe771094b0a48
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
