import logo from './logo.svg';
import './App.css';
import Header from './layout/Header'
import Banner from './layout/Banner'
import Divider from './layout/Divider'
import Enjoy from './layout/Sections/enjoy.js'
import Mobile from './layout/Sections/mobile.js'

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Divider />
      <Enjoy />
      <Divider />
      <Mobile />
    </div>
  );
}

export default App;
