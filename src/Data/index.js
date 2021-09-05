// import javascript from "./JavaScript";
import python from './Python';
import HtmlCss from './HtmlCss';
import { FaPython } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { TiHtml5 } from 'react-icons/ti';

export const getIcon = (name) => {
  switch (name) {
    case 'Python':
      return <FaPython className='language_icon' />;
    case 'Javascript':
      return <IoLogoJavascript className='language_icon' />;
    case 'HTML & CSS':
      return <TiHtml5 className='language_icon' />;
    default:
      break;
  }
};

const allData = { python, htmlcss: HtmlCss };

export default allData;
