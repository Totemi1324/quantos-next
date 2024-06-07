import Layout from "../Layout";
import PageContent from "./PageContent";

import { ValidLocale, getTranslator } from "@/i18n";
import { validateUser } from "@/lib/validateUser";

export default async function Home({
  params,
}: {
  params: { locale: string; };
}) {
  const user = await validateUser();
  const validLocale = params.locale as ValidLocale
  const translate = await getTranslator(validLocale);

  return (
    <Layout locale={validLocale} translate={translate} withButtons={true}>
        <PageContent
            locale={validLocale}
            userId={user.id}
            strings={{
                pageHeading: translate("stats.pageHeading"),
                percentFormat: translate("stats.percentFormat"),
                totalProgressTitle: translate("stats.totalProgress.title"),
                totalProgressDescription: translate("stats.totalProgress.description"),
            }}
        />
    </Layout>
  );
}