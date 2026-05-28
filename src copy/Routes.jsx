import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import LandingPage from "./pages/landingPage/landingPage";
import Services from "./pages/Services/Services";
import ForgotPassword from "./pages/Forgot-Password/Forgot-Password";
import ErrorPage from "./components/Error-page/Error-Page";
import BookingForm from "./pages/BookingForm/BookingForm";
import Dashboard from "./pages/Dashboard/Dashboard";
import Order from "./pages/Order/Order";
import Customers from "./pages/Customers/Customers";
import PickupDelivery from "./pages/PickupDelivery/PickupDelivery";
import Reports from "./pages/Reports/Reports";
import Settings from "./pages/Settings/Settings";
import Createorder from "./pages/Order/Create order/Createorder";
import DetailPage from "./components/DetailPagesFolders/DetailPage";
import DashboardHome from "./pages/DashboardHome/DashboardHome";
import CustomerDetails from "./pages/CustomerDetails/CustomerDetails";
// import Payment from "./components/Payment/Payment";

const AppRoutes = () => (
  <Router>
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/services" element={<Services />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/booking-form" element={<BookingForm />} />
        {/* <Route path="payment" element={<Payment />} /> */}
      <Route path="/DetailPage" element={<DetailPage />} />
      {/* Dashboard Routes */}
      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<DashboardHome />} />

        <Route path="order" element={<Order />} />
        <Route path="customers" element={<Customers />} />
        <Route path="customers/:id" element={<CustomerDetails />} />
        <Route path="pickup-delivery" element={<PickupDelivery />} />
        <Route path="reports" element={<Reports />} />
        <Route path="settings" element={<Settings />} />
        <Route path="createorder" element={<Createorder />} />
        <Route path="orderdetails" element={<DetailPage />} />
      </Route>
      {/* </Route> */}

      {/* Error Page */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </Router>
);

export default AppRoutes;
