export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <p className="footer-brand">Ecommerce</p>
          <p className="footer-copy"> &#169; {year} E-Mart, Created by Zehab Faisal | All rights reserved.</p>
        </div>
        <div className="footer-links">
          <a href="#features">Features</a>
          <a href="#suppssort">Support</a>
          <a href="#privacy">Privacy</a>
        </div>
      </div>
    </footer>
  )
}