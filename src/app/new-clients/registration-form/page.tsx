import { addNewClient } from "@/app/actions";
import { useFormState, useFormStatus } from "react-dom";

const initialState = {
  message: null,
};

export default function RegistrationForm() {
  const [state, formAction] = useFormState(addNewClient, initialState);
  const { pending } = useFormStatus();

  return (
    <div className="flex flex-col items-center">
      <h5>New Client Registration Form</h5>
      <p>
        If you are visiting Moultrie Animal Clinic for the first time, we will
        have you fill out a client information sheet upon your arrival at your
        first visit. If you would like to save time, we have provided the same
        form here for electronic submission. Please also contact our clinic by
        phone 904-797-5601 or email us to schedule an appointment for your pet
        before coming in.
      </p>
      <form action={formAction}>
        <label>Owner&apos;s Name</label>
        <input type="text" id="ownerName" name="ownerName" required />
        <button type="submit" aria-disabled={pending}>
          Submit
        </button>
      </form>
    </div>
  );
}
