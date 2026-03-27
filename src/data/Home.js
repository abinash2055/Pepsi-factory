import { Users, Factory, Briefcase, Heart } from "lucide-react";

export const statsData = [
  {
    id: 1,
    label: "Brands",
    value: 7,
    suffix: "",
    icon: Briefcase,  // just reference the component
  },
  {
    id: 2,
    label: "Plants",
    value: 2,
    suffix: "",
    icon: Factory,
  },
  {
    id: 3,
    label: "Employees",
    value: 1000,
    suffix: "+",
    icon: Users,
  },
  {
    id: 4,
    label: "Customers",
    value: 1200,
    suffix: "M+",
    icon: Heart,
  },
];