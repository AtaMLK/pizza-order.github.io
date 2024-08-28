/* eslint-disable react/prop-types */

<<<<<<< HEAD
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../UI/Button';
import { formatCurrency } from '../../utils/helpers';
import { addItem, getCurrentQuantityById } from '../cart/cartSlice';
import DeleteItem from '../cart/DeleteItem';
import UpdatedItemQuantity from '../cart/UpdatedItemQuantity'
=======
import Button from '../../UI/Button';
import { formatCurrency } from '../../utils/helpers';
>>>>>>> e728c5e1ea7a969074703b7d22afe771094b0a48

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch=useDispatch()

  const CurrnetQuantity = useSelector(getCurrentQuantityById(id))

  const isInCart = CurrnetQuantity > 0

  /* console.log(CurrnetQuantity) */

  function handleAddToCart(){
    const newItem = {
        pizzaId : id,
        name,
        quantity:1,
        unitPrice,
        totalPrice : unitPrice * 1,  
    
    }
dispatch(addItem(newItem))
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ``}`} 
      />
      <div className="flex  flex-col grow">
        <p className="font-medium">{name}</p>
        <p className="text-sm italic text-stone-500 capitalize">
          {ingredients.join(', ')}
        </p>
        <div className="mt-auto flex items-center justify-between">
<<<<<<< HEAD

=======
>>>>>>> e728c5e1ea7a969074703b7d22afe771094b0a48
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm uppercase font-medium text-stone-500">
              Sold out
            </p>
          )}

<<<<<<< HEAD

{ isInCart && <div className='flex items-center gap-3 gap-8'>
          <UpdatedItemQuantity pizzaId={id} CurrnetQuantity={CurrnetQuantity}/>
          <DeleteItem pizzaId={id}/> 
          </div>}



          { !soldOut && !isInCart && <Button type="small" onClick={handleAddToCart} >Add to cart</Button>}
=======
          <Button type="small">Add to cart</Button>
>>>>>>> e728c5e1ea7a969074703b7d22afe771094b0a48
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
