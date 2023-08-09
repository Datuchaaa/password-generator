import { Route, Routes } from 'react-router-dom';
import QRCodeGenerator from './pages/PasswordGenerator';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route index element={<QRCodeGenerator />} />
      </Routes>
    </div>
  );
}

export default App;