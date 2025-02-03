
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HomeScreen from './screens/HomeScreen';
import { Container } from 'react-bootstrap';

const App=()=> {
  return (
    <>
    
    <Header/>
    <main>
    <Container>
    
    <HomeScreen/>
    
    </Container>
    </main>
    <Footer/>
    </>
  );
}

export default App;
