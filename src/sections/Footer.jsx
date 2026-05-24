import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Visit my Socials</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <a
              key={index}
              href={socialImg.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div key={index} className="icon">
                <img
                  src={socialImg.imgPath}
                  alt="social icon"
                  className="w-5 h-5 rounded-full object-cover"
                />
              </div>
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Kier | Code. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
