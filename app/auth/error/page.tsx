"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function AuthError() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center text-red-600">Authentication Error</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-center text-gray-600 dark:text-gray-300">
            {error === "Configuration" 
              ? "There is a problem with the server configuration."
              : "An error occurred during authentication. Please try again."}
          </p>
          <div className="flex justify-center">
            <Link href="/auth/login">
              <Button>Return to Login</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}