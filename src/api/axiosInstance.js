import axios from "axios";

export const apiInstance = axios.create({
  baseURL: "https://jsonplaceholder.org",
});

// axios.get("https://jsonplaceholder.org/users/1");
// axios.get("https://jsonplaceholder.org/users");
// axios.post("https://jsonplaceholder.org/users");

// apiInstance.get("/users");
// apiInstance.get("/users/2");
// apiInstance.post("/users");
// apiInstance.put("/users/1");
// apiInstance.put("/comments");
// apiInstance.put("/comments");
// apiInstance.put("/comments");
