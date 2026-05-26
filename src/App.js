import './App.css';
import Dictionary from "./Dictionary"

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className='App-header'>
        <h1> Dictionary</h1>
          <p>
            Search for any word.
          </p>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className='App-footer'>
          Open-sourced She Code project, coded by Letícia Azevedo and hosted by Netlify.
        </footer>
      </div>
    </div>
  );
}

export default App;
