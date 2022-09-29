import * as Yup from "yup";

export interface ApprDataTypes {
  apprenticeshipTitle: string;
  companyDescription: string;
  apprenticeshipDescription: string;
  photo: File | null;
}

export interface ApprErrorTypes {
  apprenticeshipTitle: string | null;
  companyDescription: string | null;
  apprenticeshipDescription: string | null;
}

export const validationSchemaA = Yup.object().shape({
  apprenticeshipTitle: Yup.string().max(40, "Thats a little too long"),
  companyDescription: Yup.string().max(500, "limit 500"),
  apprenticeshipDescription: Yup.string().max(400, "limit 500"),
});
