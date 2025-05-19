import PublicLayout from "~/layouts/public-layout";
import type { Route } from "./+types";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Class NG" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {


  return (
    <PublicLayout>
      <div className="p-5">
        <h1>Hello World</h1>
        <Button>Click me</Button>
        <Input />
      </div>
    </PublicLayout>
  )
}
