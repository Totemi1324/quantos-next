"use client";

import { useRef, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { signup } from "@/app/[locale]/auth/signup/actions";

import { Loader2 } from "lucide-react";
import PasswordAnimation, { PasswordAnimationRef } from "../PasswordAnimation";
import PasswordFormField from "./PasswordFormField";
import { Input } from "@/components/shadcn-ui/input"
import { Button } from "@/components/shadcn-ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/shadcn-ui/form"
import { showPasswordAtomZero, showPasswordAtomOne } from "@/stores/showPasswordStore";
import { ValidLocale } from "@/i18n";

type SignUpFormProps = {
    emailLabel: string,
    passwordLabel: string,
    passwordConfirmLabel: string,
    passwordsNotMatchingError: string,
    passwordDescription: string,
    showPasswordTooltip: string,
    hidePasswordTooltip: string,
    submitLabel: string,
    locale: ValidLocale,
}

const formSchema = z.object({
    email: z.string().email().min(5, {
        message: "Please enter a valid email address.",
    }),
    password: z.string().min(10, {
        message: "Your password must be at least 10 characters long.",
    }),
    confirmedPassword: z.string(),
})

export default function SignUpForm(props: SignUpFormProps) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
            confirmedPassword: "",
        },
    })

    const passwordAnimationRef = useRef<PasswordAnimationRef>(null);
    const passwordAnimationRef2 = useRef<PasswordAnimationRef>(null);
    const [passwordsNotMatching, setPasswordsNotMatching] = useState(false);
    const [loading, setLoading] = useState(false);

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setLoading(true);
        if (values.password !== values.confirmedPassword) {
            setPasswordsNotMatching(true);
            onFormError();
            return;
        }

        setPasswordsNotMatching(false);
        onFormValid();
        await signup(values.email, values.password, props.locale);
        setLoading(false);
    }

    const onInvalidSubmit = () => {
        if (passwordsNotMatching) {
            setPasswordsNotMatching(false);
        }
        onFormError();
    }

    const onPasswordClick = (event: any) => {
        passwordAnimationRef.current?.firePasswordTyping();
        passwordAnimationRef2.current?.firePasswordTyping();
    };
    const onFormError = () => {
        passwordAnimationRef.current?.fireFormInvalid();
        passwordAnimationRef2.current?.fireFormInvalid();
    }
    const onFormValid = () => {
        passwordAnimationRef.current?.fireFormValid();
        passwordAnimationRef2.current?.fireFormValid();
    }

    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit, onInvalidSubmit)} className="w-full space-y-4">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{props.emailLabel}</FormLabel>
                                <FormControl>
                                    <Input type="email" {...field} />
                                </FormControl>
                                <FormDescription />
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="sm:hidden">
                        <PasswordAnimation
                            size={300}
                            ref={passwordAnimationRef2}
                        />
                    </div>
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <PasswordFormField
                                label={props.passwordLabel}
                                description={props.passwordDescription}
                                showPasswordTooltip={props.showPasswordTooltip}
                                hidePasswordTooltip={props.hidePasswordTooltip}
                                field={field}
                                atom={showPasswordAtomZero}
                                onClick={onPasswordClick}
                            />
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="confirmedPassword"
                        render={({ field }) => (
                            <PasswordFormField
                                label={props.passwordConfirmLabel}
                                description={undefined}
                                showPasswordTooltip={props.showPasswordTooltip}
                                hidePasswordTooltip={props.hidePasswordTooltip}
                                field={field}
                                atom={showPasswordAtomOne}
                                onClick={onPasswordClick}
                            />
                        )}
                    />
                    {passwordsNotMatching ? <p className="text-destructive text-sm">
                        {props.passwordsNotMatchingError}
                    </p> : <></>}
                    <div className="flex justify-end mt-15">
                        <Button type="submit" disabled={loading}>
                            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <></>}
                            {props.submitLabel}
                        </Button>
                    </div>
                </form>
            </Form>
            <div className="mt-5 hidden sm:block">
                <PasswordAnimation
                    size={300}
                    ref={passwordAnimationRef}
                />
            </div>
        </>
    );
}
