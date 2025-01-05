import Image, { StaticImageData } from "next/image";
import { getJobTypes, getMeetOurTeamPageData } from "@/lib/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import clsx from "clsx";
import Kramer from "../../public/meet-our-team/kramer.jpg";
import DogBack from "../../public/meet-our-team/dog-back.jpg";
import DogBW from "../../public/meet-our-team/dog-bw.jpg";
import CatPlayingWithDog from "../../public/meet-our-team/cat-playing-with-dog.jpg";
import DogSwimming from "../../public/meet-our-team/dog-swimming.jpg";
import LunaSpring from "../../public/meet-our-team/luna-spring.jpg";
import Sadie from "../../public/meet-our-team/sadie.jpg";
import TreatyOak from "../../public/meet-our-team/treaty-oak.jpg";

interface TeamMemberCardProps {
  name: string;
  role: string;
  description: string;
  profilePhoto: {
    url: string;
    description: string;
  };
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
              alt={profilePhoto.description}
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

interface GridPhotos {
  alt: string;
  url: StaticImageData;
}

export async function MeetOurTeamComponent() {
  const teamMembers = await getMeetOurTeamPageData();
  const jobTypes = await getJobTypes();

  const groupedTeamMembers = jobTypes.map((jobType) => ({
    title: jobType.title,
    members: teamMembers.teamMembersCollection.items.filter(
      (x) => x.jobTitle.title === jobType.title
    ),
  }));

  const gridPhotos: GridPhotos[] = [
    { alt: "Dog looking to the right.", url: Kramer },
    {
      alt: "Dog laying on the ground looking back over his left shoulder.",
      url: DogBack,
    },
    {
      alt: "Black and white picture of a dog laying down looking forward with his tongue stuck out.",
      url: DogBW,
    },
    { alt: "Cat playing with dog.", url: CatPlayingWithDog },
    { alt: "Black dog swimming.", url: DogSwimming },
    { alt: "Dog laying down in a bed of grass and flowers.", url: LunaSpring },
    { alt: "Dog smiling and looking at the camera.", url: Sadie },
    {
      alt: "Dog smiling and resting her head on a tree branch.",
      url: TreatyOak,
    },
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
              alt={photo.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 30vw, 15vw"
              priority
              placeholder="blur"
            />
          </div>
        ))}
      </div>

      {groupedTeamMembers.map((group) => (
        <div key={group.title}>
          <Section
            title={group.members.length > 1 ? `${group.title}s` : group.title}
          />
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
            {group.members.map((member) => (
              <TeamMemberCard
                key={member.name}
                name={member.name}
                role={member.role}
                profilePhoto={member.profilePhoto}
                description={member.description}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
