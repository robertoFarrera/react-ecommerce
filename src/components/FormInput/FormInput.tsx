import { FC, InputHTMLAttributes } from 'react';
import { FormInputLabel, Group, Input } from './FormInput.styles';

type FormInputProps = { label: string } & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />

      {label && (
        <FormInputLabel
          shrink={Boolean(
            otherProps.value &&
              typeof otherProps.value === 'string' &&
              otherProps.value.length
          )}
          htmlFor={otherProps.id}
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;