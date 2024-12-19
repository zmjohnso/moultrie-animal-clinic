import Image from "next/image";
import { getMeetOurTeamPageData } from "@/lib/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import clsx from "clsx";
import Kramer from "../../public/meet-our-team/kramer.jpg";
import DogBack from "../../public/meet-our-team/dog-back.jpg";
import DogBW from "../../public/meet-our-team/dog-bw.jpg";
import DogLickCat from "../../public/meet-our-team/dog-lick-cat.jpg";
import DogSwimming from "../../public/meet-our-team/dog-swimming.jpg";
import LunaSpring from "../../public/meet-our-team/luna-spring.jpg";
import Sadie from "../../public/meet-our-team/sadie.jpg";
import TreatyOak from "../../public/meet-our-team/treaty-oak.jpg";

interface TeamMemberCardProps {
  name: string;
  role: string;
  profilePhoto: {
    title: string;
    url: string;
  };
  description: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  role,
  description,
  profilePhoto,
}) => {
  return (
    <Card className="w-full mb-4 overflow-hidden">
      <div className="flex flex-col sm:flex-row h-full">
        <div className="w-full sm:w-1/4 relative">
          <div className="aspect-[4/3] sm:aspect-[3/4]">
            <Image
              src={profilePhoto.url}
              alt={profilePhoto.title}
              fill
              className="object-contain sm:object-cover mt-2 sm:mt-0"
            />
          </div>
        </div>
        <div className="w-full sm:w-3/4 flex flex-col">
          <CardHeader className="py-3">
            <CardTitle className="text-lg">{name}</CardTitle>
            <p className="text-xs text-muted-foreground">{role}</p>
          </CardHeader>
          <CardContent className="flex-grow py-2">
            <p className="text-xs">{description}</p>
          </CardContent>
        </div>
      </div>
    </Card>
  );
};

interface SectionProps {
  title: string;
}

const Section: React.FC<SectionProps> = ({ title }) => {
  return (
    <div className="w-full mt-8 mb-4">
      <h2 className="text-2xl font-bold text-center">{title}</h2>
      <div className="mt-2 mb-4 border-b border-gray-200" />
    </div>
  );
};

export async function MeetOurTeamComponent() {
  const teamMembers = await getMeetOurTeamPageData();

  const VETERINARIANS = "Veterinarians";
  const OFFICE_MANAGER = "Office Manager";
  const VETERINARY_TECHNICIANS = "Veterinary Technicians";
  const RECEPTIONIST = "Receptionist";
  const QUALITY_CONTROL_MANAGER = "Quality Control Manager";

  const veterinarians = teamMembers.teamMembersCollection.items.filter(
    (x) => x.jobTitle.title === VETERINARIANS
  );
  const officeManagers = teamMembers.teamMembersCollection.items.filter(
    (x) => x.jobTitle.title === OFFICE_MANAGER
  );
  const veterinaryTechnicians = teamMembers.teamMembersCollection.items.filter(
    (x) => x.jobTitle.title === VETERINARY_TECHNICIANS
  );
  const receptionists = teamMembers.teamMembersCollection.items.filter(
    (x) => x.jobTitle.title === RECEPTIONIST
  );
  const qualityControlManagers = teamMembers.teamMembersCollection.items.filter(
    (x) => x.jobTitle.title === QUALITY_CONTROL_MANAGER
  );

  const gridPhotos = [
    { title: "Kramer", url: Kramer },
    { title: "Dog Back", url: DogBack },
    { title: "Dog BW photo", url: DogBW },
    { title: "Dog licking cat", url: DogLickCat },
    { title: "Dog swimming", url: DogSwimming },
    { title: "Luna", url: LunaSpring },
    { title: "Sadie", url: Sadie },
    { title: "Treaty Oak", url: TreatyOak },
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold text-center mb-6">
        {teamMembers.heading}
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8 max-w-3xl mx-auto">
        {gridPhotos.map((photo, index) => (
          <div
            key={index}
            className={clsx(
              "aspect-square relative overflow-hidden rounded-lg shadow-md",
              {
                "hidden md:block": index >= 4,
              }
            )}
          >
            <Image
              src={photo.url}
              alt={photo.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 30vw, 15vw"
              priority
              placeholder="blur"
            />
          </div>
        ))}
      </div>

      <Section title={VETERINARIANS} />
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
        {veterinarians.map((vet) => (
          <TeamMemberCard
            key={vet.name}
            name={vet.name}
            role={vet.role}
            profilePhoto={vet.profilePhoto}
            description={vet.description}
          />
        ))}
      </div>

      <Section title={OFFICE_MANAGER} />
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
        {officeManagers.map((officeManager) => (
          <TeamMemberCard
            key={officeManager.name}
            name={officeManager.name}
            role={officeManager.role}
            profilePhoto={officeManager.profilePhoto}
            description={officeManager.description}
          />
        ))}
      </div>

      <Section title={VETERINARY_TECHNICIANS} />
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
        {veterinaryTechnicians.map((vetTech) => (
          <TeamMemberCard
            key={vetTech.name}
            name={vetTech.name}
            role={vetTech.role}
            profilePhoto={vetTech.profilePhoto}
            description={vetTech.description}
          />
        ))}
      </div>

      <Section title={RECEPTIONIST} />
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
        {receptionists.map((receptionist) => (
          <TeamMemberCard
            key={receptionist.name}
            name={receptionist.name}
            role={receptionist.role}
            profilePhoto={receptionist.profilePhoto}
            description={receptionist.description}
          />
        ))}
      </div>

      <Section title={QUALITY_CONTROL_MANAGER} />
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
        {qualityControlManagers.map((qualityControlManager) => (
          <TeamMemberCard
            key={qualityControlManager.name}
            name={qualityControlManager.name}
            role={qualityControlManager.role}
            profilePhoto={qualityControlManager.profilePhoto}
            description={qualityControlManager.description}
          />
        ))}
      </div>
    </div>
  );
}
