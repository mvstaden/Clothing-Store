import { BrowserRouter, Route, Routes } from "react-router-dom";

import UserLayout from "./components/Layout/UserLayout";
import {
  CollectionPage,
  HomePage,
  LoginPage,
  ProfilePage,
  RegisterPage,
} from "./pages";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="collections/:collection" element={<CollectionPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
