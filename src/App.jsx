
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeDashboard from './pages/Dashboard/HomeDashboard';
import ShareMeals from './pages/dashboard/ShareMeals';
import GrabMeals from './pages/dashboard/GrabMeals';
import CharityCampign from './pages/dashboard/CharityCampaign';
import BlogArtikel from './pages/dashboard/BlogArtikel';
import ShareYourActicty from './pages/dashboard/ShareYourActivity';
import ProductDetailPage from './components/dashboard/grabmeals/DetailProduct';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomeDashboard />} />
          <Route path="/share-meals" element={<ShareMeals />} />
          <Route path="/grab-meals" element={<GrabMeals />} />
          <Route path="/charity-campaign" element={<CharityCampign />} />
          <Route path="/blog" element={<BlogArtikel />} />
          <Route path="/share-activity" element={<ShareYourActicty />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
