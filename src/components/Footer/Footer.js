import React from "react";
import Info from "../Info/Info";
import LanguageIcon from "@mui/icons-material/Language";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./Footer.css";

function Footer() {
  return (
    <div data-testid='footer_test' className="footer">
      <div className="footer__support">
        <Info
          title="true"
          subtitle_1="Support"
          subtitle_2="Community"
          subtitle_3="Hosting"
          subtitle_4="About"
        />
        <Info
          subtitle_1="Help Centre"
          subtitle_2="Airbnb.org: disaster relief housing"
          subtitle_3="Try hosting"
          subtitle_4="Newsroom"
        />
        <Info
          subtitle_1="Safety information"
          subtitle_2="Support Afghan refugees"
          subtitle_3="AirCover: protection for Hosts"
          subtitle_4="Learn about new features"
        />
        <Info
          subtitle_1="Cancellation options"
          subtitle_2="Combating discrimination"
          subtitle_3="Explore hosting resources"
          subtitle_4="Letter from our founders"
        />
        <Info
          subtitle_1="Our COVID-19 Response"
          subtitle_3="Combating discrimination"
          subtitle_3="Visit our community forum"
          subtitle_4="Careers"
        />
        <Info
          subtitle_1="Supporting people with disabilities"
          subtitle_3="How to host responsibly"
          subtitle_4="Investors"
        />
        <Info
          subtitle_1="Report a neighbourhood concern"
          subtitle_4="Airbnb Luxe"
        />
      </div>
      <div className="footer__contact">
        <div data-testid='footer__contacttest' className="footer__info">
          <span>© 2022 Airbnb Clone, Inc.</span>
          <span>· </span>
          <p>Privacy</p>
          <span>· </span>
          <p>Terms</p>
          <span>· </span>
          <p>Sitemap</p>
        </div>
        <div className="footer__links">
          <LanguageIcon />
          <h4>English (CA)</h4>
          <span>$</span>
          <h4>CAD</h4>
          <div className="footer__linksSocials">
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
