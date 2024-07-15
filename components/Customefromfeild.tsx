"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";
import { FrominputType } from "./Form/PatientForm";
import Image from "next/image";

import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { E164Number } from "libphonenumber-js";

interface CustomeProps {
  control: Control<any>;
  feildtype: FrominputType;
  name: string;
  label?: string;
  placeholder?: string;
  iconeSrc?: string;
  iconeAlt?: string;
  disabled?: boolean;
  dateFormet?: string;
  showTimeSlect?: boolean;
  children?: React.ReactNode;
  renderSkeletons?: (field: any) => React.ReactNode;
}

const RenderInputFeild = ({
  field,
  props,
}: {
  field: any;
  props: CustomeProps;
}) => {
  switch (props.feildtype) {
    case FrominputType.INPUT:
      return (
        <div className="flex rounded-md border border-dark-500 bg-dark-400">
          {props.iconeSrc && (
            <Image
              src={props.iconeSrc}
              alt={"icone"}
              width={24}
              height={24}
              className="ml-2"
            />
          )}
          <FormControl>
            <Input
              placeholder={props.placeholder}
              {...field}
              className="shad-input border-0"
            />
          </FormControl>
        </div>
      );
    case FrominputType.PHONE_INPUT:
      return (
        <FormControl>
          <PhoneInput
            defaultCountry="US"
            onChange={field.onChange}
            placeholder={props.placeholder}
            international
            withCountryCallingCode
            value={field.value as E164Number | undefined}
            className="input-phone"
          />
        </FormControl>
      );
    case FrominputType.CHECKBOX:
    default:
      break;
  }
};

function CustomeField(props: CustomeProps) {
  const { control, feildtype, name, label, placeholder, iconeSrc, iconeAlt } =
    props;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex-1">
          {feildtype !== FrominputType.CHECKBOX && label && (
            <FormLabel>{label}</FormLabel>
          )}

          <RenderInputFeild field={field} props={props} />

          <FormMessage className="shad-error" />
        </FormItem>
      )}
    />
  );
}

export default CustomeField;
