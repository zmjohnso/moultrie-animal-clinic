"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useForm, ValidationError } from "@formspree/react";
import { PlusCircle, MinusCircle } from "lucide-react";

export function RegistrationFormComponent() {
  const [state, handleSubmit, reset] = useForm(
    process.env.NEXT_PUBLIC_FORMSPREE_NEW_CLIENT_REGISTRATION_FORM || ""
  );
  const [pets, setPets] = useState([0]);

  const addPet = () => {
    setPets([...pets, pets.length]);
  };

  const removePet = () => {
    if (pets.length > 1) {
      setPets(pets.slice(0, -1));
    }
  };

  if (state.succeeded) {
    return (
      <Card className="w-full max-w-md mx-auto mt-8">
        <CardHeader>
          <CardTitle>Submission Received!</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Thank you for registering with Moultrie Animal Clinic.</p>
          <p className="mt-2">
            If you haven&apos;t already called to schedule an appointment,
            please call us at 904-797-5601 to set one up.
          </p>
        </CardContent>
        <CardFooter>
          <Button
            type="reset"
            onClick={reset}
            variant="outline"
            className="w-full"
          >
            Go back to client registration form
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl sm:text-3xl">
            New Client Registration Form
          </CardTitle>
          <CardDescription className="mt-2 text-sm sm:text-base">
            If you are visiting Moultrie Animal Clinic for the first time,
            please fill out this form. You can also contact our clinic by phone
            at 904-797-5601 or email us to schedule an appointment for your pet
            before coming in.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Owner Information</h3>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="ownerName">Owner&apos;s Name</Label>
                  <Input id="ownerName" name="ownerName" required />
                  <ValidationError
                    prefix="Owner Name"
                    field="ownerName"
                    errors={state.errors}
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Textarea id="address" name="address" required />
                  <ValidationError
                    prefix="Address"
                    field="address"
                    errors={state.errors}
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" name="phone" type="tel" required />
                  <ValidationError
                    prefix="Phone"
                    field="phone"
                    errors={state.errors}
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" required />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="previousVeterinaryPractice">
                    Previous Veterinary Practice
                  </Label>
                  <Input
                    id="previousVeterinaryPractice"
                    name="previousVeterinaryPractice"
                  />
                  <ValidationError
                    prefix="Previous Veterinary Practice"
                    field="previousVeterinaryPractice"
                    errors={state.errors}
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="howDidYouHearAboutUs">
                    How did you hear about us?
                  </Label>
                  <Input
                    id="howDidYouHearAboutUs"
                    name="howDidYouHearAboutUs"
                  />
                  <ValidationError
                    prefix="How did you hear about us?"
                    field="howDidYouHearAboutUs"
                    errors={state.errors}
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>
            </div>

            {pets.map((petIndex) => (
              <div key={petIndex} className="space-y-6">
                <h3 className="text-xl font-semibold">
                  Pet Information {petIndex + 1}
                </h3>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor={`petName-${petIndex}`}>
                      Pet&apos;s Name
                    </Label>
                    <Input
                      id={`petName-${petIndex}`}
                      name={`petName-${petIndex}`}
                      required
                    />
                    <ValidationError
                      prefix={`Pet Name ${petIndex + 1}`}
                      field={`petName-${petIndex}`}
                      errors={state.errors}
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`species-${petIndex}`}>Species</Label>
                    <Select name={`species-${petIndex}`} required>
                      <SelectTrigger
                        id={`species-${petIndex}`}
                        aria-label="Select species"
                      >
                        <SelectValue placeholder="Select species" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dog">Dog</SelectItem>
                        <SelectItem value="cat">Cat</SelectItem>
                      </SelectContent>
                    </Select>
                    <ValidationError
                      prefix={`Species ${petIndex + 1}`}
                      field={`species-${petIndex}`}
                      errors={state.errors}
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`breed-${petIndex}`}>Breed</Label>
                    <Input
                      id={`breed-${petIndex}`}
                      name={`breed-${petIndex}`}
                      required
                    />
                    <ValidationError
                      prefix={`Breed ${petIndex + 1}`}
                      field={`breed-${petIndex}`}
                      errors={state.errors}
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`color-${petIndex}`}>Color</Label>
                    <Input
                      id={`color-${petIndex}`}
                      name={`color-${petIndex}`}
                      required
                    />
                    <ValidationError
                      prefix={`Color ${petIndex + 1}`}
                      field={`color-${petIndex}`}
                      errors={state.errors}
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`dateOfBirth-${petIndex}`}>
                      Date of Birth (or Age)
                    </Label>
                    <Input
                      id={`dateOfBirth-${petIndex}`}
                      name={`dateOfBirth-${petIndex}`}
                      required
                    />
                    <ValidationError
                      prefix={`Date of Birth ${petIndex + 1}`}
                      field={`dateOfBirth-${petIndex}`}
                      errors={state.errors}
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`sex-${petIndex}`}>Sex</Label>
                    <Select name={`sex-${petIndex}`} required>
                      <SelectTrigger
                        id={`sex-${petIndex}`}
                        aria-label="Select sex"
                      >
                        <SelectValue placeholder="Select sex" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="neuteredMale">
                          Neutered Male
                        </SelectItem>
                        <SelectItem value="spayedFemale">
                          Spayed Female
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <ValidationError
                      prefix={`Sex ${petIndex + 1}`}
                      field={`sex-${petIndex}`}
                      errors={state.errors}
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <Label htmlFor={`anything-else-${petIndex}`}>
                      Anything else that we should know about your pet?
                    </Label>
                    <Textarea
                      id={`anything-else-${petIndex}`}
                      name={`anything-else-${petIndex}`}
                    />
                    <ValidationError
                      prefix={`Anything else that we should know about your pet? ${petIndex + 1}`}
                      field={`anything-else-${petIndex}`}
                      errors={state.errors}
                      className="text-red-500 text-sm"
                    />
                  </div>
                </div>
              </div>
            ))}

            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <Button
                type="button"
                onClick={addPet}
                variant="outline"
                className="w-full sm:w-auto"
              >
                <PlusCircle className="mr-2 h-4 w-4" />
                Add Another Pet
              </Button>
              <Button
                type="button"
                onClick={removePet}
                variant="outline"
                className="w-full sm:w-auto"
                disabled={pets.length === 1}
              >
                <MinusCircle className="mr-2 h-4 w-4" />
                Remove Last Pet
              </Button>
            </div>

            <Button
              type="submit"
              disabled={state.submitting}
              className="w-full"
            >
              {state.submitting ? "Submitting..." : "Submit Registration"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
