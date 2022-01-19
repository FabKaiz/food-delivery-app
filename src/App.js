import './App.css';

import { Header, HowItWork, Download, Footer } from './containers';
import { Navbar } from './components';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <HowItWork />
      <Download />
      <Footer />
    </div>
  );
}

export default App;
