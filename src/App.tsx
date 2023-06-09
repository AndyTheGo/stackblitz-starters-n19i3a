import * as React from 'react';
import Navbar from './Navbar';
import './style.css';

export default function App() {
  return (
    <div id = "body_bio">
      <header>
      <nav className="navbar fixed-bottom bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Fixed bottom</a>
  </div>
</nav>
      </header>
      <h1>Hello Everyone!</h1>
      <p>Welcome to my personal page!</p>
      <h3>A note from Andy:</h3>
      <h4>Hey Everyone! I hope all is well. This page has been something that I've wanted to have for quite some time now (About 2 years or so. So I hope you all enjoy, and feel free to hit me up so we can form connections! Thank you for your time!</h4>
    </div>
  );
}
