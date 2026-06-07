import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import { App } from "../../App";
import { MonstersPage } from "../../pages/RpgPages/Monsters";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />,
      <Route path="/monsters" element={<MonstersPage />} />,
    </>,
  ),
);
