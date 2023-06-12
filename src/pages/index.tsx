import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Projects from "@/components/Projects";
import About from "@/components/AboutForMain";

export default function Index() {
  return (
    <>
      <head>
        <title>TecoStudio</title>
      </head>
      <Header />
      <About />
      <Projects />
      <Footer />
    </>
  )
}