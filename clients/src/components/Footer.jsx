import React from "react";
import "./Footer.css"
function Footer() {
    return (
      <>
      
      <section id="footer">
      <img
        src="https://img.freepik.com/free-vector/shopping-basket-fresh-fruits-vegetables_1284-17179.jpg?w=740&t=st=1683599525~exp=1683600125~hmac=752c8b921929fd2da251ed02a29b58fd75fef7bb21309a438fb4a5f3cb5de213"
        class="footer-img"
      />
      <div class="title-text">
        <p>contact</p>

        <h1>Visit Shop Today</h1>
      </div>
      <div class="footer-row">
        <div class="footer-left">
          <h1>customer services</h1>
          <p>term & conditions</p>
          <p>faq</p>
          <p>delivery information</p>
          <p>about us</p>
          <p>career</p>
        </div>
        <div class="footer-right">
          <h1>Get In Touch</h1>
          <p>South Mumbai, Near - borivaly</p>
          <p>grocerymart@gmail.com</p>
          <p>+91 9289568985</p>
        </div>
      </div>
      <div class="follow">
        <p>follow us</p>
      </div>
      <div class="social-links">
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-linkedin"></i>
      </div>
    </section>
      </>
    );
}
export default Footer;
