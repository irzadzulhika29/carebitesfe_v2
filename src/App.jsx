import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeDashboard from './pages/Dashboard/HomeDashboard';
import ShareMeals from './pages/dashboard/sharemeals/ShareMeals';
import GrabMeals from './pages/dashboard/grabmeals/GrabMeals';
import CharityCampaign from './pages/dashboard/charitycampaign/CharityCampaign';
import BlogArtikel from './pages/dashboard/blogarticle/BlogArtikel';
import ShareYourActivity from './pages/dashboard/shareactivity/ShareYourActivity';
import ProductDetailPage from './components/dashboard/grabmeals/DetailProduct';
import HomeLanding from './pages/landing-page/HomeLanding';
import LoginPage from './pages/landing-page/LoginPage';
import RegistrationPage from './pages/landing-page/RegistartionPage';
import GrandProduct from './pages/dashboard/grabmeals/GrandProduct';
import CharityCampaignDetail from './components/dashboard/charitycampaign/CharityCampaignDetail';
import CharityCampaignForm from './pages/dashboard/charitycampaign/CharityCampaignForm';
import ArticleForm from './pages/dashboard/blogarticle/ArticleForm';
import Profile from './pages/dashboard/Profile';
import ArticleDetail from './pages/dashboard/blogarticle/ArticleDetail';
import PaymentMethod from './pages/dashboard/PaymentMethod';
import CharityTransaction from './pages/dashboard/charitycampaign/CharityTransaction';
import CartMeals from './pages/dashboard/cartmeals/CartMeals';
import ShareMealsForm from './pages/dashboard/sharemeals/ShareMealsForm'; //
import EditProfil from './pages/dashboard/EditProfil';
import UpdateShareMeals from './components/dashboard/sharemeals/UpdateShareMeals';


import AdminDashboard from './pages/dashboard/admin/AdminDashboard';
import ShareMealsVerif from './pages/dashboard/admin/ShareMealsVerif';
import CampaignVerif from './pages/dashboard/admin/charitycampaign/CampaignVerif';
import CampaignDetailVerif from './pages/dashboard/admin/charitycampaign/CampaignDetailVerif';
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
          <Route path="/cart" element={<CartMeals />} />
          <Route path="/payment/:id" element={<GrandProduct />} />
          <Route path="/article/:id" element={<ArticleDetail />} />
          <Route path="/charity-campaign/:id" element={<CharityCampaignDetail />} />
          <Route path="/campaign-form" element={<CharityCampaignForm />} />
          <Route path="/article-form" element={<ArticleForm />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/payment-product/:id" element={<PaymentMethod />} />
          <Route path="/payment-charity/:id" element={<PaymentMethod />} />
          <Route path="/charity-transaction/:id" element={<CharityTransaction />} />
          <Route path="/share-meals/form" element={<ShareMealsForm />} />
          <Route path="/profil/edit-profil" element={<EditProfil />} />
          <Route path="/share-meals/update/:id" element={<UpdateShareMeals />} />


          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/share-meals-verif" element={<ShareMealsVerif />} />
          <Route path="/campaign-verif" element={<CampaignVerif />} />
          <Route path="/campaign-detail-verif/:id" element={<CampaignDetailVerif />} />
        </Routes>
      </Router>

    </div>
  );
};

export default App;
