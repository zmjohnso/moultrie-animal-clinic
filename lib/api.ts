import { MeetOurTeam, MeetOurTeamResponse } from "./types";

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

async function fetchGraphQL(query: string): Promise<MeetOurTeamResponse> {
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
  const data = await fetchGraphQL(MEET_OUR_TEAM_PAGE_QUERY);
  return data?.data?.meetOurTeamCollection?.items[0];
}
