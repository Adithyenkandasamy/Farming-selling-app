import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import AdminDashboard from "@/components/dashboard/admin-dashboard";
import FarmerDashboard from "@/components/dashboard/farmer-dashboard";
import CustomerDashboard from "@/components/dashboard/customer-dashboard";

export default async function DashboardPage() {
  const session = await getServerSession();
  
  if (!session) {
    redirect("/auth/login");
  }

  const role = session.user.role;

  return (
    <div>
      {role === "ADMIN" && <AdminDashboard />}
      {role === "FARMER" && <FarmerDashboard />}
      {role === "CUSTOMER" && <CustomerDashboard />}
    </div>
  );
}