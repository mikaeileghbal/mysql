import React from "react";

export default function Header() {
  return (
    <header className="bg-dark">
      <div className="container">
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
          <a class="navbar-brand" href="#home">
            CRUD
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar">
            <ul className="nav navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/create">
                  Create
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
