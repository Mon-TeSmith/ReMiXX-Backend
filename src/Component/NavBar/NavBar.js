import React from "react";
class NavBar extends React.Component {
  
  render(App) {
    return (
      <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container-fluid">
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar-items"
              aria-expanded="false"
              aria-controls="navbar"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/">
              {/* <img src="/img/logo.png"></img> */}
            </a>
          </div>

          <div id="navbar-global-items" class="navbar-collapse collapse">
            <ul class="nav navbar-nav navbar-left global-nav-left">
              <li>
                <a href="#">1</a>
              </li>
              <li>
                <a href="#">2</a>
              </li>
            </ul>

            <ul class="nav navbar-nav navbar-right">
              <li>
                <a href="#">1</a>
              </li>
              <li>
                <a href="#">2</a>
              </li>
            </ul>

            <ul class="nav navbar-nav">
              <li>
                <a href="#">1</a>
              </li>
              <li>
                <a href="#">2</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
export default NavBar;
