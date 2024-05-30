import Image from "next/image";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

export default function Header() {
  return (
    <div className="flex justify-between px-5 pt-6">
      <Image src="/logo.png" height={30} width={100} alt="FSW Foods" />
      <Button
        size="icon"
        variant="outline"
        className="border-none bg-transparent"
      >
        <MenuIcon />
      </Button>
    </div>
  );
}