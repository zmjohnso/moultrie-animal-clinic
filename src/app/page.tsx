import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div>
        <h1>Where your pet is never a number, but part of our family</h1>
      </div>
      <div className="bg-seafoam-blue">
        <Image
          src={"/moultrie_logo_color.jpg"}
          alt="Moultrie Animal Clinic Logo"
          width={300}
          height={300}
        />
      </div>
      <div className="bg-lava-red">
        <Image
          src={"/moultrie_animal_clinic.jpg"}
          alt="Moultrie Animal Clinic"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}
