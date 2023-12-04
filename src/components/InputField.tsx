import { useTranslation } from "react-i18next";

interface InputFieldProps {
  id: string;
  type: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  minLength?: number;
  maxLength?: number;
}

export default function InputField({
  id,
  type,
  name,
  value,
  placeholder,
  onChange,
  minLength,
  maxLength,
}: InputFieldProps) {
  const { t } = useTranslation();

  return (
    <div className="contact-form-field">
      <label htmlFor={id} className="contact-form-label">
        {t(name)}
      </label>
      <input
        className="contact-form-input"
        type={type}
        id={id}
        name={name}
        value={value}
        required
        placeholder={t(placeholder)}
        onChange={onChange}
        minLength={minLength}
        maxLength={maxLength}
      />
    </div>
  );
}
