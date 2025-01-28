import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
export default function Contact() {
  return (
    <div className="justify-self-center">
      <h1 className="m-5">Contact me</h1>
      <div className="flex gap-4">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="size-8 text-blue-400 hover:text-blue-700 transition-colors" />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="size-8 text-gray-600 hover:text-black transition-colors" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="size-8 text-pink-200 hover:text-pink-600 transition-colors" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="size-8 text-blue-400 hover:text-blue-700 transition-colors" />
        </a>
      </div>
    </div>
  );
}
