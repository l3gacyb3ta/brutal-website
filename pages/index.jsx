import Head from "next/head";
import Logo from "../components/common/Logo";
import Button from "../components/common/Button";

export default function Home() {
  return (
    <div className="max-w-prose m-auto flex flex-col gap-8 grow">
      <Head>
        <title>BRUTAL</title>
      </Head>
      <Logo className="w-32" />
      <h1 className="text-4xl">The Brutal Operating System</h1>
      <p>
        Striking modernist shapes and bold use of modern C are the hallmarks of BRUTAL. Inspired by brutalist design BRUTAL combines the ideals of UNIX from the 1970s with modern technology and engineering.
      </p>
      <div className="flex gap-4">
        <Button href="https://github.com/brutal-org/brutal">contribute on GitHub</Button>
        <Button href="https://github.com/brutal-org/brutal/releases">download the latest release</Button>
      </div>
    </div>
  )
}

