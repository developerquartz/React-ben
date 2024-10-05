import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { authRoutes, routes } from "./pages/index";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/style.css";

const App = () => {
  const user = localStorage && JSON.parse(localStorage.getItem("userData"));
  console.log(user, "usernnnnn");
  return (
    <Routes>
      {user !== null ? (
        <>
          <Route
            path="*"
            element={<Navigate replace to="/client/documents" />}
          />
        </>
      ) : (
        <>
          {authRoutes.map((data, index) => (
            <Route
              onUpdate={() => window.scrollTo(0, 0)}
              exact={true}
              path={data.path}
              element={data.component}
              key={index}
            />
          ))}
        </>
      )}

      {user !== null &&
        routes.map((data, index) => (
          <Route path={data.path} element={data.component} key={index} />
        ))}

      {user == null && (
        <Route path="*" element={<Navigate replace to="/client/login" />} />
      )}
    </Routes>
  );
};

export default App;
