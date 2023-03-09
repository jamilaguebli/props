import logo from './logo.svg';
import './App.css';
import Profil from './Component/Profil';

function App() {
  const handleName=()=>{
    alert("jamila guebli")
  }
  return (
    <div className="App">
      <Profil handleName={handleName} ></Profil>
   
    </div>
  );
  }

export default App;
