import { BrowserRouter, Routes, Route } from "react-router-dom";
// Layouts
import DefaultLayout from "./layouts/defaultLayout";
import AuthLayout from "./layouts/AuthLayout";
import DashboardLayout from "./layouts/DashboardLayout";
// Pages
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Menu from "./pages/Menu";
import Pizza from "./pages/Pizza";
import PageNotFound from "./pages/PageNotFound";
// Admin Pages
import Login from "./pages/Admin/Login";
import Index from "./pages/Admin/Index";
// Contexts
import { AlertProvider } from "./contexts/AlertContext";

export default function App() {
  return (
    <AlertProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/menu/:id" element={<Pizza />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contacts" element={<ContactUs />} />
          </Route>

          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
          </Route>

          <Route path="/admin" element={<DashboardLayout />}>
            <Route index element={<Index />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </AlertProvider>
  );
}
