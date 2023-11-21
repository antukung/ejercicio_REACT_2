import logo from './logo.svg';
import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">

        
        <img src={logo} className="App-logo" alt="logo" />
        <h2 id="nombre">
        Supermecado los DEBS
        </h2>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
        <a
          className="App-link"
          href="https://img.freepik.com/vector-premium/pala-jardineria-diferentes-tipos-palas-jardineros-imagenes-vectoriales-chillonas-aisladas-blanco_80590-18917.jpg?w=740"
          target="_blank"
          rel="noopener noreferrer"
        >
          La Pala
        </a>
    
        </div>
        <div>
        <a
          className="App-link"
          href="https://media.istockphoto.com/id/475988379/es/foto/negro-brillante-casco-de-motociclismo.webp?s=1024x1024&w=is&k=20&c=sD8SUj68dcOa2PRnYJqd2yud1fNElI2GnANO1le8Qzg="
          target="_blank"
          rel="noopener noreferrer"
        >
          El casco
        </a>

        </div>
            
      </header>
    </div>
  );
}


export default App;
