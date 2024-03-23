import { useState } from "react";

const UserComponent = ({ name }) => {
  const [count, setCount] = useState(0);
  
  return (
    <div className="userCard">
      <h2>{name}</h2>
      <h3>Location: Allahabad</h3>
      <h4>Contact: mub.maj@gmail.com</h4>
      <h4>Count: {count}</h4>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        reset
      </button>
      <h6>Its a Functional Component</h6>
    </div>
  );
};

export default UserComponent;
