import { Routes, Route } from 'react-router-dom'

import { HomePage } from './pages/HomePage'
import { СalculatorPage } from './pages/СalculatorPage'
import { СontactsPage } from './pages/СontactsPage'
import { ProfilePage } from './pages/ProfilePage'
import { NotfoundPage } from './pages/NotfoundPage'
import { Layout } from './components/Layout'

function App() {
  return (
    <div className='App'>
      <>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='calculator' element={<СalculatorPage />} />
            <Route path='contacts' element={<СontactsPage />} />
            <Route path='profile' element={<ProfilePage />} />
            <Route path='*' element={<NotfoundPage />} />
          </Route>
        </Routes>
      </>
    </div>
  )
}

export default App
