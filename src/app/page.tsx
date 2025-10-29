import About from "../components/about";
import Contact from "../components/contact";
import Hero from "../components/hero";
import Nav from "../components/nav";
import Projects from "../components/projects";
import Sidebar from "../components/sidebar";
import Skills from "../components/skills";

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
