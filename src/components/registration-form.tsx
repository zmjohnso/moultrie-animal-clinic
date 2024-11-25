"use client";

import { useFormState } from "react-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
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
import { addNewClient } from "@/app/action";

const initialState = {
  message: null,
  errors: {},
};

export function RegistrationFormComponent() {
  const [state, formAction] = useFormState(addNewClient, initialState);

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>New Client Registration Form</CardTitle>
          <CardDescription>
            If you are visiting Moultrie Animal Clinic for the first time,
            please fill out this form. You can also contact our clinic by phone
            at 904-797-5601 or email us to schedule an appointment for your pet
            before coming in.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction} className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Owner Information</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="ownerName">Owner&apos;s Name</Label>
                  <Input id="ownerName" name="ownerName" required />
                  {state.errors?.ownerName && (
                    <p className="text-sm text-red-500">
                      {state.errors.ownerName}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Textarea id="address" name="address" required />
                  {state.errors?.address && (
                    <p className="text-sm text-red-500">
                      {state.errors.address}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" name="phone" type="tel" required />
                  {state.errors?.phone && (
                    <p className="text-sm text-red-500">{state.errors.phone}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" required />
                  {state.errors?.email && (
                    <p className="text-sm text-red-500">{state.errors.email}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Pet Information</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="petName">Pet&apos;s Name</Label>
                  <Input id="petName" name="petName" required />
                  {state.errors?.petName && (
                    <p className="text-sm text-red-500">
                      {state.errors.petName}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label>Species</Label>
                  <Select name="species">
                    <SelectTrigger>
                      <SelectValue placeholder="Select species" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dog">Dog</SelectItem>
                      <SelectItem value="cat">Cat</SelectItem>
                    </SelectContent>
                  </Select>
                  {state.errors?.species && (
                    <p className="text-sm text-red-500">
                      {state.errors.species}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="breed">Breed</Label>
                  <Input id="breed" name="breed" required />
                  {state.errors?.breed && (
                    <p className="text-sm text-red-500">{state.errors.breed}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="color">Color</Label>
                  <Input id="color" name="color" required />
                  {state.errors?.color && (
                    <p className="text-sm text-red-500">{state.errors.color}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dateOfBirth">Date of Birth (or Age)</Label>
                  <Input id="dateOfBirth" name="dateOfBirth" required />
                  {state.errors?.dateOfBirth && (
                    <p className="text-sm text-red-500">
                      {state.errors.dateOfBirth}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sex">Sex</Label>
                  <Select name="sex">
                    <SelectTrigger>
                      <SelectValue placeholder="Select sex" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                  {state.errors?.sex && (
                    <p className="text-sm text-red-500">{state.errors.sex}</p>
                  )}
                </div>
              </div>
            </div>

            <Button type="submit" className="w-full">
              Submit Registration
            </Button>
          </form>

          {state.message && (
            <p className="mt-4 text-center text-green-600">{state.message}</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
