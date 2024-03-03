import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div id="Footer">
      <div id="newletter">
        <div id="lhs">
          <label htmlFor="newsletter-email">Subscribe to our news alerts</label>
          <span>
            <input type="email" id="newsletter-email" />
            <button>Subscribe</button>
          </span>
        </div>
        <div id="rhs">
          <a href="#">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>
      </div>
      <div id="lower-footer-div">
        <h4>About Us</h4>
        <div>
          <Link> History</Link>
          <Link> Directors message</Link>
          <Link>Mission, Vision and Values</Link>
          <Link> Value Creation</Link>
          <Link> Funding Model</Link>

          <Link>Strategy</Link>

          <Link> Capability</Link>
          <Link> Best Practices </Link>
          <Link> Leadership Team</Link>
          <Link>Organisation Structure</Link>
          <Link>Roles and Responsibilities</Link>
          <Link> Governance (Advisory Board)</Link>
          <Link> Partnerships </Link>
          <Link>Offices</Link>
        </div>
        <h4>Span Suits</h4>
        <div>
          <Link>Systems, Processes and Tools</Link>
          <Link>Mobile APP</Link>
          <Link>Brand Protection</Link>
        </div>
        <h4>Industries Served</h4>
        <div>
          <Link>Overview of Industries</Link>
          <Link>Success Stories/ Case Studies /Testimonials</Link>
        </div>
        <h4>Traning Programs</h4>
        <div>
          <Link> Overview</Link>
          <Link>Law Enforcement Agencies (LEA) Training</Link>
          <Link> Customs Training</Link>
          <Link>External and Internal Stakeholder Training</Link>
        </div>
        <h4>Resources and Toolkits</h4>
        <div>
          <Link> Blog/Articles/ Videos</Link>
          <Link> Whitepapers</Link>
          <Link> Case Studies</Link>
          <Link>Brand Protection Toolkits</Link>
        </div>
      </div>
      <div id="right-reserved">
        <p>
          © {new Date().getFullYear()} The Health Take . All rights reserved.
        </p>
        <ul>
          <Link>Private Policy</Link>
          <Link>Legal Notice</Link>
          <Link>Report Security Issues</Link>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
