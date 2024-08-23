import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function Error() {
  
  const error = useRouteError();
  console.log(error);

  return (
    <div className="h-screen flex flex-col items-center justify-center font-semibold text-3xl px-4">
      <h1>Something went wrong 😢</h1>
      {/*  <p>{`Error ${error.status} Page ${error.statusText} `}</p> */}
      <p>{error.data || error.message}</p>

      <LinkButton to='-1'>&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
