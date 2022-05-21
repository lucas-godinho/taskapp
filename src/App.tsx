import { HomePage } from './Pages/home';

import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';

import Router from './Router';
import { ContainerApp } from './style/global';

function App() {
  return (
    <ContainerApp>
      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </ContainerApp>
  );
}

export default App;
