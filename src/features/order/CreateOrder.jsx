import { createOrder } from "../../services/apiRestaurant";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import Button from "../../UI/Button";
<<<<<<< HEAD
import { useSelector } from "react-redux";
import { clearCart, getCart, getTotalCartPrice } from "../cart/cartSlice";
import EmptyCart from "../cart/EmptyCart";
import store from '../../store'
import { useState } from "react";
import { formatCurrency } from "../../utils/helpers";
=======
>>>>>>> e728c5e1ea7a969074703b7d22afe771094b0a48

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

<<<<<<< HEAD


function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const username = useSelector((state)=>state.user.username)
  const formErrors = useActionData();

  const cart = useSelector(getCart);

  const totalCartPrice = useSelector(getTotalCartPrice)
  const priorityPrice = withPriority && totalCartPrice * 0.2
  const totalPrice = priorityPrice + totalCartPrice
  console.log(totalCartPrice);
  console.log(priorityPrice);
  console.log(totalPrice);
  


  if(!cart.length) return <EmptyCart/>

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Lets go!</h2>
            {/* <Form method="POST" action="/order/new"> */}
     
      <Form method="POST">
        <div  className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input className="input grow" type="text" name="customer" defaultValue={username} required />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40 ">Phone number</label>
          <div className="grow">
            <input className="input w-full flex-wrap" type="tel" name="phone" required />
          {formErrors?.phone && <p className="text-xs mt-2 bg-red-100 text-red-700 rounded-md p-2">{formErrors.phone}</p>}
=======
const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const formErrors = useActionData();

  /* const [withPriority, setWithPriority] = useState(false); */
  const cart = fakeCart;

  return (
    <div>
      <h2>Ready to order? Lets go!</h2>
      {/*       <Form method="POST" action="/order/new">
       */}{" "}
      <Form method="POST">
        <div >
          <label>First Name</label>
          <input className="input" type="text" name="customer" required />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input className="input" type="tel" name="phone" required />
>>>>>>> e728c5e1ea7a969074703b7d22afe771094b0a48
          </div>
          {formErrors?.phone && <p>{formErrors.phone}</p>}
        </div>

<<<<<<< HEAD
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow ">
            <input className="input w-full" type="text" name="address" required />
=======
        <div>
          <label>Address</label>
          <div>
            <input className="input" type="text" name="address" required />
>>>>>>> e728c5e1ea7a969074703b7d22afe771094b0a48
          </div>
        </div>

        <div className="flex items-center gap-5 mb-12">
          <input
          className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-1"
            type="checkbox"
            name="priority"
            id="priority"
<<<<<<< HEAD
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
=======
            /*  value={withPriority}
              onChange={(e) => setWithPriority(e.target.checked)} */
>>>>>>> e728c5e1ea7a969074703b7d22afe771094b0a48
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)}></input>
          <Button disabled={isSubmitting}  type="primary">
<<<<<<< HEAD
            {isSubmitting ? `Placing order ... `  : `Order Now ${formatCurrency(totalPrice)}` }
=======
            {isSubmitting ? `Placing order` : `Order Now`}
>>>>>>> e728c5e1ea7a969074703b7d22afe771094b0a48
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
<<<<<<< HEAD
    priority: data.priority === "true",
=======
    priority: data.priority === "on",
>>>>>>> e728c5e1ea7a969074703b7d22afe771094b0a48
  };

  const errors = {};

  if (!isValidPhone(order.phone))
    errors.phone =
      "Please give us yout true phone number maybe we might need it to contact you.";
<<<<<<< HEAD
  /* console.log(errors.phone); */
=======
  console.log(errors.phone);
>>>>>>> e728c5e1ea7a969074703b7d22afe771094b0a48

  if (Object.keys(errors).length > 0) return errors;

  //if everything is ok create order and redirect
  const newOrder = await createOrder(order);

<<<<<<< HEAD
  store.dispatch(clearCart())

=======
>>>>>>> e728c5e1ea7a969074703b7d22afe771094b0a48
  return redirect(`/order/${newOrder.id}`);
  /* return null */
}

export default CreateOrder;
