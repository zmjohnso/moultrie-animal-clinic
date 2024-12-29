import "server-only";
import {
  JobType,
  JobTypeResponse,
  MeetOurTeam,
  MeetOurTeamResponse,
  TakeATour,
  TakeATourResponse,
} from "./types";

const MEET_OUR_TEAM_PAGE_QUERY = `
    query {
        meetOurTeamCollection {
            items {
            heading
            mainPhoto {
                title
                url
            }
            teamMembersCollection(limit: 20) {
                items {
                name
                role
                profilePhoto {
                    title
                    url
                }
                description
                jobTitle {
                    title
                }
                }
            }
            }
        }
    }
`;

const TAKE_A_TOUR_PAGE_QUERY = `
  query {
    takeATourCollection {
      items {
        heading
        description
        clinicPhotosCollection {
          items {
            title
            url
          }
        }
      }
    }
  }
`;

const JOB_TYPE_QUERY = `
  query {
    jobTypeCollection {
      items {
        title
      }
    }
  }
`;

async function fetchGraphQL<T>(query: string): Promise<T> {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CONTENTFUL_CONTENT_DELIVERY_API_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
      // Associate all fetches with some cache tag so content can
      // be revalidated or updated from Contentful on publish
      next: { tags: ["clinicContent"] },
    }
  ).then((response) => response.json());
}

export async function getMeetOurTeamPageData(): Promise<MeetOurTeam> {
  const data = await fetchGraphQL<MeetOurTeamResponse>(
    MEET_OUR_TEAM_PAGE_QUERY
  );
  return data?.data?.meetOurTeamCollection?.items[0];
}

export async function getTakeATourPageData(): Promise<TakeATour> {
  const data = await fetchGraphQL<TakeATourResponse>(TAKE_A_TOUR_PAGE_QUERY);
  return data?.data?.takeATourCollection?.items[0];
}

export async function getJobTypes(): Promise<JobType[]> {
  const data = await fetchGraphQL<JobTypeResponse>(JOB_TYPE_QUERY);
  return data?.data?.jobTypeCollection.items;
}
