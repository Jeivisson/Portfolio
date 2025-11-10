import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Nav from "../components/NavBar";
import Projects from "../components/Projects";
import Sidebar from "../components/SideBar";
import Skills from "../components/Skills";

export default function Home() {
    return (
        <main>
            <Nav />
            <Sidebar />
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
        </main>
    );
}
