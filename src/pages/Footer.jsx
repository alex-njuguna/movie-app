import "./footer.css";

function Footer() {
    const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">© {year} Alex Njuguna. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
