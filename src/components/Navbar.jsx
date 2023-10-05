const Navbar = () => {
  return (
    <nav classname='navbar'>
      <div classname='nav-center'>
        <div classname='nav-header'>
          <img src='./images/logo.svg' classname='nav-logo' alt='backroads' />
          <button type='button' classname='nav-toggle' id='nav-toggle'>
            <i classname='fas fa-bars'></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <ul classname='nav-links' id='nav-links'>
          <li>
            <a href='#home' classname='nav-link'>
              {" "}
              home{" "}
            </a>
          </li>

          <li>
            <a href='#about' classname='nav-link'>
              {" "}
              about{" "}
            </a>
          </li>

          <li>
            <a href='#services' classname='nav-link'>
              {" "}
              services{" "}
            </a>
          </li>

          <li>
            <a href='#tours' classname='nav-link'>
              {" "}
              tours
            </a>
          </li>
        </ul>

        <ul classname='nav-icons'>
          <li>
            <a
              href='https://www.twitter.com'
              target='_blank'
              classname='nav-icon'
            >
              <i classname='fab fa-facebook'></i>
            </a>
          </li>
          <li>
            <a
              href='https://www.twitter.com'
              target='_blank'
              classname='nav-icon'
            >
              <i classname='fab fa-twitter'></i>
            </a>
          </li>
          <li>
            <a
              href='https://www.twitter.com'
              target='_blank'
              classname='nav-icon'
            >
              <i classname='fab fa-squarespace'></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar