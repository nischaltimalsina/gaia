import { GearIcon } from "@radix-ui/react-icons";
import { AreaChart, CircleDollarSign, DollarSign, FileKey, Inbox, LayoutDashboard, LucideDollarSign, PiggyBank, Receipt, Settings, UsersRound, Wallet, WalletCards, WalletCardsIcon, Wrench } from "lucide-react";
import React from "react";

type MenuItem = {
  title: string;
  icon?: React.ReactNode;
  link: string;
};

type MenuDataItem = {
  title: string;
  icon?: React.ReactNode;
  items: MenuItem[];
};
export const getMenuData = (): MenuDataItem[] => {
  return [
    {
      title: "Properties",
      icon: <LayoutDashboard className="h-4 w-4" />,
      items: [
        { title: "Dashboard", link: "properties/dashboard", icon: "" },
        { title: "Property List", link: "properties/list", icon: "" },
        { title: "Add Property", link: "properties/add", icon: "" },
        { title: "Property Details", link: "properties/:propertyId", icon: "" },
        { title: "Unit Management", link: "properties/units", icon: "" },
      ],
    },
    {
      title: "Tenants",
      icon: <UsersRound className="h-4 w-4" />,
      items: [
        { title: "Tenant List", link: "tenants/list", icon: "" },
        { title: "Add New Tenant", link: "tenants/add", icon: "" },
        { title: "Tenant Details", link: "tenants/:tenantId", icon: "" },
        { title: "Tenant Portal", link: "tenants/portal", icon: "" },
      ],
    },
    {
      title: "Leases ",
      icon: <FileKey className="h-4 w-4" />,
      items: [
        { title: "Create New Lease", link: "leases/create", icon: "" },
        { title: "Lease List", link: "leases/list", icon: "" },
        { title: "Lease Details", link: "leases/:leaseId", icon: "" },
        { title: "E-Signatures", link: "leases/signatures", icon: "" },
        { title: "Documents", link: "leases/documents", icon: "" },
      ],
    },
    {
      title: "Financials",
      icon: <Receipt className="h-4 w-4" />,
      items: [
        {
          title: "Financial Dashboard",
          link: "financials/dashboard",
          icon: "",
        },
        { title: "Income Management", link: "financials/income", icon: "" },
        { title: "Expense Management", link: "financials/expense", icon: "" },
        {
          title: "Reporting & Budgeting",
          link: "financials/reports",
          icon: "",
        },
        { title: "Tax Management", link: "financials/taxes", icon: "" },
      ],
    },
    {
      title: "Maintenance",
      icon: <Wrench className="h-4 w-4" />,
      items: [
        {
          title: "Maintenance Requests",
          link: "maintenance/requests",
          icon: "",
        },
        { title: "New Request", link: "maintenance/request/add", icon: "" },
        { title: "Work Orders", link: "maintenance/workorders", icon: "" },
        {
          title: "Preventive Maintenance",
          link: "maintenance/preventive",
          icon: "",
        },
        {
          title: "Inventory Management",
          link: "maintenance/inventory",
          icon: "",
        },
      ],
    },
    {
      title: " Analytics",
      icon: <AreaChart className="h-4 w-4" />,
      items: [
        { title: "Occupancy Reports", link: "reports/occupancy", icon: "" },
        {
          title: "Rent Collection Reports",
          link: "reports/rentcollection",
          icon: "",
        },
        {
          title: "Financial Performance",
          link: "reports/financialperformance",
        },
        { title: "Maintenance Reports", link: "reports/maintenance", icon: "" },
        {
          title: "Marketing & Lead",
          link: "reports/marketing",
        },
      ],
    },
    {
      title: "Communication ",
      icon: <Inbox className="h-4 w-4" />,
      items: [
        { title: "Internal Chat", link: "chat/internal", icon: "" },
        { title: "Announcement Board", link: "announcements", icon: "" },
        { title: "Email Integration", link: "email/integration", icon: "" },
        { title: "Task Management", link: "tasks/management", icon: "" },
      ],
    },
    {
      title: "Settings ",
      icon: <Settings className="h-4 w-4" />,
      items: [
        { title: "User Management", link: "settings/users", icon: "" },
        { title: "System Settings", link: "settings/system", icon: "" },
        {
          title: "Third-Party Integrations",
          link: "settings/integrations",
          icon: "",
        },
        { title: "Document Library", link: "settings/documents", icon: "" },
        { title: "Knowledge Base", link: "settings/knowledgebase", icon: "" },
        { title: "Help & Support", link: "settings/help", icon: "" },
        { title: "Mobile App", link: "settings/mobileapp", icon: "" },
      ],
    },
  ];
};
