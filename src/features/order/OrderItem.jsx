/* eslint-disable react/prop-types */
import { formatCurrency } from '../../utils/helpers';

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className='py-3 space-y-1'>
      <div className='flex  item-center justify-between text-sm ga[-4'>
        <p>
          <span className='font-bold'>{quantity}&times;</span> {name}
          
        </p>
        <p className='font-semibold'>{formatCurrency(totalPrice)}</p>
      </div>
      <p className='text-sm capitalize italic text-stone-500'>{isLoadingIngredients ? 'loading ... ': ingredients.join(', ')}</p>
    </li>
  );
}

export default OrderItem;
