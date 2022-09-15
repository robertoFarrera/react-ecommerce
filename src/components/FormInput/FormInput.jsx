import './FormInput.scss';

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className='group'>
      <input className='form-input' {...otherProps} />

      {label && (
        <label
          className={`form-input-label ${
            otherProps.value.length ? 'shrink' : ''
          }`}
          htmlFor={otherProps.id}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
