import { useEffect, useState } from "react";
import axios from "axios";

function HttpData() {
  const [users, setUsers] = useState([]);

  //   const setUserData = async () => {
  //     const response = await axios.get(
  //       "https://jsonplaceholder.typicode.com/users"
  //     );
  //     setUsers(response?.data);
  //   };

  const getUserData = () => {
    return axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.data);
  };
  useEffect(() => {
    // axios
    //   .get("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => setUsers(response?.data));
    // setUserData();
    getUserData().then((users) => setUsers(users));
  }, []);

  return (
    <>
      {(users || []).map((item) => {
        return <h1>{item.username}</h1>;
      })}
    </>
  );
}
export default HttpData;
