import React from "react";

const Footer = () => (
  <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
      <div className="row">
        <div className="col-md-6 mt-md-0 mt-3">
          <h5 className="text-uppercase">Ajay Giri Goswmai</h5>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio ad
            quae distinctio. Voluptatibus recusandae voluptate sapiente aliquid,
            consequuntur quis atque.
          </p>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Links</h5>
          <ul className="list-unstyled">
            <li>
              <a
                href="#!"
                className="text-decoration-none"
                style={{ color: "black" }}
              >
                Telegram
              </a>
            </li>
          </ul>
        </div>

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Links</h5>
          <ul className="list-unstyled">
            <li>
              <a
                href="#!"
                className="text-decoration-none"
                style={{ color: "black" }}
              >
                Telegram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="footer-copyright text-center py-3">
      © 2024 Copyright &nbsp;
      <span>Goswmai</span>
    </div>
  </footer>
);

export default Footer;
