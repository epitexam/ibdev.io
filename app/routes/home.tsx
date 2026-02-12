import type { Route } from "./+types/home";
import { Hero } from "~/components/organisms/Hero";
import { About } from "~/components/organisms/About";
import { Skills } from "~/components/organisms/Skills";
import { FAQ } from "~/components/organisms/Faq";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <FAQ />
    </>
  );
}
