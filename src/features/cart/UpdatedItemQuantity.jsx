/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux"
import Button from "../../UI/Button"
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice"

function UpdatedItemQuantity({pizzaId , CurrnetQuantity}) {
    const dispatch=useDispatch()

    return (
        <div className="flex items-center gap-2 md:gap-3 ">
            <Button type='round' onClick={()=>dispatch(decreaseItemQuantity(pizzaId))}>-</Button>

            <span className="font-medium text-sm ">{CurrnetQuantity}</span>

            <Button type='round' onClick={()=>dispatch(increaseItemQuantity(pizzaId))}>+</Button>
            
        </div>
    )
}

export default UpdatedItemQuantity
