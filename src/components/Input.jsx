import { forwardRef } from "react";

const Input = forwardRef(function Input({ textarea, label, ...props }, ref) {
  return (
    <p>
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {textarea ? (
        <textarea
          ref={ref}
          {...props}
          className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
        />
      ) : (
        <input
          ref={ref}
          {...props}
          className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
        />
      )}
    </p>
  );
});

export default Input;
