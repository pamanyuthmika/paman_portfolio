import { BiLogoPostgresql } from "react-icons/bi";
import { DiRedis } from "react-icons/di";
import { FaNodeJs, FaAndroid, FaHtml5, FaCss3Alt, FaJava, FaJs, FaBootstrap } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiMysql } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const Technologies = () => {
  return (
    <div className="pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {/* Existing Technologies */}
        <div>
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        
        <div className="p-4">
          <SiMongodb className="text-7xl text-cyan-500" />
        </div>
        
        <div className="p-4">
          <FaNodeJs className="text-7xl text-green-500" />
        </div>
        

        {/* New Technologies */}
        <div className="p-4">
          <FaAndroid className="text-7xl text-green-500" title="Android Studio" />
        </div>
        <div className="p-4">
          <FaHtml5 className="text-7xl text-orange-500" title="HTML" />
        </div>
        <div className="p-4">
          <FaCss3Alt className="text-7xl text-blue-500" title="CSS" />
        </div>
        <div className="p-4">
          <FaJava className="text-7xl text-red-500" title="Java" />
        </div>
        <div className="p-4">
          <FaJs className="text-7xl text-yellow-500" title="JavaScript" />
        </div>
        <div className="p-4">
          <SiMysql className="text-7xl text-sky-700" title="SQL" />
        </div>
        <div className="p-4">
          <FaBootstrap className="text-7xl text-purple-600" title="Bootstrap" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
