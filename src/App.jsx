import './App.css';
import FormAuth from './form-auth/FormAuth';
import Landing from './landing/Landing';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './sidebar/sidebar';
import EnhancedTable from './clients/Clients';
import Dashboard from './dashboard/Dashboard';

function App() {
  return (
    <div>
      <Router>
        <Landing />
        <Routes>
          <Route path="/registration" element={<FormAuth /> } />
          <Route path="/home" element={<Landing /> } />
          <Route path="/" element={<Sidebar /> } />
      </Routes>
      </Router>
      
      
      {/* <FormAuth /> */}
      {/*<Router>
        <Sidebar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </Router>*/}
      {/*<section class="home-section">
        <div class="home-content">
          <EnhancedTable />
        </div>
  </section>*/}

    </div>
  );
}
/*<Route path="" element={ } />*/
export default App;
