/* eslint-disable no-unused-vars */
import { createOrder } from "../../services/apiRestaurant";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import Button from "../../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCard, getTotalCartPrice } from "../cart/cartSlice";
import EmptyCart from "../cart/EmptyCart";
import store from '../../store'
import { useState } from "react";
import { formatCurrency } from "../../utils/helpers";
import { fetchAddress } from "../user/userSlice";
// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );


function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const {username,
    status:addressStatus,
     position,
     address,
     error:errorAddress,
  } = useSelector((state)=>state.user)
  const isLoadingAddress = addressStatus === 'loading';


  const formErrors = useActionData();
  const totalCartPrice = useSelector(getTotalCartPrice)
  const priorityPrice = withPriority ? totalCartPrice* 0.2 : 0 ;
    const totalPrice = totalCartPrice + priorityPrice

  const cart = useSelector(getCard);
  const dispatch = useDispatch()

  if(!cart.length) return <EmptyCart/>

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Lets go!</h2>
      {/*       <Form method="POST" action="/order/new">
       */}{" "}




      <Form method="POST">
        <div  className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input className="input grow" type="text" name="customer" defaultValue={username} required />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40 ">Phone number</label>
          <div className="grow">
            <input className="input w-full flex-wrap" type="tel" name="phone" required />
          {formErrors?.phone && (
            <p className="text-xs mt-2 bg-red-100 text-red-700 rounded-md p-2">{formErrors.phone}</p>
          )}
          </div>
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center relative">
          <label className="sm:basis-40">Address</label>
          <div className="grow ">
            <input disabled={isLoadingAddress} className="input w-full" type="text" name="address" defaultValue={address} required />
            {addressStatus === 'error' && (
            <p className="text-xs mt-2 bg-red-100 text-red-700 rounded-md p-2">{errorAddress}</p>
          )}
          </div>
          

         {!position.latitude && !position.longitude && <span className="absolute right-1 top-9 sm:right-[4px] sm:top-[3px] md:right-[5px] md:top-[5px] z-50 ">
         <Button disabled={isLoadingAddress} type='small'  onClick={(e)=>{
          e.preventDefault()
          dispatch(fetchAddress());
          }}
          >
             Get Position
             </Button>
         </span> }
        </div>

        <div className="flex items-center gap-5 mb-12">
          <input
          className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-1"
            type="checkbox"
            name="priority"
            id="priority"
             value={withPriority}
              onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)}></input>

          <input type="hidden"
           name="position" 
           value={
            position.longitude && position.latitude ? `${position.latitude},${position.longitude}` :''
            }
            />


          <Button disabled={isSubmitting || isLoadingAddress}  type="primary">
            {isSubmitting ? `Placing order` : `Order Now ${formatCurrency(totalPrice)}`}
          </Button >
        </div>
      </Form>
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  };
  console.log(order)

  const errors = {};

  if (!isValidPhone(order.phone))
    errors.phone =
      "Please give us yout true phone number maybe we might need it to contact you.";
  console.log(errors.phone);

  if (Object.keys(errors).length > 0) return errors;

  //if everything is ok create order and redirect
  const newOrder = await createOrder(order);

//Do not overse
store.dispatch(clearCart())

  return redirect(`/order/${newOrder.id}`);
  /* return null; */
}

export default CreateOrder;
