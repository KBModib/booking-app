import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import AboutUs from './AboutUs';
import AdminLogin from './AdminLogin';
import AdminBookingLog from './AdminBookingLog';
import Amenities from './Amenities';
import BookingHistory from './BookingHistory';
import BookingPage from './BookingPage';
import BookingConfirmation from './BookingConfirmation';
import Contact from './Contact';
import GuestLogin from './GuestLogin';
import GuestSignUp from './GuestSignUp';
import Rooms from './Rooms';
import PageFooter from './components/PageFooter';


function App() {
 
  return (
    <>
    <Router>
      <Routes className="App">
        <Route exact path="/" component={LandingPage} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/adminlogin" component={AdminLogin} />
        <Route path="/adminbookinglog" component={AdminBookingLog} />
        <Route path="/amenities" component={Amenities} />
        <Route path="/bookinghistory" component={BookingHistory} />
        <Route path="/bookingpage" component={BookingPage} />
        <Route path="/bookingconfirmation" component={BookingConfirmation} />
        <Route path="/contact" component={Contact} />
        <Route path="/guestlogin" component={GuestLogin} />
        <Route path="/guestsignup" component={GuestSignUp} />
        <Route path="/rooms" component={Rooms} />
      </Routes>
      <PageFooter />
    </Router>
    </>
  );
}

export default App;
