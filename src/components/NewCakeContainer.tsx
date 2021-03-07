import { useState } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const NewCakeContainer: React.FC = () => {
  const [order, setOrder] = useState(0);
  const { numOfCakes } = useTypedSelector((state) => state.cakes);
  const { buyCake } = useActions();

  const buyCakeHandler: React.MouseEventHandler<HTMLButtonElement> = (
    event
  ) => {
    if (numOfCakes > 0) {
      buyCake(order);
    }
  };


  return (
    <div>
      <div>
        <h2>Number of cakes: {numOfCakes} </h2>
        <input
          type="number"
          value={order}
          onChange={(e) => setOrder(parseInt(e.target.value))}
        />
        <button onClick={buyCakeHandler}>Buy {order} Cake</button>
      </div>
    </div>
  );
};

export default NewCakeContainer;
