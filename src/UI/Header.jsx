import { Link } from "react-router-dom"
import SearchOrder from "../features/order/searchOrder"
import UserName from "../features/user/userName"

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