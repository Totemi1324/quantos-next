import { ReactNode } from "react";

import TopNavigation from "@/components/layout/TopNavigation";
import SideNavigation from "@/components/layout/SideNavigation";
import BottomNavigation from "@/components/layout/BottomNavigation";

import { LocalizedProps } from "@/i18n";


type LayoutProps = LocalizedProps & {
    withButtons: boolean,
    children: ReactNode,
}

export default function Layout({ locale, translate, withButtons, children}: LayoutProps) {
    return (
        <div className="flex h-screen overflow-hidden">
            <SideNavigation locale={locale} translate={translate}/>
            <div className="flex flex-col flex-1">
                <TopNavigation withButtons={withButtons} locale={locale} translate={translate} />
                <main className="flex-1 overflow-y-auto p-6 sm:p-20">
                    { children }
                </main>
                <BottomNavigation locale={locale} translate={translate}/>
                <div className="h-32 md:h-0"></div>
            </div>
        </div>
    );
}