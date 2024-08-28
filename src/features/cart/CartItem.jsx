/* eslint-disable react/prop-types */
<<<<<<< HEAD

import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "./DeleteItem";
import UpdatedItemQuantity from "./UpdatedItemQuantity";
import { getCurrentQuantityById } from "./cartSlice";
=======
import Button from "../../UI/Button";
import { formatCurrency } from "../../utils/helpers";
>>>>>>> e728c5e1ea7a969074703b7d22afe771094b0a48

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  const CurrnetQuantity = useSelector(getCurrentQuantityById(pizzaId))

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
<<<<<<< HEAD
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>

        <UpdatedItemQuantity pizzaId={pizzaId} CurrnetQuantity={CurrnetQuantity}/>
        <DeleteItem pizzaId={pizzaId}/>
=======
      <div className="flex item-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <Button type="small">Delete</Button>
>>>>>>> e728c5e1ea7a969074703b7d22afe771094b0a48
      </div>
    </li>
  );
}

export default CartItem;
