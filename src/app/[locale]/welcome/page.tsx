import PageContent from "./PageContent";
import Footer from "@/components/layout/Footer";
import { WelcomeLocalizedStrings } from "@/lib/types";

import { ValidLocale, getTranslator } from "@/i18n";
import { validateUser } from "@/lib/validateUser";
import { createUserEntryIfMissing } from "./actions";

export default async function Home({
  params,
}: {
  params: { locale: string; };
}) {
  const user = await validateUser();
  await createUserEntryIfMissing(user);

  const validLocale = params.locale as ValidLocale
  const translate = await getTranslator(validLocale);

  const localizedStrings: WelcomeLocalizedStrings = {
    nextPageButton: translate("welcome.nextPageButton"),
    previousPageButton: translate("welcome.previousPageButton"),
    finishButton: translate("welcome.finishButton"),
    welcomePage: {
      title: translate("welcome.welcomePage.title"),
      question: translate("welcome.welcomePage.question")
    },
    namePage: {
      title: translate("welcome.namePage.title"),
      question: translate("welcome.namePage.question"),
      placeholder: translate("welcome.namePage.placeholder")
    },
    accountTypePage: {
      titleWithName: translate("welcome.accountTypePage.titleWithName"),
      titleWithoutName: translate("welcome.accountTypePage.titleWithoutName"),
      chooseOption: translate("welcome.accountTypePage.chooseOption"),
      optionStudentTitle: translate("welcome.accountTypePage.optionStudentTitle"),
      optionStudentDescription: translate("welcome.accountTypePage.optionStudentDescription"),
      optionTeacherTitle: translate("welcome.accountTypePage.optionTeacherTitle"),
      optionTeacherDescription: translate("welcome.accountTypePage.optionTeacherDescription")
    },
    agePage: {
      title: translate("welcome.agePage.title"),
      question: translate("welcome.agePage.question"),
      optionNotSpecified: translate("welcome.agePage.optionNotSpecified"),
      optionTeen: translate("welcome.agePage.optionTeen"),
      optionYoungAdult: translate("welcome.agePage.optionYoungAdult"),
      optionAdult: translate("welcome.agePage.optionAdult"),
      optionElder: translate("welcome.agePage.optionElder")
    },
    experiencePage: {
      title: translate("welcome.experiencePage.title"),
      question: translate("welcome.experiencePage.question"),
      optionBeginner: translate("welcome.experiencePage.optionBeginner"),
      optionAdvanced: translate("welcome.experiencePage.optionAdvanced"),
      optionSkilled: translate("welcome.experiencePage.optionSkilled")
    },
    finalPage: {
      title: translate("welcome.finalPage.title")
    }
  }

  return (
    <>
      <PageContent strings={localizedStrings} userId={user.id} locale={validLocale}/>
      {/*<Footer locale={validLocale} translate={translate} />*/}
    </>
  );
}