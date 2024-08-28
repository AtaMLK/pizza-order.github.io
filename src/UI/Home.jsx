<<<<<<< HEAD
import CreateUser from "../features/user/CreateUser"
import Button from "./Button";
import { useSelector } from "react-redux";

  function Home() {
const username = useSelector((state)=>state.user.username)

=======
  import CreateUser from "../features/user/CreateUser"

  function Home() {
>>>>>>> e728c5e1ea7a969074703b7d22afe771094b0a48
    return (
      <div className="text-center my-10 px-4 sm:my-16">
        <h1 className="mb-8 text-center font-semibold text-xl mt-10 md:text-3xl">
          The best pizza.
          <br />
          <span className="text-yellow-400">Straight out of the oven, straight to you.</span>
        </h1>

<<<<<<< HEAD
       {username === "" ?  <CreateUser /> : <Button type='primary' to='/menu'>Countinue ordering , {username} </Button>}
=======
        <CreateUser />
>>>>>>> e728c5e1ea7a969074703b7d22afe771094b0a48
      </div>
    );
  }

  export default Home;
