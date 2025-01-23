import type { InferType } from "yup";
import { array, number, object, string } from "yup";

export const clientSchema = object({
  surname: string().required("Введите фамилию").trim(),
  name: string().required("Введите имя").trim(),
  secondName: string().optional().trim(),
  contacts: array()
    .of(
      object({
        id: number().required(),
        contactType: string().required(),
        contactValue: string().required("Поле не может быть пустым"),
      }),
    )
    .default([]),
});

export type TClientSchema = InferType<typeof clientSchema>;

export const validateClientData = (values: InferType<typeof clientSchema>) => {
  values = clientSchema.cast(values);
  return values;
};
