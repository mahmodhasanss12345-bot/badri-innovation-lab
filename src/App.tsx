
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';
import AddBlog from './pages/AddBlog';

import SingleBlog from './pages/SingleBlog';


import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Work from './pages/Work';
import About from './pages/About';

import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/admin/add-blog" element={<AddBlog />} />
            <Route path="/blog/:id" element={<SingleBlog />} />
            <Route path="/privacy" element={<Privacy />} />
             <Route path="/terms" element={<Terms />} />
            
            <Route path="/privacy" element={<div style={{padding: '4rem', textAlign:'center'}}>Privacy Policy Page</div>} />
            <Route path="/terms" element={<div style={{padding: '4rem', textAlign:'center'}}>Terms of Service Page</div>} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;

