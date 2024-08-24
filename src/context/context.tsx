import React from "react";
import {
  FieldErrors,
  useForm,
  UseFormGetValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { formSchemaOne } from "@/lib/schema";
import { yupResolver } from "@hookform/resolvers/yup";

export interface FormSchemaOne {
  nome: string;
  email: string;
  telefone: string;
  numero_conta_contrato: string;
}

export interface FormSchemaTwo {
  nome: string;
  email: string;
  telefone: string;
  numero_conta_contrato: string;
}

export interface FormSchemaThree {
  nome: string;
  email: string;
  telefone: string;
  numero_conta_contrato: string;
}

interface IContext {
  errorsOne: FieldErrors<FormSchemaOne>;
  getValuesOne: UseFormGetValues<FormSchemaOne>;
  handleSubmitOne: UseFormHandleSubmit<FormSchemaOne, undefined>;
  registerFormOne: UseFormRegister<FormSchemaOne>;

  errorsTwo: FieldErrors<FormSchemaTwo>;
  getValuesTwo: UseFormGetValues<FormSchemaTwo>;
  handleSubmitTwo: UseFormHandleSubmit<FormSchemaTwo, undefined>;
  registerFormTwo: UseFormRegister<FormSchemaTwo>;

  errorsThree: FieldErrors<FormSchemaThree>;
  getValuesThree: UseFormGetValues<FormSchemaThree>;
  handleSubmitThree: UseFormHandleSubmit<FormSchemaThree, undefined>;
  registerFormThree: UseFormRegister<FormSchemaThree>;
}

export const Context = React.createContext<IContext>({} as IContext);

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const {
    register: registerFormThree,
    handleSubmit: handleSubmitThree,
    formState: { errors: errorsThree },
    getValues: getValuesThree,
  } = useForm<FormSchemaThree>({
    resolver: yupResolver(formSchemaOne),
  });

  const {
    register: registerFormTwo,
    handleSubmit: handleSubmitTwo,
    formState: { errors: errorsTwo },
    getValues: getValuesTwo,
  } = useForm<FormSchemaTwo>({
    resolver: yupResolver(formSchemaOne),
  });

  const {
    register: registerFormOne,
    handleSubmit: handleSubmitOne,
    formState: { errors: errorsOne },
    getValues: getValuesOne,
  } = useForm<FormSchemaOne>({
    resolver: yupResolver(formSchemaOne),
  });

  return (
    <Context.Provider
      value={{
        errorsOne,
        getValuesOne,
        handleSubmitOne,
        registerFormOne,

        errorsTwo,
        getValuesTwo,
        handleSubmitTwo,
        registerFormTwo,

        errorsThree,
        getValuesThree,
        handleSubmitThree,
        registerFormThree,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useGlobalContext = () => {
  const context = React.useContext(Context);
  if (!context) {
    throw new Error("Error in useGlobalContext");
  }
  return context;
};
