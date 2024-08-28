import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
<<<<<<< HEAD
function Button({ children , disabled ,to,type,onClick }) {
   
    /* const className="inline-block bg-yellow-400 text-stone-800 py-3 px-4 font-semibold tracking-wide rounded-full focus:outline-none focus:ring uppercase hover:bg-yellow-300 transition-colors duration-300 focus:ring-offset-2 focus:ring-yellow-300 active:bg-yellow-100 disabled:cursor-not-allowed  sm:px6 sm:py-4 " */

    const base =  "inline-block bg-yellow-400 text-sm  text-stone-800  font-semibold tracking-wide rounded-full focus:outline-none focus:ring uppercase hover:bg-yellow-300 transition-colors duration-300 focus:ring-offset-2 focus:ring-yellow-300 active:bg-yellow-100 disabled:cursor-not-allowed "

    const styles={
        primary : base + " py-3 px-4 md:px-6 md:py-4",
        small : base + 'px-4 py-2 md:px-5 text-xs md:py-2.5 text-sm',
        round:base + 'px-2 py-1 md:px-3 text-xs md:py-2 text-sm',
=======
function Button({ children , disabled ,to,type }) {
   
    /* const className="inline-block bg-yellow-400 text-stone-800 py-3 px-4 font-semibold tracking-wide rounded-full focus:outline-none focus:ring uppercase hover:bg-yellow-300 transition-colors duration-300 focus:ring-offset-2 focus:ring-yellow-300 active:bg-yellow-100 disabled:cursor-not-allowed  sm:px6 sm:py-4 " */

    const base =  "inline-block bg-yellow-400 text-stone-800  font-semibold tracking-wide rounded-full focus:outline-none focus:ring uppercase hover:bg-yellow-300 transition-colors duration-300 focus:ring-offset-2 focus:ring-yellow-300 active:bg-yellow-100 disabled:cursor-not-allowed "

    const styles={
        primary : base + " py-3 px-4 md:px-6 md:py-4",
        small : base + 'px-4 py-2 md:px-5 md:py-2.5 text-sm',
>>>>>>> e728c5e1ea7a969074703b7d22afe771094b0a48
        secondary : "inline-block bg-transparent border-2 border-stone-300 text-stone-400  font-semibold tracking-wide rounded-full focus:bg-stone-300 focus:outline-none focus:ring uppercase hover:bg-stone-300 focus:text-stone-800 hove:text-stone-800 transition-colors duration-300 focus:ring-offset-2 focus:ring-stone-200 active:bg-stone-100 disabled:cursor-not-allowed py-2.5 px-4 md:px-6 md:py-3.5"
    }


    if(to)
        return( <Link className={styles[type]} to={to}>{children}</Link>)

<<<<<<< HEAD
    if(onClick)
        return( <Link className={styles[type]} to={to} onClick={onClick}>{children}</Link>)

=======
>>>>>>> e728c5e1ea7a969074703b7d22afe771094b0a48
    return (
    <button disabled={disabled}  className={styles[type]}>
            {children}
            </button>
    );
}

export default Button
