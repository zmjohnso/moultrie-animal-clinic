import Image from "next/image";
import { getMeetOurTeamPageData } from "@/lib/api";

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
  profilePhoto,
  description,
}) => {
  return (
    <div className="flex flex-col sm:flex-row mb-8 w-full h-auto bg-white shadow-lg">
      <Image
        src={profilePhoto.url}
        alt={profilePhoto.title}
        width={300}
        height={500}
        loading="lazy"
        className="self-center"
      />
      <div className="flex flex-col p-4 flex-1">
        <h5 className="text-xl font-bold">{name}</h5>
        <h6 className="text-gray-700 py-2">{role}</h6>
        <p>{description}</p>
      </div>
    </div>
  );
};

interface SectionProps {
  title: string;
}

const Section: React.FC<SectionProps> = ({ title }) => {
  return (
    <div className="flex flex-col w-screen px-4">
      <hr className="w-full mt-8 mb-4 border-t border-gray-700" />
      <div className="flex justify-center w-full mb-3 pb-4">
        <h3 className="text-5xl text-center">{title}</h3>
      </div>
    </div>
  );
};

export default async function MeetOurTeam() {
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
    <div className="flex flex-col items-center p-4">
      <h4 className="text-4xl text-center my-5">{teamMembers.heading}</h4>
      <Image
        src={teamMembers.mainPhoto.url}
        alt={teamMembers.mainPhoto.title}
        height={300}
        width={500}
        priority
      />
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
      {veterinaryTechnicians.map((vetTechs) => (
        <TeamMemberCard
          key={vetTechs.name}
          name={vetTechs.name}
          role={vetTechs.role}
          profilePhoto={vetTechs.profilePhoto}
          description={vetTechs.description}
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
