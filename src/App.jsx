import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import '@coreui/coreui/dist/css/coreui.min.css'
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import PendingBookings from './components/cars/PendingBookings';
import AllBookings from './components/cars/AllBookings';
import CancelBookings from './components/cars/CancelBookings';
import { Toaster } from 'react-hot-toast';
import DashBoard from './components/DashBoard';

function App() {
  return (
    <div className="App" style={{ width: "100%", backgroundColor: "#fafdfb"}}>

      <Router>
        <div className="w-100 d-flex">
          <div style={{minHeight: '100vh'}} className="align-self-stretch">
            <Sidebar />
            <Toaster />
          </div>
          <div className="w-100">
            <Navbar />
            <div className="px-4">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<DashBoard />} />
                <Route path="/all-bookings" element={<AllBookings />} />
                <Route path="/pending-bookings" element={<PendingBookings />} />
                <Route path="/cancel-bookings" element={<CancelBookings />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
