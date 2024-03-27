import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormTextBox } from "@/components/atoms/forms/FormTextBox";
import { RenderStepActions } from "@/components/layouts/StepperLayout/useStepper";
import {
  FormRadioGroup,
  createRadioGroupSchema,
} from "@/components/atoms/forms/FormRadioGroup";
import {
  NicknameDefaultSelect,
  NicknameSelections,
} from "@/features/torisan/constants/nickname";
import {
  FormSelect,
  createSelectSchema,
} from "@/components/atoms/forms/FormSelect";
import { GenderSelections, SpecieSelections } from "@ito/common";
import {
  FormSelectMonth,
  createSelectMonthSchema,
} from "@/components/atoms/forms/FormSelectMonth";
import { createTextBoxSchema } from "@/components/atoms/forms/FormTextBox/createTextBoxSchema";
import { getErrorMessage } from "@/utils";
import { Alert } from "@/components/molecules/Alert";

const schema = z.object({
  name: createTextBoxSchema({
    required: true,
    requiredMessage: getErrorMessage({ type: "required" }),
    max: 20,
    requiredMaxMessage: getErrorMessage({ type: "max", value: 20 }),
  }),
  nickname: createRadioGroupSchema({
    required: true,
    requiredMessage: getErrorMessage({ type: "required" }),
  }),
  specie_type: createSelectSchema({
    required: true,
    requiredMessage: getErrorMessage({ type: "required" }),
  }),
  gender_type: createRadioGroupSchema({
    required: true,
    requiredMessage: getErrorMessage({ type: "required" }),
  }),
  birth_date: createSelectMonthSchema({
    required: true,
    requiredMessage: getErrorMessage({ type: "required" }),
  }),
});

export type FormSubmitType = z.infer<typeof schema>;
export type FormEditType = {
  name: string;
  nickname: number | string | null;
  specie_type: number | null | string;
  gender_type: number | null | string;
  birth_date: Date | null;
};

type Props = {
  renderStepperActions: RenderStepActions;
  onSubmit: (data: FormSubmitType) => void;
  initialValue: FormSubmitType | null;
};
export const StepperFormBasic: React.FC<Props> = ({
  renderStepperActions,
  onSubmit,
  initialValue,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<FormEditType, any, FormSubmitType>({
    defaultValues:
      initialValue != null
        ? {
            name: initialValue.name,
            nickname:
              initialValue.nickname == null
                ? undefined
                : initialValue.nickname.toString(),
            specie_type: initialValue.specie_type.toString(),
            gender_type: initialValue.gender_type
              ? initialValue.gender_type.toString()
              : null,
            birth_date: initialValue.birth_date,
          }
        : {
            name: "",
            nickname: NicknameDefaultSelect,
            specie_type: null,
            gender_type: null,
            birth_date: null,
          },
    mode: "onChange",
    resolver: zodResolver(schema),
  });

  return (
    <div className="flex flex-col space-y-10">
      <Alert
        message="基本情報は後から変更することはできません"
        type="warning"
      />
      <FormTextBox
        label="名前"
        inputType="text"
        {...register("name")}
        required
        errorMessage={errors.name && errors.name.message}
      />
      <FormRadioGroup
        label="ニックネーム"
        selections={NicknameSelections}
        {...register("nickname")}
        required
        errorMessage={errors.nickname && errors.nickname.message}
      />
      <FormSelect
        label="種類"
        selections={SpecieSelections}
        {...register("specie_type")}
        required
        errorMessage={errors.specie_type && errors.specie_type.message}
      />
      <FormRadioGroup
        label="種類"
        selections={GenderSelections}
        {...register("gender_type")}
        required
        errorMessage={errors.gender_type && errors.gender_type.message}
      />
      <FormSelectMonth
        label="誕生日"
        {...register("birth_date")}
        onChange={(value: Date | null) => {
          setValue("birth_date", value);
        }}
        initialValue={getValues("birth_date")}
        required
        errorMessage={errors.birth_date && errors.birth_date.message}
      />
      <div className="pt-2">
        {/** 第一引数にはisValidを利用したいが、FormSelectMonthのonChange/triggerがうまくいかないため一旦断念 */}
        {renderStepperActions(true, {
          onClickNext: (onNext: () => void) => {
            handleSubmit((data) => {
              onSubmit(data);
              onNext();
            })();
          },
        })}
      </div>
    </div>
  );
};
