import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import { App } from "../../App";
import { MonstersPage } from "../../pages/RpgPages/Monsters";
import { UsersPage } from "../../pages/UsersPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />,
      <Route path="/login" element={<App />} />,
      <Route path="/monsters" element={<MonstersPage />} />,
      <Route path="/usersPage" element={<UsersPage />} />,
    </>,
  ),
);
