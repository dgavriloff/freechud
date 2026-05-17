import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Story from './pages/Story'
import Support from './pages/Support'
import Clips from './pages/Clips'
import Evidence from './pages/Evidence'
import WhyThisMatters from './pages/WhyThisMatters'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<Story />} />
        <Route path="/evidence" element={<Evidence />} />
        <Route path="/why-this-matters" element={<WhyThisMatters />} />
        <Route path="/support" element={<Support />} />
        <Route path="/clips" element={<Clips />} />
      </Route>
    </Routes>
  )
}
