import Link from "next/link";
import { Info } from "lucide-react";
import { LocalizedProps } from "@/i18n";

import GroupAccessForm from "./forms/GroupAccessForm";
import {
    Card,
    CardFooter,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/shadcn-ui/card"


export default function GroupAccessCard(props: LocalizedProps) {
    return (
        <Card className="max-w-[350px] w-full">
            <CardHeader>
                <CardTitle>{props.translate("auth.signup.title")}</CardTitle>
                <CardDescription>
                    {props.translate("auth.groupaccess.instructions")}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <GroupAccessForm
                    accessCodeLabel={props.translate("auth.accessCodeLabel")}
                    submitLabel={props.translate("auth.groupaccess.enterButtonLabel")}
                    errorTitle={props.translate("error.dialogTitle")}
                    errorCloseButton={props.translate("error.dialogCloseButton")}
                    errorTextUnknownError={props.translate("error.unknownErrorDialogText")}
                    errorTextCodeNotFound={props.translate("auth.groupaccess.errorCodeNotFound")}
                    errorTextCodeNotActive={props.translate("auth.groupaccess.errorCodeNotActive")}
                    errorTextCodeExpired={props.translate("auth.groupaccess.errorCodeExpired")}
                    locale={props.locale}
                />
            </CardContent>
            <CardFooter className="flex flex-col gap-4 items-start">
                <div>
                    {props.translate("auth.groupaccess.logInHint")}&nbsp;
                    <Link href="/auth/login" className="underline">{props.translate("auth.logInButtonLabel")}</Link>
                </div>
                <div className="flex gap-4 items-top">
                    <Info className="flex-shrink-0 h-[1.2rem] w-[1.2rem] mt-1" />
                    <p className="flex-grow">{props.translate("auth.groupaccess.accountHint")}</p>
                </div>
            </CardFooter>
        </Card>
    );
}