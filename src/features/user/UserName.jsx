<<<<<<< HEAD
import { useSelector } from "react-redux";

function Username() {
    const username = useSelector((state) => state.user.username);

    if(!username) return null
    
    return (
        <div className="text-sm font-semibold hidden sm:block">
            {username}
        </div>
    );
}


export default Username;
=======
function userName() {
    return (
        <div className="text-sm font-semibold hidden sm:block">
            Ata-MLK
        </div>
    )
}

export default userName
>>>>>>> e728c5e1ea7a969074703b7d22afe771094b0a48
