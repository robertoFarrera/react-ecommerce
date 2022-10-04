import { FormInputLabel, Group, Input } from './FormInput.styles.jsx';

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />

      {label && (
        <FormInputLabel
          shrink={otherProps.value.length}
          htmlFor={otherProps.id}
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
