import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Landing from './pages/Landing/Landing';
import Authenticate from './pages/Authenticate/Authenticate';
import Activate from './pages/Activate/Activate';
import Home from './pages/Home/Home';
import Room from './pages/Room/NewRooms';
import Profile from './pages/Profile/Profile';
import { useSelector } from 'react-redux';
import { useLoadingWithRefresh } from './hooks/useLoadingWithRefresh';
import Loader from './components/shared/Loader/Loader';

function App() {

  // const { loading } = useLoadingWithRefresh();
  const loading = false;

  return loading ? (
    <Loader message="Loading..." />
  ) : (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <PublicRoute>
            <Landing />
          </PublicRoute>
        } />
        <Route path="/authenticate" element={
          <PublicRoute>
            <Authenticate />
          </PublicRoute>
        } />
        <Route path="/activate" element={
          <ActivationRoute>
            <Activate />
          </ActivationRoute>
        } />
        <Route path="/home" element={
          <UserRoute>
            <Home />
          </UserRoute>
        } />
        <Route path="/room/:id" element={
          <UserRoute>
            <Room />
          </UserRoute>
        } />
        <Route path="/room" element={
          // <UserRoute>
          <Room />
          // </UserRoute>
        } />
        <Route path="/profile" element={
          // <UserRoute>
          <Profile />
          // </UserRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}

const PublicRoute = ({ children }) => {
  const { isAuth } = useSelector((state) => state.auth);
  return isAuth ? <Navigate to="/home" replace /> : children;
};

const ActivationRoute = ({ children }) => {
  const { user, isAuth } = useSelector((state) => state.auth);
  if (user?.activated) {
    return <Navigate to="/home" replace />;
  } else if (isAuth) {
    return children;
  } else {
    return <Navigate to="/" replace />
  }
};

const UserRoute = ({ children }) => {
  const { user, isAuth } = useSelector((state) => state.auth);
  if (user?.activated) {
    return children;
  } else if (isAuth) {
    return <Navigate to="/activate" replace />;
  } else {
    return <Navigate to="/" replace />;
  }
};

export default App;

