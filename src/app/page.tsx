import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex w-full h-full">
      <ContentSection></ContentSection>
    </main>
  );
}

const ContentSection = () => {
  return <section className="w-4/5">Content Section</section>;
};
