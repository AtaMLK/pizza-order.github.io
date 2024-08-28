import { Link } from "react-router-dom"
import SearchOrder from "../features/order/searchOrder"
<<<<<<< HEAD
import UserName from "../features/user/UserName"
=======
import UserName from "../features/user/userName"
>>>>>>> e728c5e1ea7a969074703b7d22afe771094b0a48

function Header(){
    return(
        <div className="bg-yellow-400 uppercase flex item-center justify-around py-3 px-4 border-b border-stone-200 sm:px-6">

            <Link to={'/'} className="tracking-widest font-semibold"> React Fast Pizza Co.</Link>

            <SearchOrder />

            <UserName/>
        </div>
    )
}

export default Header