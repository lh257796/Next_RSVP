/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Attendee } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AttendeeUpdateFormInputValues = {
    firstName?: string;
    lastName?: string;
    emai?: string;
};
export declare type AttendeeUpdateFormValidationValues = {
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    emai?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AttendeeUpdateFormOverridesProps = {
    AttendeeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    emai?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AttendeeUpdateFormProps = React.PropsWithChildren<{
    overrides?: AttendeeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    attendee?: Attendee;
    onSubmit?: (fields: AttendeeUpdateFormInputValues) => AttendeeUpdateFormInputValues;
    onSuccess?: (fields: AttendeeUpdateFormInputValues) => void;
    onError?: (fields: AttendeeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AttendeeUpdateFormInputValues) => AttendeeUpdateFormInputValues;
    onValidate?: AttendeeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AttendeeUpdateForm(props: AttendeeUpdateFormProps): React.ReactElement;
