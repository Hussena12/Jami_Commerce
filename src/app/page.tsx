import { MobileNavbar } from "@/components/layout/MobileNavbar";
import { UserMobileNavbar } from "@/components/layout/UserMobileNavbar";
import Link from "next/link";

export const metadata = {
  title: "Jami Commerce",
  icon: "/jami_logo",
};

export default function Home() {
  return (
    <div className="font-extrabold text-4xl">
      we are heavy
      <MobileNavbar />
      <UserMobileNavbar />
    </div>
  );
}
