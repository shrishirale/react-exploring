import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./User/userActions";

const Mainview = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  console.log("users", users);
  return users?.map((user) => <p1>{user.name}</p1>);
};
export default Mainview;
