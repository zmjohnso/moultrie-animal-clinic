import { TakeATourComponent } from "@/components/take-a-tour";
import { getTakeATourPageData } from "@/lib/api";

export default async function TakeATourPage() {
  const takeATourPage = await getTakeATourPageData();

  return <TakeATourComponent takeATourPage={takeATourPage} />;
}
