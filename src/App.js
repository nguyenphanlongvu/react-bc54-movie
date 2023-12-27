import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Page/HomePage/HomePage";
import LoginPage from "./Page/LoginPage/LoginPage";
import Header from "./Components/Header/Header";
import DetailPage from "./Page/DetailPage/DetailPage";
import HomeLayout from "./Layout/HomeLayout";
import Spinner from "./Components/Spinner/Spinner";
import RegisterPage from "./Page/Register/RegisterPage";
import BookingTicket from "./Page/BookingTicket/BookingTicket";

function App() {
  return (
    <div>
      <Spinner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/detail/:idPhim" element={<DetailPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/booking/:idVe" element={<BookingTicket />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
