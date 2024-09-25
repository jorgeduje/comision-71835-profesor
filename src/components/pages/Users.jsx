import axios from "axios";
import React, { useEffect, useState } from "react";
import { useFetch } from "../../utils/hooks/useFetch";

const Users = () => {
  const {
    data: users,
    error,
    isLoading,
  } = useFetch("https://jsonplaceholder.org/users");
  console.log(users);
  return <div>Users</div>;
};

export default Users;
