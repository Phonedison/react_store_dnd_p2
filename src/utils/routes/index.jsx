import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import { App } from "../../App";
import { Home } from "../../pages/HomePage";
import { MonstersPage } from "../../pages/RpgPages/Monsters";
import { UsersPage } from "../../pages/UsersPage";
import { ProtectedRoute } from "./ProtectRoutes";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<App />} />,
      <Route element={<ProtectedRoute />}>
        <Route path="/monsters" element={<MonstersPage />} />,
        <Route path="/usersPage" element={<UsersPage />} />,
      </Route>
    </>,
  ),
);
