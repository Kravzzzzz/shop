import React, { useContext } from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import { Context } from "../index";
import { SHOP_ROUTE } from "../utils/consts";
import Shop from "../pages/Shop";

const AppRouter = () => {
  const { user } = useContext(Context);

  console.log(user);
  return (
    <Routes>
      {user.isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} exact />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} exact />
      ))}
      <Route path={"*"} element={<Shop/>}/>
      {/* <Navigate to={SHOP_ROUTE} /> */}
    </Routes>
  );
};

export default AppRouter;
