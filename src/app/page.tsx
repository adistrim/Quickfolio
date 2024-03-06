"use client";
import { FiMail, FiFileText, FiGithub, FiBookOpen, FiLinkedin, FiSun, FiMoon } from 'react-icons/fi';
import useTheme from './hooks/useTheme';
import Projects from "./components/projects";
import Footer from './components/footer';

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <div className="dark:text-white flex flex-col items-center justify-center dark:bg-[#111010] md:flex-row">
        <div className="md:w-3/5 md:mr-8 mb-8 md:mb-0">
          <div className="md:hidden flex justify-center mb-[3rem]">
            <img src="/aditya.jpeg" alt="Profile Picture" className="h-64 w-64 rounded-full" />
          </div>
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            Aditya Raj 
            <button className="rounded-full p-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors focus:outline-none ml-2" onClick={toggleTheme}>
              {theme === 'dark' ? <FiMoon size={20} /> : <FiSun size={20} />}
            </button>
          </h2>
          <p className="text-md text-left mb-4">
            Hi! I am a third-year B.Tech Computer Science student at <a className="border border-neutral-200 dark:border-neutral-700 bg-neutral-200 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline" href="https://jklu.edu.in" target="_blank"><img src="/jklu_logo.png" alt="JKLU Logo" className="h-3.5 w-auto mr-1" />JKLU, Jaipur</a>. I mostly try to learn new things in tech and escape from my comfort zone. I enjoy capturing photos, learning about how our complex interconnected world works, and I'm an <a className="border border-neutral-200 dark:border-neutral-700 bg-neutral-200 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline" href="https://aviationgrade.vercel.app" target="_blank"><img src="/aviation_grade_logo.png" alt="AG Logo" className="h-3.5 w-auto mr-1" />aviation</a> nerd too.
          </p>
          <p className="text-md mb-4">
            I'm also an associate alumnus of <a className="border border-neutral-200 dark:border-neutral-700 bg-neutral-200 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline" href="https://jklu.edu.in" target="_blank"><img src="/iit_gandhinagar_logo.png" alt="IITGn Logo" className="h-3.5 w-auto mr-1" />IIT Gandhinagar</a> where I spent a semester learning high-level topics in computer science. As part of my professional experience, I worked as an SDE intern at Dexpert System in Pune in the summer of 2023.
          </p>
          <div className="flex flex-col md:flex-row items md:space-x-4">
            <a href="mailto:adistrim.dev@gmail.com" className="flex items-center text-blue-500 hover:text-blue-700">
              <FiMail className="mr-1" />
              Email
            </a>
            <a href="https://docs.google.com/document/d/1_BAHu6uIh2fpOjT5bDNWIJRxFa0o5xcLxKpBH-WpZcc/" className="flex items-center text-blue-500 hover:text-blue-700">
              <FiFileText className="mr-1" />
              Resume
            </a>
            <a href="https://github.com/adistrim" className="flex items-center text-blue-500 hover:text-blue-700">
              <FiGithub className="mr-1" />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/adistrim" className="flex items-center text-blue-500 hover:text-blue-700">
              <FiLinkedin className="mr-1" />
              LinkedIn
            </a>
          </div>
        </div>
        <div className="hidden md:block w-2/5 flex justify-center">
          <img src="/aditya.jpeg" alt="Profile Picture" className="h-64 w-64 rounded-full" />
        </div>
      </div>
      <Projects />
      <Footer />
    </div>
  );
}
