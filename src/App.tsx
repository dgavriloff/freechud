import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Story from './pages/Story'
import Support from './pages/Support'
import Clips from './pages/Clips'
import JoshuaFox from './pages/JoshuaFox'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<Story />} />
        <Route path="/joshua-fox" element={<JoshuaFox />} />
        <Route path="/support" element={<Support />} />
        <Route path="/clips" element={<Clips />} />
      </Route>
    </Routes>
  )
}
