import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar     from './components/Navbar'
import Footer     from './components/Footer'
import Home       from './pages/Home'
import Categories from './pages/Categories'
import Contact    from './pages/Contact'

function ScrollTop() {
  const { pathname } = useLocation()
  useEffect(() => window.scrollTo(0, 0), [pathname])
  return null
}

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-carbon">
      <ScrollTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/"           element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/contact"    element={<Contact />} />
          <Route path="*"           element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
