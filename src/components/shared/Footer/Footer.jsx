const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <div>
    
        <h1 className="text-xl">
          Global Language Hub
        
        </h1>
        <p>Providing reliable tech since 2023</p>
        <p>Copyright © 2023 - All right reserved</p>
      </div>
      <div>
        <span className="footer-title">Learn language online</span>
        <a className="link link-hover">English</a>
        <a className="link link-hover">Arabic</a>
        <a className="link link-hover">Hindi</a>
        <a className="link link-hover">Urdu</a>
        <a className="link link-hover">Spanish</a>
      </div>
      <div>
        <span className="footer-title">GLanguage Hub</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
  );
};

export default Footer;
