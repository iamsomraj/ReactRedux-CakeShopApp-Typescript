/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const UserListContainer: React.FC = () => {
  const { loading, data, error } = useTypedSelector((state) => state.users);
  const { fetchUser } = useActions();

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <button onClick={() => fetchUser()}>Fetch</button>
      {loading && <div>Loading....</div>}
      {error && <div>{error}</div>}
      {!loading &&
        !error &&
        data.map((user) => {
          return <p key={user}>{user}</p>;
        })}
    </div>
  );
};

export default UserListContainer;
