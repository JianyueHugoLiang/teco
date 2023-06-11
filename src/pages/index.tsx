import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Projects from "@/components/Projects";
import MainInstruction from "@/components/Index";

export default function Index() {
  return (
    <>
      <head>
        <title>TecoStudio</title>
      </head>
      <Header />
      <MainInstruction />
      <Projects />
      <Footer />
    </>
  )
}