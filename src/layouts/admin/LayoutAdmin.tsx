import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";
import Admin from "src/pages/Admin";

const LayoutAdmin = () => {
  // const navigate = useNavigate();
  // const token = localStorage.getItem("token");
  // useEffect(() => {
  //   if (!token) {
  //     navigate("/login");
  //     return;
  //   }
  // }, []);
  return (
    <>
    <Header />
      

    </>
  );
};

export default LayoutAdmin;