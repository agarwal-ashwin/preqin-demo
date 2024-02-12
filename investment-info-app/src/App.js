import './index';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import Details from './scenes/Investor/Details';
import List from './scenes/Investor/List';

const App = () => {
  return (
    <BrowserRouter>
    <Box>
      <Routes>
        <Route path="/" exact element={<List/>} />
        <Route path="/investors/:id" element={<Details/>} />
      </Routes>
    </Box>
    </BrowserRouter>
  );
}

export default App;
