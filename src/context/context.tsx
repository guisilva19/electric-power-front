import React, { Dispatch, SetStateAction, useState } from "react";
import {
  FieldErrors,
  useForm,
  UseFormGetValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import {
  formSchemaOne,
  formSchemaThree,
  formSchemaTwoNotMagnification,
  formSchemaTwoWithMagnification,
} from "@/lib/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  FormSchemaOne,
  FormSchemaThree,
  FormSchemaTwo,
  FormSchemaTwoMag,
} from "@/interface/interface";
import useHomologation from "@/hook/useHomologation/useHomologation";

interface IContext {
  errorsOne: FieldErrors<FormSchemaOne>;
  getValuesOne: UseFormGetValues<FormSchemaOne>;
  handleSubmitOne: UseFormHandleSubmit<FormSchemaOne, undefined>;
  registerFormOne: UseFormRegister<FormSchemaOne>;

  errorsTwo: FieldErrors<FormSchemaTwo>;
  getValuesTwo: UseFormGetValues<FormSchemaTwo>;
  handleSubmitTwo: UseFormHandleSubmit<FormSchemaTwo, undefined>;
  registerFormTwo: UseFormRegister<FormSchemaTwo>;

  errorsTwoMag: FieldErrors<FormSchemaTwoMag>;
  getValuesTwoMag: UseFormGetValues<FormSchemaTwoMag>;
  handleSubmitTwoMag: UseFormHandleSubmit<FormSchemaTwoMag, undefined>;
  registerFormTwoMag: UseFormRegister<FormSchemaTwoMag>;

  errorsThree: FieldErrors<FormSchemaThree>;
  getValuesThree: UseFormGetValues<FormSchemaThree>;
  handleSubmitThree: UseFormHandleSubmit<FormSchemaThree, undefined>;
  registerFormThree: UseFormRegister<FormSchemaThree>;

  magnification: boolean;
  hasInstalled: boolean;

  setMagnification: Dispatch<SetStateAction<boolean>>;
  setHasInstalled: Dispatch<SetStateAction<boolean>>;

  handleHomologation: (data: any) => void;
}

export const Context = React.createContext<IContext>({} as IContext);

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [magnification, setMagnification] = useState<boolean>(false);
  const [hasInstalled, setHasInstalled] = useState<boolean>(true);

  const { register } = useHomologation();

  const handleHomologation = async (data: any) => {
    const body = {
      ...getValuesOne(),
      ...getValuesTwo(),
      ...getValuesTwoMag(),
      ...getValuesThree(),
      ...data,
      ampliacao: magnification,
    };

    await register(body);
  };

  const {
    register: registerFormThree,
    handleSubmit: handleSubmitThree,
    formState: { errors: errorsThree },
    getValues: getValuesThree,
  } = useForm<FormSchemaThree>({
    resolver: yupResolver(formSchemaThree),
  });

  const {
    register: registerFormTwoMag,
    handleSubmit: handleSubmitTwoMag,
    formState: { errors: errorsTwoMag },
    getValues: getValuesTwoMag,
  } = useForm<FormSchemaTwoMag>({
    resolver: yupResolver(formSchemaTwoWithMagnification),
  });

  const {
    register: registerFormTwo,
    handleSubmit: handleSubmitTwo,
    formState: { errors: errorsTwo },
    getValues: getValuesTwo,
  } = useForm<FormSchemaTwo>({
    resolver: yupResolver(formSchemaTwoNotMagnification),
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

        errorsTwoMag,
        getValuesTwoMag,
        handleSubmitTwoMag,
        registerFormTwoMag,

        errorsThree,
        getValuesThree,
        handleSubmitThree,
        registerFormThree,

        hasInstalled,
        magnification,

        setHasInstalled,
        setMagnification,

        handleHomologation,
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
