import './InputComponent.css';
import PropTypes from 'prop-types';

const InputComponent = ({
  label,
  id,
  type,
  name,
  value,
  placeholder,
  className,
  onChange,
}) => {
  return (
    <div className="inputComponent-wrapper">
      <div className="input-icon-wrapper">
        {label && <label htmlFor={`input-field-${label}`}>{label}</label>}
      </div>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        className={className}
        onChange={onChange}
      />
    </div>
  );
};
InputComponent.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
};
export default InputComponent;
