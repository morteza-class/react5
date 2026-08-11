import { Route, Routes } from 'react-router';
import AboutUs from '../pages/AboutUs';
import Home from '../pages/home';
import Posts from '../pages/posts';
import Users from '../pages/Users';

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='/about-us' element={<AboutUs />} />
      <Route path='/users' element={<Users />} />
      <Route path='/posts' element={<Posts />} />
    </Routes>
  );
}

export default AppRoutes;