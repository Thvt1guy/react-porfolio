import { FaHtml5, FaCss3Alt, FaGithub, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { DiMysql } from 'react-icons/di';

function Skills(){
    return (
    <>
    <h1>
        <div className="flex flex-col items-center justify-center my-40">
      <h1 id='Skills' className="text-3xl font-bold mb-6">Skills</h1> {/* Title for the section */}
      <div className="grid grid-cols-4 gap-6">
        <div className="icon-container">
          <FaHtml5 size={120} className="icon text-blue-500" />
          <p className="text-lg mt-2">Html5</p>
        </div>
        <div className="icon-container">
          <FaCss3Alt size={120} className="icon text-red-500" />
          <p className="text-lg mt-2">Css3</p>
        </div>
        <div className="icon-container">
          <FaGithub size={120} className="icon text-green-500" />
          <p className="text-lg mt-2">Github</p>
        </div>
        <div className="icon-container">
          <SiTailwindcss size={120} className="icon text-pink-500" />
          <p className="text-lg mt-2">Tailwind</p>
        </div>
        <div className="icon-container">
          <FaNodeJs size={120} className="icon text-purple-500" />
          <p className="text-lg mt-2">NodeJs</p>
        </div>
        <div className="icon-container">
          <DiMysql size={120} className="icon text-yellow-500" />
          <p className="text-lg mt-2">Mysql</p>
        </div>
        <div className="icon-container">
          <FaReact size={120} className="icon text-gray-500" />
          <p className="text-lg mt-2">React</p>
        </div>
      </div>
    </div>
        </h1>
    </>
    );
}

export default Skills;