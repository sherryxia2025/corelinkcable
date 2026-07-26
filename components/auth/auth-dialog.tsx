import { Mail } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";

export default function AuthDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const t = useTranslations("auth");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="text-gray-900 dark:text-[#E5E5E5] dark:bg-[#2A2A2A]"
        showCloseButton
      >
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold dark:text-[#E5E5E5]">
            {t("signIn")}
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="text-sm dark:text-[#A0A0A0]">
          {t("signInDescription")}
        </DialogDescription>
        <Button
          asChild
          className="h-11 w-full bg-[#7765ff] text-white hover:bg-[#6554eb]"
        >
          <Link href="/login" onClick={() => onOpenChange(false)}>
            <Mail className="size-4" />
            {t("signInWithEmail")}
          </Link>
        </Button>
      </DialogContent>
    </Dialog>
  );
}
