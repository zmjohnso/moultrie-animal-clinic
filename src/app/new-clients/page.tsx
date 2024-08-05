import Link from "next/link";
import Image from "next/image";

export default function NewClients() {
  return (
    <div className="flex flex-col items-center p-4">
      <h4 className="text-2xl text-center mt-5 mb-5">What To Expect</h4>
      <Image
        src="/assets/new-clients/title_photo.jpg"
        alt="New Clients Title Photo"
        className="h-auto w-full max-w-md"
        loading="lazy"
      />
      <h4 className="text-2xl text-center mt-10">
        Saint Augustine Veterinary Services - Delivered With Courtesy And
        Respect!
      </h4>
      <p className="text-base text-center mt-5 mb-5">
        We want your visit to Moultrie Animal Clinic to be the best veterinary
        experience you ever had! We&apos;re all animal lovers here and we work
        hard to create a warm, inviting and comfortable environment for you and
        your pet. We strive for individualized care where you and your pet are
        never just a number, but part of our family. When you check in with our
        front desk you&apos;ll be greeted by one of our friendly and courteous
        team members. Next, we will bring you to a dog or cat friendly
        examination room where a dedicated member of our team will ask a few
        questions about your pet and get your pet&apos;s vital signs - just like
        when you go for a visit to your doctor! One of our Moultrie Animal
        Clinic veterinarians will then meet you and your pet. Our doctors are
        dedicated to spending time talking with you to address your concerns,
        complete a thorough physical exam on your pet, recommend any diagnostic
        testing if needed, and create your pet&apos;s individual treatment plan.
        This is a great time to ask questions. Our veterinary team wants to make
        sure you&apos;re completely comfortable with the information we&apos;re
        providing. No need to worry! If any additional testing is needed,
        Moultrie Animal Clinic is a modern facility with diagnostic equipment
        and an in-house laboratory, so most tests can be performed here. We even
        have a traveling veterinary specialist who performs diagnostic
        ultrasounds for your pets to avoid referrals and traveling when
        possible. Our veterinary technician will likely come back to wrap things
        up and will provide you with helpful pet care information and answer any
        wellness and care questions you may have. Our front desk staff will
        process your payment and schedule any needed follow-up appointments. At
        any time please do not hesitate to ask questions! That is what we are
        here for! Please know that our goal is to see all our clients and
        patients on time, and although we have contingencies for emergencies,
        there will be times where the unexpected will create delays. We will
        ensure these are minimized as much as possible. Please arrive 15 minutes
        early for your new patient and client appointment to give adequate time
        for filling out paperwork and for asking additional questions since you
        are new to us. We are excited to meet you and your pets!
      </p>
      <Link href="/registration-form">
        <a className="text-blue-500 underline">New Client Registration Form</a>
      </Link>
    </div>
  );
}
