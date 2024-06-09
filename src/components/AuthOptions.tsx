import LoginOption from "@/components/LoginOption";
import { Card } from "@/components/shadcn-ui/card";

import { LocalizedProps } from "@/i18n";

export default async function AuthOptions(props: LocalizedProps) {

  return (
    <Card className="max-w-lg w-full space-y-12 p-10">
      <LoginOption
        optionText={props.translate("auth.signUpDescription")}
        buttonText={props.translate("auth.signUpButtonLabel")}
        target={`/${props.locale}/auth/signup`}
      />
      <LoginOption
        optionText={props.translate("auth.logInDescription")}
        buttonText={props.translate("auth.logInButtonLabel")}
        target={`/${props.locale}/auth/login`}
      />
      <LoginOption
        optionText={props.translate("auth.groupAccessDescription")}
        buttonText={props.translate("auth.groupAccessButtonLabel")}
        target={`/${props.locale}/auth/group-access`}
      />
    </Card>
  );
}