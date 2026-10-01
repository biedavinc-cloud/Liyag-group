import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LangProvider } from '@/i18n/LangContext';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';

const AboutPage = lazy(() => import('@/pages/AboutPage'));
const ServicesPage = lazy(() => import('@/pages/ServicesPage'));
const ServiceDetailPage = lazy(() => import('@/pages/ServiceDetailPage'));
const PricingPage = lazy(() => import('@/pages/PricingPage'));
const ProjectsPage = lazy(() => import('@/pages/ProjectsPage'));
const CoursesPage = lazy(() => import('@/pages/CoursesPage'));
const BlogPage = lazy(() => import('@/pages/BlogPage'));
const BlogArticlePage = lazy(() => import('@/pages/BlogArticlePage'));
const SaaSOverviewPage = lazy(() => import('@/pages/SaaSOverviewPage'));
const SaaSProductPage = lazy(() => import('@/pages/SaaSProductPage'));
const LocationPage = lazy(() => import('@/pages/LocationPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));
const LegalPage = lazy(() => import('@/pages/LegalPage'));

function PageFallback() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-black">
      <div className="w-8 h-8 border-2 border-white/[0.12] border-t-white rounded-full animate-spin" />
    </div>
  );
}

function App() {
  return (
    <LangProvider>
      <BrowserRouter>
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:slug" element={<ServiceDetailPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogArticlePage />} />
              <Route path="/saas" element={<SaaSOverviewPage />} />
              <Route path="/saas/:slug" element={<SaaSProductPage />} />
              <Route path="/fr/:slug" element={<LocationPage />} />
              <Route path="/en/:slug" element={<LocationPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/legal" element={<LegalPage />} />
              <Route path="*" element={<Home />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </LangProvider>
  );
}

export default App;
