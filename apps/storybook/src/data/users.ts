import type { TableColumn } from "@xron-ui/react";

export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  phoneNumber: string;
  role: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  lastLoginAt: string;

  gender: string;
  dateOfBirth: string;
  jobTitle: string;
  department: string;
  company: string;
  nationality: string;
  timezone: string;
  preferredCurrency: string;
  subscriptionPlan: string;
  billingCycle: string;
  referredBy: string;
  backupEmail: string;
  githubUsername: string;
  twitterUsername: string;
  linkedinProfile: string;
}

export const users: User[] = [
  {
    id: "usr_001",
    name: "John Doe",
    username: "johndoe99",
    email: "john@example.com",
    phoneNumber: "+6281234567890",
    role: "Admin",
    status: "Active",
    createdAt: "2025-01-15T08:30:00Z",
    updatedAt: "2026-07-15T09:15:22Z",
    lastLoginAt: "2026-07-15T09:15:22Z",

    // Properti tambahan
    gender: "Male",
    dateOfBirth: "1990-05-12",
    jobTitle: "Lead DevOps Engineer",
    department: "Information Technology",
    company: "Tech Corp Indonesia",
    nationality: "Indonesia",
    timezone: "Asia/Jakarta",
    preferredCurrency: "IDR",
    subscriptionPlan: "Enterprise",
    billingCycle: "Yearly",
    referredBy: "Organic Search",
    backupEmail: "john.backup@example.com",
    githubUsername: "johndoe-dev",
    twitterUsername: "@johndoe_tech",
    linkedinProfile: "linkedin.com/in/johndoe",
  },
  {
    id: "usr_002",
    name: "Jane Doe",
    username: "janedoe_real",
    email: "jane@example.com",
    phoneNumber: "+6281298765432",
    role: "Editor",
    status: "Active",
    createdAt: "2025-02-10T14:15:00Z",
    updatedAt: "2026-07-14T18:45:10Z",
    lastLoginAt: "2026-07-14T18:45:10Z",

    // Properti tambahan
    gender: "Female",
    dateOfBirth: "1993-11-23",
    jobTitle: "Content Manager",
    department: "Marketing",
    company: "Creative Media Agency",
    nationality: "Indonesia",
    timezone: "Asia/Jakarta",
    preferredCurrency: "IDR",
    subscriptionPlan: "Pro",
    billingCycle: "Monthly",
    referredBy: "usr_001", // Dirujuk oleh John Doe
    backupEmail: "jane.doe.backup@example.com",
    githubUsername: "janedoe-writes",
    twitterUsername: "@janedoewrites",
    linkedinProfile: "linkedin.com/in/janedoe-editorial",
  },
  {
    id: "usr_003",
    name: "Alex Smith",
    username: "alex_smith",
    email: "alex@example.com",
    phoneNumber: "+15550199283",
    role: "User",
    status: "Pending",
    createdAt: "2026-05-01T10:00:00Z",
    updatedAt: "2026-05-01T10:00:00Z",
    lastLoginAt: "Never",

    // Properti tambahan
    gender: "Male",
    dateOfBirth: "1995-08-04",
    jobTitle: "Junior Data Analyst",
    department: "Analytics",
    company: "Global Solutions Inc",
    nationality: "United States",
    timezone: "America/New_York",
    preferredCurrency: "USD",
    subscriptionPlan: "Free",
    billingCycle: "None",
    referredBy: "Ad Campaign",
    backupEmail: "alex.smith.personal@example.com",
    githubUsername: "alexsmith-data",
    twitterUsername: "@alex_analytics",
    linkedinProfile: "linkedin.com/in/alexsmith-data",
  },
  {
    id: "usr_004",
    name: "William Brown",
    username: "wbrown",
    email: "william@example.com",
    phoneNumber: "+6281122334455",
    role: "User",
    status: "Suspended",
    createdAt: "2025-11-20T16:45:00Z",
    updatedAt: "2026-05-10T09:00:00Z",
    lastLoginAt: "2026-04-20T11:05:00Z",

    // Properti tambahan
    gender: "Male",
    dateOfBirth: "1988-02-15",
    jobTitle: "UI/UX Designer",
    department: "Design",
    company: "Freelance",
    nationality: "Indonesia",
    timezone: "Asia/Makassar",
    preferredCurrency: "IDR",
    subscriptionPlan: "Free",
    billingCycle: "None",
    referredBy: "Friend",
    backupEmail: "william.brown.design@example.com",
    githubUsername: "wbrown-design",
    twitterUsername: "@wbrown_uiux",
    linkedinProfile: "linkedin.com/in/williambrown-design",
  },
];

export const columns: TableColumn<User>[] = [
  {
    key: "id",
    title: "User ID",
    sortable: true,
  },
  {
    key: "name",
    title: "Full Name",
    sortable: true,
  },
  {
    key: "username",
    title: "Username",
    sortable: true,
  },
  {
    key: "email",
    title: "Email Address",
    sortable: true,
  },
  {
    key: "phoneNumber",
    title: "Phone Number",
    sortable: false,
  },
  {
    key: "role",
    title: "Role",
    sortable: true,
  },
  {
    key: "status",
    title: "Status",
    sortable: true,
  },
  {
    key: "gender",
    title: "Gender",
    sortable: true,
  },
  {
    key: "dateOfBirth",
    title: "Date of Birth",
    sortable: true,
  },
  {
    key: "nationality",
    title: "Nationality",
    sortable: true,
  },
  {
    key: "jobTitle",
    title: "Job Title",
    sortable: true,
  },
  {
    key: "department",
    title: "Department",
    sortable: true,
  },
  {
    key: "company",
    title: "Company",
    sortable: true,
  },
  {
    key: "timezone",
    title: "Timezone",
    sortable: true,
  },
  {
    key: "preferredCurrency",
    title: "Preferred Currency",
    sortable: true,
  },
  {
    key: "subscriptionPlan",
    title: "Subscription Plan",
    sortable: true,
  },
  {
    key: "billingCycle",
    title: "Billing Cycle",
    sortable: true,
  },
  {
    key: "backupEmail",
    title: "Backup Email",
    sortable: true,
  },
  {
    key: "referredBy",
    title: "Referred By",
    sortable: true,
  },
  {
    key: "githubUsername",
    title: "GitHub",
    sortable: true,
  },
  {
    key: "twitterUsername",
    title: "Twitter/X",
    sortable: true,
  },
  {
    key: "linkedinProfile",
    title: "LinkedIn",
    sortable: true,
  },
  {
    key: "lastLoginAt",
    title: "Last Login",
    sortable: true,
  },
  {
    key: "createdAt",
    title: "Created At",
    sortable: true,
  },
  {
    key: "updatedAt",
    title: "Updated At",
    sortable: true,
  },
];
