
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HomeScreen from './screens/HomeScreen';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
const App=()=> {
  return (
    <>
    <Router>
    <Header/>
    <main>
    <Container>
    <Routes>
      <Route  path='/' exact element={<HomeScreen/>}></Route>
      <Route path='product/:id' element={<ProductScreen></ProductScreen>}></Route>
      <Route path='/cart' element={<CartScreen/>}></Route>
      <Route path='/cart/:id' element={<CartScreen/>}></Route>
      <Route path='/login' element={<LoginScreen/>}></Route>
    </Routes>
    
    
    </Container>
    </main>
    </Router>
    <Footer/>
    
    </>
  );
}

export default App;
