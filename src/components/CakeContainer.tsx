import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const CakeContainer: React.FC = () => {
  const { numOfCakes } = useTypedSelector((state) => state.cakes);
  const { buyCake } = useActions();

  const buyCakeHandler: React.MouseEventHandler<HTMLButtonElement> = (
    event
  ) => {
    if (numOfCakes > 0) {
      buyCake();
    }
  };

  return (
    <div>
      <h2>Number of cakes: {numOfCakes} </h2>
      <button onClick={buyCakeHandler}>Buy Cake</button>
    </div>
  );
};

export default CakeContainer;
