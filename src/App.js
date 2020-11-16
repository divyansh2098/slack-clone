import './App.css';

import Header from './components/Header/Header'
import Workspace from './components/Workspace/Workspace'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-content">
        <Sidebar />
        <Workspace />
      </div>
    </div>
  );
}

export default App;
