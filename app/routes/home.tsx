import type { Route } from "./+types/home";
import { Hero } from "~/components/organisms/Hero";
import { About } from "~/components/organisms/About";

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
      <About/>
    </>
  );
}
