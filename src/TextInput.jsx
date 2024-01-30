import React from "react";

const TextInput = React.forwardRef(
  ({ type, placeholder, name, register, error }, ref) => {
    return (
      <div className="input">
        <input
          type={type}
          placeholder={placeholder}
          ref={ref}
          name={name}
          {...register}
          aria-invalid={error ? "true" : false}
        />
        {
            error && <span>{error}</span>
        }
      </div>
    );
  }
);

export default TextInput;
