import logo from './logo.svg';

import GuestLayout from './layouts/GuestLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      

        <GuestLayout/>
        <Footer></Footer>
    </div>
  );
}

export default App;
