const Footer = () => {
  return (
    <footer classname='section footer'>
      <ul classname='footer-links'>
        <li>
          <a href='#home' classname='footer-link'>
            home
          </a>
        </li>
        <li>
          <a href='#about' classname='footer-link'>
            about
          </a>
        </li>
        <li>
          <a href='#services' classname='footer-link'>
            services
          </a>
        </li>
        <li>
          <a href='#featured' classname='footer-link'>
            featured
          </a>
        </li>
      </ul>
      <ul classname='footer-icons'>
        <li>
          <a
            href='https://www.twitter.com'
            target='_blank'
            classname='footer-icon'
          >
            <i classname='fab fa-facebook'></i>
          </a>
        </li>
        <li>
          <a
            href='https://www.twitter.com'
            target='_blank'
            classname='footer-icon'
          >
            <i classname='fab fa-twitter'></i>
          </a>
        </li>
        <li>
          <a
            href='https://www.twitter.com'
            target='_blank'
            classname='footer-icon'
          >
            <i classname='fab fa-squarespace'></i>
          </a>
        </li>
      </ul>
      <p classname='copyright'>
        copyright &copy; Backroads travel tours company
        <span id='date'></span> all rights reserved
      </p>
    </footer>
  );
}
export default Footer