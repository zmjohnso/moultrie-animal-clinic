import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div>
        <h1>Home</h1>
        <Image
          src={"/moultrie_logo_color.jpg"}
          alt="moultrie logo"
          width={500}
          height={500}
        />
      </div>
    </main>
  );
}
