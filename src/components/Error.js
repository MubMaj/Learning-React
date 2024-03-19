import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Oops!!</h1>
      <h4>Something went wrong</h4>
      <h3>
        {err?.status}: {err?.statusText}
      </h3>
      <h3> {err?.error?.message} </h3>
      <h2>
        <a href="/">Home</a>
      </h2>
    </div>
  );
};

export default Error;
