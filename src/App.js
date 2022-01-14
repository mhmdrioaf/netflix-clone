import './App.css';
import Header from './layout/Header'
import Banner from './layout/Banner'
import Divider from './layout/Divider'
import Enjoy from './layout/Sections/enjoy.js'
import Mobile from './layout/Sections/mobile.js'
import Apple from './layout/Sections/apple.js'
import Kids from './layout/Sections/kids.js'

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Divider />
      <Enjoy />
      <Divider />
      <Mobile />
      <Divider />
      <Apple />
      <Divider />
      <Kids />
    </div>
  );
}

export default App;
