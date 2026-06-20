import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import { App } from "../../App";
import { SignUp } from "../../pages/AuthenticationPages/SignUpPage";
import { Error404Page } from "../../pages/AuthenticationPages/Error";
import { Home } from "../../pages/HomePage";
import { ItemsPage } from "../../pages/RpgPages/ItemsPage";
import { MonstersPage } from "../../pages/RpgPages/Monsters";
import { UsersPage } from "../../pages/UsersPage";
import { TablePage } from "../../pages/RpgPages/TablePage";
import { ProtectedRoute } from "./ProtectRoutes";
import { CreateSheetPage } from "../../pages/RpgPages/CreateSheetPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/login" element={<App />} />
      <Route path="/error" element={<Error404Page />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/items" element={<ItemsPage />} />
        <Route path="/tablePage" element={<TablePage />} />
        <Route path="/monsters" element={<MonstersPage />} />
        <Route path="/usersPage" element={<UsersPage />} />
        <Route path="/createSheetPage" element={<CreateSheetPage />} />
      </Route>
    </>,
  ),
);
