"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form } from "@/components/ui/form";
import CustomeField from "../Customefromfeild";
import SubmitButton from "../SubmitButton";
import { useState } from "react";

import { UserFromValidation } from "../../lib/validation";

export enum FrominputType {
  INPUT = "input",
  TEXTAREA = "textarea",
  PHONE_INPUT = "phone_input",
  CHECKBOX = "checkbox",
  DATE_PICKER = "datePicker",
  SElECT = "select",
  SKELETON = "skeleton",
}

function PatientForm() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof UserFromValidation>>({
    resolver: zodResolver(UserFromValidation),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
    },
  });

  function onSubmit(values: z.infer<typeof UserFromValidation>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 flex-1"
        >
          <section className="mb-12 space-y-4">
            <h1 className=" header">Hi There 👋</h1>
            <p className=" text-dark-700 ">Schedule Your First Appointment</p>
          </section>

          <CustomeField
            feildtype={FrominputType.INPUT}
            control={form.control}
            name="name"
            label="Full Name"
            placeholder="John Doe"
            iconeSrc="/assets/icons/user.svg"
            iconeAlt="user"
          />

          <CustomeField
            feildtype={FrominputType.INPUT}
            control={form.control}
            name="email"
            label="Email"
            placeholder="jon@example.com"
            iconeSrc="/assets/icons/email.svg"
            iconeAlt="email"
          />

          <CustomeField
            feildtype={FrominputType.PHONE_INPUT}
            control={form.control}
            name="phoneNumber"
            label="Phone Number"
            placeholder="(555) (123-456)"
          />

          <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
        </form>
      </Form>
    </div>
  );
}

export default PatientForm;
