import React from 'react';

export default function Header() {
  return (
    <header>
            <div class="row">
                <div class="col-3 p-3">
                    <div class="text-center">
                        <h1>Reindeer</h1>
                    </div>
                </div>
                <div class="col-9 p-3">
                    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div class="container-fluid">
                          <a class="navbar-brand" href="#home"><h3>HOME</h3></a>
                          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                          </button>
                          <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                              <li class="nav-item">
                                <a class="nav-link" href="#roadmap"><h4>ROADMAP</h4></a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="#team"><h4>TEAM</h4></a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="#faq"><h4>FAQ</h4></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </nav>
                </div>
            </div>
        </header>
  );
}
