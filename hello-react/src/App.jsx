import logo from './images/ironhack-logo-xs.png';
import menuTop from './images/menu-top-xs.png';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';

import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navBar">
        <div className="nav-imgs">
          <img src={logo} alt="ironhack-logo" className="logo" />
          <img src={menuTop} alt="menu-top" className="menu-top" />
        </div>
      </nav>

      <div className="mainDiv">
        <h1>Say hello to ReactJS</h1>
        <p>
          You will learn how to use <br />
          the most popular frontend library, <br />
          and become a super Ninja developer
        </p>
        <button>Awesome!</button>
      </div>

      <section className="secondSection">
        <div>
          <img src={icon1} alt="icon1" />
          <h3 className="declarative">Declarative</h3>
          <p className="declarative-p">
            React makes it painless to create interactive UIs.
          </p>
        </div>
        <div>
          <img src={icon2} alt="icon2" />
          <h3 className="components">Components</h3>
          <p className="components-p">
            Build encapsulated components that manage their state.
          </p>
        </div>
        <div>
          <img src={icon3} alt="icon3" />
          <h3 className="single-way">Single-Way</h3>
          <p className="single-way-p">
            A set of immutable values are passed to the components.
          </p>
        </div>
        <div>
          <img src={icon4} alt="icon4" />
          <h3 className="JSX">JSX</h3>
          <p className="JSX-p">
            Statically-typed, designed to run on modern browsers.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
