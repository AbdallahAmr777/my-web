import "./Footer.css";
const Footer = () => {
  return (
    <footer className="flex footer">
      <ul className="flex">
        <li>
          <a href="#header">About</a>
        </li>
        <li>
          <a href="#hero">Articles</a>
        </li>
        <li>
          <a href="#main">Projects</a>
        </li>
        <li>
          <a href="#contact">Speaking</a>
        </li>
        <li>
          <a href="#footer">Uses</a>
        </li>
      </ul>
      <p>© 2023 Spencer Sharp. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
