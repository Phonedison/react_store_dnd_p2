import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import { App } from "../../App";
import { Home } from "../../pages/HomePage";
import { ItemsPage } from "../../pages/ItemsPage";
import { MonstersPage } from "../../pages/RpgPages/Monsters";
import { UsersPage } from "../../pages/UsersPage";
import { MasterPage } from "../../pages/MasterPage";
import { ProtectedRoute } from "./ProtectRoutes";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<App />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/items" element={<ItemsPage />} />
        <Route path="/usersPage" element={<UsersPage />} />
        <Route path="/masterPage" element={<MasterPage />} />
        <Route path="/monsters" element={<MonstersPage />} />
      </Route>
    </>,
  ),
);
