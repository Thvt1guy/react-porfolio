import { AiFillLinkedin } from 'react-icons/ai';

function Footer(){
    return (<div className="flex flex-col items-center justify-center">
    <a href='https://www.linkedin.com/in/derrick-alcius-526b76233/' target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
      <AiFillLinkedin size={60} className="text-blue-600 hover:text-blue-800" />
    </a>
  </div>
    );
}

export default Footer;