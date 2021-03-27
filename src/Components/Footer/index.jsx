import { StyledFooter } from "./StyledComponents";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";

const Footer = (props) => {
  return (
    <StyledFooter>
      <a target="_blank" rel="noreferrer" href="https://twitter.com/bim240">
        <FaTwitter className="icon" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/bim240/">
        <FaLinkedin className="icon" />
      </a>
      <a target="_blank" rel="noreferrer" href="https://github.com/bim240">
        <FaGithub className="icon" />
      </a>
      <a target="_blank" rel="noreferrer" href="https://www.bimlendu.com/">
        <BiWorld className="icon" />
      </a>
    </StyledFooter>
  );
};

export default Footer;
