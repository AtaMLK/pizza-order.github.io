import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalCartPrice, getTotalCartQuantity } from './cartSlice';
import { formatCurrency } from '../../utils/helpers';

function CartOverview() {

const totalCartQuantity = useSelector(getTotalCartQuantity)

const totalCartPrice = useSelector(getTotalCartPrice)

if(!totalCartQuantity) return null

  return (
    <div className='bg-stone-800 uppercase  text-stone-200 flex item-center justify-between px-4 py-6 sm:px-6 text-sm md:text-base'>
      <p className='font-semibold text-stone-300 space-x-4 sm:space-x-6'>
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
