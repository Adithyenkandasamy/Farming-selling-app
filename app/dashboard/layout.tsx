import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import DashboardNav from "@/components/dashboard/nav";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  if (!session) {
    redirect("/auth/login");
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <DashboardNav />
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
}