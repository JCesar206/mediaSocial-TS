import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiGmail } from "react-icons/si";
import { GiFlexibleStar, GiSpiderWeb} from "react-icons/gi";

const Footer = () => {
  return (
    <footer className="w-full fixed bottom-0 bg-gray-900 dark:bg-gray-950 text-white font-semibold py-4 shadow-md">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-6">
        <div className="flex gap-4 items-center">
          <a href="https://jcesar206.github.io/myPersonalBlog/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <GiSpiderWeb size={18} />
          </a>
          <a href="https://github.com/JCesar206" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaGithub size={18} />
          </a>
          <a href="https://www.linkedin.com/in/jcesar206" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaLinkedin size={18} />
          </a>
          <a href="mailto:jcesar206@hotmail.com" className="hover:text-blue-400">
            <FaEnvelope size={18} />
          </a>
					<a href="mailto:jcesary06@gmail.com" className="hover:text-blue-400">
						<SiGmail size={18} />
					</a>
        </div>
				<div className="flex gap-4 items-center">
        	<p className="text-sm text-white font-semibold hover:text-blue-500">
						&copy; {new Date().getFullYear()} Mini Social Media V 1.0 | JulyDevops</p>
					<p className="hover:text-blue-500"><GiFlexibleStar size={18} /></p>
					<p className="hover:text-blue-500 font-semibold"> Hecho con</p>
					<p className="hover:text-blue-500"><SiTypescript size={18} /></p>
					<p className="hover:text-blue-500"><SiTailwindcss size={18} /></p>
        </div>
		</div>
    </footer>
  );
};

export default Footer;
