import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">DICTIONARY</header>
        <main>
          <Dictionary />
        </main>
        <footer>
          this dictionary application was coded by{" "}
          <a href="https://github.com/emilyyvonne">Emily Brisbin</a> and is
          hosted by{" "}
          <a href="https://majestic-truffle-50d583.netlify.app/">Netlify</a>
        </footer>
      </div>
    </div>
  );
}
