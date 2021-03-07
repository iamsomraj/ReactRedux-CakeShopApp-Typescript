import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const IceCreamContainer: React.FC = () => {
  const { numOfIceCream } = useTypedSelector((state) => state.iceCreams);
  const { buyIceCream } = useActions();

  const buyIceCreamHandler: React.MouseEventHandler<HTMLButtonElement> = (
    event
  ) => {
    if (numOfIceCream > 0) {
      buyIceCream();
    }
  };

  return (
    <div>
      <h2>Number of icecreams: {numOfIceCream} </h2>
      <button onClick={buyIceCreamHandler}>Buy IceCream</button>
    </div>
  );
};

export default IceCreamContainer;
