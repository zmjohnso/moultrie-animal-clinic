import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { PawPrint } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="pb-4 sm:pb-6">
          <CardTitle className="flex flex-col sm:flex-row items-center justify-center text-xl sm:text-2xl font-bold text-primary">
            <PawPrint className="mb-2 sm:mb-0 sm:mr-2 h-8 w-8 sm:h-6 sm:w-6" />
            <span className="text-center">404 - Page Not Found</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-sm sm:text-base text-muted-foreground">
            Oops! It seems like this page has gone for a walk. Don&apos;t worry,
            our other pages are still here to keep you company!
          </p>
        </CardContent>
        <CardFooter className="flex justify-center pt-4 sm:pt-6">
          <Button asChild className="w-full sm:w-auto">
            <Link href="/">Return to Home</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
