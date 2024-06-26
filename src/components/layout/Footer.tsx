import Link from "next/link";

import { Separator } from "../shadcn-ui/separator";
import LanguageSelector from "../LanugageSelector";
import ResponsiveLogo from "../ResponsiveLogo";

import { LocalizedProps } from "@/i18n";

export default function Footer(params: LocalizedProps) {
    return (
        <>
            <Separator />
            <footer className="grid max-sm:grid-rows-2 md:grid-cols-2 px-12 sm:px-24 py-12 gap-4">
                <div className="flex flex-col justify-start items-left gap-4">
                    <Link href="https://quantos.online/">
                        <ResponsiveLogo />
                    </Link>
                    <p className="text-muted-foreground">© 2024 Tamas Nemes. <span>{params.translate("footer.copyrightNote")}</span>&nbsp;
                        <Link href="https://www.fz-juelich.de/en/ias/jsc" className="underline">Jülich Supercomputing Centre</Link>
                    </p>
                </div>
                <div className="flex justify-center md:justify-end items-center gap-4">
                    <p>{params.translate("footer.languageLabel")}</p>
                    <LanguageSelector />
                </div>
            </footer>
        </>
    );
}