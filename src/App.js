import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import StoryList from './components/StoryList';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/:type" element={<StoryList/>} />
          <Route index element={<Navigate to="/top" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );

}

export default App;
