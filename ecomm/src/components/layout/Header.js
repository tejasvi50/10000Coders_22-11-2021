let Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="index.html">
          <img
            src="https://www.10000coders.co/assets/10000coders-logo.png?v=1.0"
            alt="logo"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="index.html">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                About
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="web-development.html">
                    Web Development
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="mobile-devlopment.html">
                    Mobile App Development
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="cloud-computing.html">
                    Cloud Computing
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Clients
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Blog
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item px-2">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-toggle="modal"
                data-bs-target="#myModal"
              >
                Login
              </button>
            </li>
            <li class="nav-item px-2">
              <button class="btn btn-danger">Register</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    // <header class="navbar navbar-expand-lg  bg-info mb-2">
    // <span class="navbar-brand">
    // <img src="../../../Images/d3.jpeg" alt="icon" class="px-1" />
    // </span>
    // <a  href="Home page.html" class="p-3 text-decoration-none">Home</a>
    // <a class="p-3 text-decoration-none">About</a>
    // <div class="dropdown">
    //   <a  class=" dropdown-toggle p-2 text-decoration-none" data-bs-toggle="dropdown">Services</a>
    //   <ul class="dropdown-menu bg-light">
    //     <li><a class="dropdown-item " href="Web.html">Web Development</a></li>
    //     <li><a class="dropdown-item" href="Mobile.html">Mobile App Development</a></li>
    //     <li><a class="dropdown-item" href="Cloud.html">Cloud Computing</a></li>
    //   </ul>
    // </div>
    // <a class="p-3 text-decoration-none">Clients</a>
    // <a class="p-3 text-decoration-none">Blog</a>
    // <a class="p-3 text-decoration-none">Contact</a>
    // <form class="d-flex ms-5">
    //   <input class="form-control mx-5" type="search" placeholder="Search" aria-label="Search" />
    //   <button class="btn btn-outline-success" type="submit">Search</button>
    // </form>

    // <button type="button" class="btn btn-primary mx-auto d-block mt-5 bg-primary btn border-primary m-5 px-4" data-bs-toggle="modal" data-bs-target="#modalForm">Login</button> 
    // </header>
  );
};

export default Header;
