import CreateUser from "../features/user/CreateUser"
import Button from "./Button";
import { useSelector } from "react-redux";

  function Home() {
const username = useSelector((state)=>state.user.username)

    return (
      <div className="text-center my-10 px-4 sm:my-16">
        <h1 className="mb-8 text-center font-semibold text-xl mt-10 md:text-3xl">
          The best pizza.
          <br />
          <span className="text-yellow-400">Straight out of the oven, straight to you.</span>
        </h1>

       {username === "" ?  <CreateUser /> : <Button type='primary' to='/menu'>Countinue ordering , {username} </Button>}
      </div>
    );
  }

  export default Home;
