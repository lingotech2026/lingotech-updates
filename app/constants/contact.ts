import { Mail, Phone, MapPin } from "lucide-react";

export interface ContactInfo {
  icon: typeof Mail | typeof Phone | typeof MapPin;
  label: string;
  value: string;
  href?: string;
}

export const CONTACT_INFO: ContactInfo[] = [
  {
    icon: Mail,
    label: "Email",
    value: "solutionslingotech@gmail.com",
    href: "mailto:solutionslingotech@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+977 9748263080",
    href: "tel:+9779748263080",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lalitpur, Nepal",
  },
];
