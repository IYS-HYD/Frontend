import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import DashboardPersonal from './components/DashboardPersonal';
import PrivateRoute from './components/PrivateRoute';
import WeeklySadhanaReport from './components/WeeklySadhanaReport';
import SadhanaCardForm from './components/SadhanaCardForm';
const App = () => {
  const Layout = ({ children }) => {
    return (
      <>
        <Navbar />
        <div className="content">{children}</div>
      </>
    );
  };

  const DashboardLayout = ({ children }) => {
    return (
      <>
        <DashboardPersonal />
        <div className='content'>{ children }</div>
      </>
    )
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Layout> <Dashboard /> </Layout> } />
        <Route path="/signup" element={  <SignUp /> } />
        <Route path="/login" element={  <SignIn /> } />
        <Route path="/dashboardpersonal" element={ <PrivateRoute> <DashboardPersonal /> </PrivateRoute> } />
        <Route path="/weeklyreport" element={ <PrivateRoute> <DashboardLayout> <WeeklySadhanaReport /> </DashboardLayout> </PrivateRoute> } />
      </Routes>
    </Router>
  );
};

export default App;
