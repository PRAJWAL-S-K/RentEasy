import {BrowserRouter, Routes, Route, Router} from 'react-router-dom';
import PrivateRoute from "./components/PrivateRoute";
import CreateListing from './pages/CreateListing';
import UpdateListing from './pages/UpdateListing';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import Profile from "./pages/Profile";
import SignUp from './pages/SignUp';
import Listing from "./pages/Listing";


<Route element={<PrivateRoute />}>
  <Route path="/profile" element={<Profile />} />
</Route>;
import Header from './components/Header';
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/listing/:listingId" element={<Listing />} />

        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-listing" element={<CreateListing />} />
          <Route
            path="/update-listing/:listingId"
            element={<UpdateListing />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
