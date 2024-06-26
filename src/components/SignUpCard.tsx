import Link from "next/link";

import SignUpForm from "./forms/SignUpForm";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/shadcn-ui/card"
import { LocalizedProps } from "@/i18n";

export default function SignUpCard(props: LocalizedProps) {
    return (
        <Card className="max-w-[350px] w-full">
            <CardHeader>
                <CardTitle>{props.translate("auth.signup.title")}</CardTitle>
                <CardDescription>
                    {props.translate("auth.signup.logInHint")}&nbsp;
                    <Link href="/auth/login" className="underline">{props.translate("auth.logInButtonLabel")}</Link>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <SignUpForm
                    locale={props.locale}
                    emailLabel={props.translate("auth.emailLabel")}
                    passwordLabel={props.translate("auth.passwordLabel")}
                    passwordConfirmLabel={props.translate("auth.passwordConfirmLabel")}
                    passwordsNotMatchingError={props.translate("auth.passwordsNotMatchingError")}
                    passwordDescription={props.translate("auth.passwordDescription")}
                    showPasswordTooltip={props.translate("auth.showPasswordTooltip")}
                    hidePasswordTooltip={props.translate("auth.hidePasswordTooltip")}
                    submitLabel={props.translate("auth.signUpButtonLabel")}
                />
            </CardContent>
        </Card>
    );
}