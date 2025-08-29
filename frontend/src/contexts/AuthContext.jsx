import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import httpStatus from "http-status";
import server from "../environment";

export const AuthContext = createContext({});

const client = axios.create({
  baseURL: `${server}/api/v1/users`,
  withCredentials: true,
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [allUsers, setAllUsers] = useState([]);
  const [userData, setUserData] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useNavigate();

useEffect(() => {
  const token = localStorage.getItem("token");
  if (token) {
    setIsAuthenticated(true);
    client
      .get("/me", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => setUserData(res.data.user))
      .catch(() => {
        setIsAuthenticated(false);
        setUserData(null);
      });
  }
}, []);

  const handleRegister = async (name, username, email, location, password) => {
    try {
      let request = await client.post("/register", {
        name,
        username,
        email,
        location,
        password,
        role:"user"
      });
      if (request.status === httpStatus.CREATED) {
        return request.data.message;
      }
    } catch (err) {
      throw err;
    }
  };

  const handleLogin = async (username, password) => {
    try {
      let request = await client.post("/login",
         { username, password },
          { withCredentials: true } 
        );

      if (request.status === httpStatus.OK) {
        localStorage.setItem("token", request.data.token);
        setIsAuthenticated(true);
        // console.log("userData after login:", request.data.user);
        setUserData(request.data.user || null);
        if (request.data.user?.username === "admin") {
          router("/admin_dash");
        } else {
          console.log(request.data.user.password);
          router("/"); 
        }      
      }
    } catch (err) {
      throw err;
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setUserData(null);
    router("/login");
  };

  const fetchAllUsers = async () => {
  try {
    const res = await client.get("/all");
    console.log("Fetched User",res.data.users);
    setAllUsers(res.data.users || []);
  } catch (err) {
    console.error("Error fetching users:", err);
  }
};

  const data = {
    userData,
    isAuthenticated,
    setUserData,
    handleRegister,
    handleLogin,
    handleLogout,
    fetchAllUsers,
    allUsers,
  };

  return (
    <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
  );
};

