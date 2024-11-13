import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeDashboard from './pages/Dashboard/HomeDashboard';
import ShareMeals from './pages/dashboard/ShareMeals';
import GrabMeals from './pages/dashboard/GrabMeals';
import CharityCampaign from './pages/dashboard/CharityCampaign'; // Correct spelling
import BlogArtikel from './pages/dashboard/BlogArtikel';
import ShareYourActivity from './pages/dashboard/ShareYourActivity';
import ProductDetailPage from './components/dashboard/grabmeals/DetailProduct';
import HomeLanding from './pages/landing-page/HomeLanding';
import LoginPage from './pages/landing-page/LoginPage';
import RegistrationPage from './pages/landing-page/RegistartionPage';
import Payment from './pages/dashboard/grabmeals/Payment';
import CharityCampaignDetail from './components/dashboard/charitycampaign/CharityCampaignDetail';
import CharityCampaignForm from './pages/dashboard/charitycampaign/CharityCampaignForm';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomeLanding />} />
          <Route path="/home" element={<HomeDashboard />} />
          <Route path="/share-meals" element={<ShareMeals />} />
          <Route path="/grab-meals" element={<GrabMeals />} />
          <Route path="/charity-campaign" element={<CharityCampaign />} />
          <Route path="/blog" element={<BlogArtikel />} />
          <Route path="/share-activity" element={<ShareYourActivity />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/regist" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/payment/:id" element={<Payment />} />
          <Route path="/charity-campaign/:id" element={<CharityCampaignDetail />} />
          <Route path="/campaign-form" element={<CharityCampaignForm />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
