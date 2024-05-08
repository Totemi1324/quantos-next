import Footer from "@/components/layout/Footer";
import GroupAccessCard from "@/components/GroupAccessCard";

import { ValidLocale, getTranslator } from "@/i18n";

export default async function Home({
    params,
  }: {
    params: { locale: string; };
  }) {
    const validLocale = params.locale as ValidLocale
    const translate = await getTranslator(validLocale);
  
    return (
      <>
        <main className="flex flex-col items-center justify-center p-12 sm:p-24 w-full space-y-12">
          <GroupAccessCard locale={validLocale} translate={translate}/>
        </main>
        <Footer locale={validLocale} translate={translate}/>
      </>
    );
  }
  