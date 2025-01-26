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

export const formatClientData = (values: TClientSchema) => {
  values = clientSchema.cast(values);
  values.name = values.name.charAt(0).toUpperCase() + values.name.slice(1).toLowerCase();
  values.surname = values.surname.charAt(0).toUpperCase() + values.surname.slice(1).toLowerCase();
  values.secondName = values.secondName
    ? values.secondName.charAt(0).toUpperCase() + values.secondName.slice(1).toLowerCase()
    : undefined;
  return values;
};
