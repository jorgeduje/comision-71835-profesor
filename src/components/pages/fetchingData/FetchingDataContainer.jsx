import React, { useEffect, useState } from "react";
import FetchingData from "./FetchingData";

import { apiInstance } from "../../../api/axiosInstance";

const FetchingDataContainer = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUsers = apiInstance.get("/users");

    getUsers
      .then((res) => setUsers(res.data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const getUser = apiInstance.get("/users/4");

    getUser.then((res) => setUser(res.data));
  }, []);

  const createUser = (newUser) => {
    apiInstance.post("/users", newUser);
  };

  const deleteUser = (id) => {
    apiInstance.delete(`/users/${id}`);
  };

  const childProps = {
    users,
    createUser,
    deleteUser,
  };

  const updateUserPut = (newInfo, id) => {
    apiInstance.put(`/users/${id}`, newInfo);
  };

  const updateUserPatch = (newInfo, id) => {
    apiInstance.patch(`/users/${id}`, newInfo);
  };

  return <FetchingData {...childProps} />;
};

export default FetchingDataContainer;
