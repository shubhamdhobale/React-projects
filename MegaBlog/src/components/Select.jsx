import React ,{ useId } from "react"

const Select = ({
  options,
  labels,
  className,
  ...props
}, ref) => {
  const Id = useId();
  return (
    <div className="w-full">
      {labels && <label htmlFor={Id} className=""></label>}
      <select
      {...props}
      id={Id}
      ref={ref}
      className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
      >
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export default React.forwardRef(Select)