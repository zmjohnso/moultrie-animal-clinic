import Image from "next/image";
import { getMeetOurTeamPageData } from "@/lib/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
    <Card className="w-full mb-6 overflow-hidden">
      <div className="flex flex-col sm:flex-row h-full">
        <div className="sm:w-1/3 relative aspect-[3/4]">
          <Image
            src={profilePhoto.url}
            alt={profilePhoto.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="sm:w-2/3 flex flex-col">
          <CardHeader>
            <CardTitle>{name}</CardTitle>
            <p className="text-sm text-muted-foreground">{role}</p>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-sm">{description}</p>
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
    <div className="w-full mt-12 mb-6">
      <h2 className="text-3xl font-bold text-center">{title}</h2>
      <div className="mt-2 mb-6 border-b border-gray-200" />
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
  const officeManager = teamMembers.teamMembersCollection.items.find(
    (x) => x.jobTitle.title === OFFICE_MANAGER
  );
  const veterinaryTechnicians = teamMembers.teamMembersCollection.items.filter(
    (x) => x.jobTitle.title === VETERINARY_TECHNICIANS
  );
  const receptionist = teamMembers.teamMembersCollection.items.find(
    (x) => x.jobTitle.title === RECEPTIONIST
  );
  const qualityControlManager = teamMembers.teamMembersCollection.items.find(
    (x) => x.jobTitle.title === QUALITY_CONTROL_MANAGER
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        {teamMembers.heading}
      </h1>
      <div className="flex justify-center mb-12">
        <Image
          src={teamMembers.mainPhoto.url}
          alt={teamMembers.mainPhoto.title}
          width={800}
          height={400}
          className="rounded-lg shadow-lg"
          priority
        />
      </div>

      <Section title={VETERINARIANS} />
      {veterinarians.map((vet) => (
        <TeamMemberCard
          key={vet.name}
          name={vet.name}
          role={vet.role}
          profilePhoto={vet.profilePhoto}
          description={vet.description}
        />
      ))}

      {officeManager && (
        <>
          <Section title={OFFICE_MANAGER} />
          <TeamMemberCard
            name={officeManager.name}
            role={officeManager.role}
            profilePhoto={officeManager.profilePhoto}
            description={officeManager.description}
          />
        </>
      )}

      <Section title={VETERINARY_TECHNICIANS} />
      {veterinaryTechnicians.map((vetTech) => (
        <TeamMemberCard
          key={vetTech.name}
          name={vetTech.name}
          role={vetTech.role}
          profilePhoto={vetTech.profilePhoto}
          description={vetTech.description}
        />
      ))}

      {receptionist && (
        <>
          <Section title={RECEPTIONIST} />
          <TeamMemberCard
            name={receptionist.name}
            role={receptionist.role}
            profilePhoto={receptionist.profilePhoto}
            description={receptionist.description}
          />
        </>
      )}

      {qualityControlManager && (
        <>
          <Section title={QUALITY_CONTROL_MANAGER} />
          <TeamMemberCard
            name={qualityControlManager.name}
            role={qualityControlManager.role}
            profilePhoto={qualityControlManager.profilePhoto}
            description={qualityControlManager.description}
          />
        </>
      )}
    </div>
  );
}
