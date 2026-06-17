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
      <Route path="/login" element={<App />} />,
      <Route element={<ProtectedRoute />}>
<<<<<<< HEAD
        <Route path="/monsters" element={<MonstersPage />} />,
        <Route path="/usersPage" element={<UsersPage />} />,
        <Route path="/masterPage" element={<MasterPage />} />,
=======
        <Route path="/items" element={<ItemsPage />} />
        <Route path="/usersPage" element={<UsersPage />} />
      </Route>
      <Route element={<ProtectedRoute allowedRoles={["mestre"]} />}>
        <Route path="/monsters" element={<MonstersPage />} />
>>>>>>> afc738bde2009eac7eb65f812f49295e5d599a2c
      </Route>
    </>,
  ),
);
