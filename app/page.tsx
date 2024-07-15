import PatientForm from "@/components/Form/PatientForm";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      {/* TODO: for otp verification | passkey modal */}

      <section className=" remove-scrollbar container my-auto">
        <div className="  sub-container max-w-[496px]">
          <Image
            src="/assets/icons/logo-full.svg"
            alt="logo Image"
            height={24}
            width={24}
            className="mb-2  h-32 w-fit"
          />

          <PatientForm />

          <div className="mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              @ 2024 Oishi
            </p>

            <Link href="#" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>

      <Image
        src="/assets/images/onboarding-img.png"
        width={1000}
        height={1000}
        className=" side-img max-w-[50%]"
        alt="onboarding"
      />
    </div>
  );
}
