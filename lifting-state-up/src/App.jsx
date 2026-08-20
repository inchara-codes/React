import { useState } from "react";
import Input from "./Input";
import Display from "./Display";

export default function App() {
  const [name, setName] = useState("");

  return (
    <>
      <Input name={name} setName={setName} />
      <Display name={name} />
    </>
  );
}