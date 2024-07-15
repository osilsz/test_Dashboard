import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

interface ButtonProps {
  isLoading: boolean;
  className?: string;
  children: React.ReactNode;
}

function SubmitButton({ isLoading, className, children }: ButtonProps) {
  return (
    <Button
      type="button"
      disabled={isLoading}
      className={className ?? "shad-primary-btn w-full"}
    >
      {isLoading ? (
        <div className="flex items-center gap-4">
          <Image
            src="/assets/icons/loader.svg"
            alt="Loading"
            width={24}
            height={24}
            className="animate-spin"
          />
          loading ....
        </div>
      ) : (
        children
      )}
    </Button>
  );
}

export default SubmitButton;
