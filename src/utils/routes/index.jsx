import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import { App } from "../../App";
import { MonstersPage } from "../../pages/RpgPages/Monsters";
import { UsersPage } from "../../pages/UsersPage";
import { ProtectedRoute } from "./ProtectRoutes";
 import {Home} from "../../pages/HomePage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />,
      <Route path="/login" element={<App />} />,
      <Route path="/home" element={<Home />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/monsters" element={<MonstersPage />} />,
        <Route path="/usersPage" element={<UsersPage />} />,
      </Route>
    </>,
  ),
);
