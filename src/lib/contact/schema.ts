import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string({ required_error: "El nombre es obligatorio" })
    .trim()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(100, "El nombre no puede exceder 100 caracteres"),

  email: z
    .string({ required_error: "El correo electrónico es obligatorio" })
    .trim()
    .email("El formato de correo electrónico no es válido")
    .max(255, "El correo electrónico no puede exceder 255 caracteres")
    .toLowerCase(),

  subject: z
    .string({ required_error: "El asunto es obligatorio" })
    .trim()
    .min(3, "El asunto debe tener al menos 3 caracteres")
    .max(150, "El asunto no puede exceder 150 caracteres"),

  message: z
    .string({ required_error: "El mensaje es obligatorio" })
    .trim()
    .min(10, "El mensaje debe contener al menos 10 caracteres")
    .max(3000, "El mensaje no puede exceder 3000 caracteres"),

  turnstileToken: z
    .string({ required_error: "El token de seguridad anti-bot es requerido" })
    .min(1, "El token de seguridad anti-bot es requerido"),

  lang: z.enum(["es", "en"]).default("es"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export type ValidationErrorMap = Record<string, string>;

/**
 * Valida los datos del formulario y formatea los errores si existen
 */
export function validateContactForm(input: unknown):
  | { success: true; data: ContactFormData }
  | { success: false; errors: ValidationErrorMap } {
  const result = contactFormSchema.safeParse(input);

  if (result.success) {
    return { success: true, data: result.data };
  }

  const errors: ValidationErrorMap = {};
  for (const issue of result.error.issues) {
    const field = issue.path[0]?.toString() || "general";
    if (!errors[field]) {
      errors[field] = issue.message;
    }
  }

  return { success: false, errors };
}
