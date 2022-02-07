import { Routes, Route } from 'react-router-dom'
import SplitComponent from './SplitComponent'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<SplitComponent />} />
      </Routes>
    </div>
  );
}

export default App;
