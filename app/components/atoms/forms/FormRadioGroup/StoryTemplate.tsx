import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "../../Button";
import { Story } from "./FormRadioGroup.stories";
import { createRadioGroupSchema } from "./createRadioGroupSchema";
import { FormRadioGroup } from "./FormRadioGroup";
import { getErrorMessage } from "@/utils";

export const useStoryTemplate = (
  options: {
    defaultValue: null | number | string;
    required: boolean;
    disabled: boolean;
  },
  args: any
) => {
  const { defaultValue, required, disabled } = options;

  const schema = z.object({
    condition: createRadioGroupSchema({
      required,
      requiredMessage: getErrorMessage({ type: "required" }),
    }),
  });

  type FormSchemaType = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<{ condition: number | null | string }, any, FormSchemaType>({
    defaultValues: {
      condition: defaultValue,
    },
    mode: "onChange",
    resolver: zodResolver(schema),
  });

  const render = (
    <form onSubmit={handleSubmit(console.warn)}>
      <FormRadioGroup
        {...args}
        {...register("condition")}
        errorMessage={errors.condition && errors.condition.message}
        reset={() => setValue("condition", null)}
        required={required}
        disabled={disabled}
      />
      <Button
        className="mt-2"
        element={{
          elementType: "button",
          buttonType: "submit",
        }}>
        データ確認
      </Button>
    </form>
  );

  return render;
};

export const BaseTemplate: Story["render"] = (args: any) => {
  const render = useStoryTemplate(
    {
      defaultValue: null,
      required: false,
      disabled: false,
    },
    args
  );
  return render;
};

export const RequiredTemplate: Story["render"] = (args: any) => {
  const render = useStoryTemplate(
    {
      defaultValue: null,
      required: true,
      disabled: false,
    },
    args
  );
  return render;
};

export const DisabledTemplate: Story["render"] = (args: any) => {
  const render = useStoryTemplate(
    {
      defaultValue: "1",
      required: false,
      disabled: true,
    },
    args
  );
  return render;
};

export const EditTemplate: Story["render"] = (args: any) => {
  const render = useStoryTemplate(
    {
      defaultValue: "1",
      required: false,
      disabled: false,
    },
    args
  );
  return render;
};
