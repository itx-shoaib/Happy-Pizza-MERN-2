import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import SigninPage from './components/SigninPage';
import RegisterPage from './components/RegisterPage';
import MenuPage from './components/MenuPage';
import Profile from './components/Profile';
import Orders from './components/Orders';
import Addresses from './components/Addresses';
import ChangePassword from './components/ChangePassword';
import CartCheckout from './components/CartCheckout';
import PrivacPolicy from './components/PrivacPolicy';
import TermsOfUse from './components/TermsOfUse';
import TermsAndConditions from './components/TermsAndConditions';
import AllergyInformation from './components/AllergyInformation';
import NotFoundpage from './components/NotFoundpage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/login' element={<SigninPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/menu' element={<MenuPage />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/orders' element={<Orders />} />
      <Route path='/addresses' element={<Addresses />} />
      <Route path='/change-password' element={<ChangePassword />} />
      <Route path='/cart-checkout' element={<CartCheckout />} />
      <Route path='/privacy-policy/:ID' element={<PrivacPolicy />} />
      <Route path='/term-of-use' element={<TermsOfUse />} />
      <Route path='/terms-and-conditions' element={<TermsAndConditions />} />
      <Route path='/allergy-information' element={<AllergyInformation />} />
      <Route path="*" element={<NotFoundpage />}></Route>
    </Routes>
  );
}

export default App;
