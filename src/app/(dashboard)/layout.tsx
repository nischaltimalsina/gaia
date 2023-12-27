import { DashboardLayout } from "@/components/layout";
import React from "react";

const Dashboard = ({ children }: { children: React.ReactNode }) => {
  return <DashboardLayout>{children}</DashboardLayout>;
};

export default Dashboard;
