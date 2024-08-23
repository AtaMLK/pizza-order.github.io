import {Link, useNavigate} from 'react-router-dom'
// eslint-disable-next-line react/prop-types
function LinkBtton({children,to}) {
    const navigate = useNavigate();
    const className = 'text-blue-400 text-base hover:text-blue-600  transition-all duration-300'
    
    if ( to==='-1' ) 
         return (
        <button onClick={() => navigate(-1)} className={className}>{children}</button>
    )

    return (
        <Link to={to} className={className}>{children}</Link>
    )
}

export default LinkBtton
