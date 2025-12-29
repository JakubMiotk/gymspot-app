import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Trainings from './pages/Trainings.tsx'
import Calendar from './pages/Calendar.tsx'
import Clients from './pages/Clients.tsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Trainings />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/clients" element={<Clients />} />
      </Routes>
    </BrowserRouter>
  )
}
