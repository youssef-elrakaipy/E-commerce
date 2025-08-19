export default function Input({ type, name, value, onChange, ...props }) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full border p-1.5 rounded-[5px] border-[#7a7a7ad6] my-2"
      {...props}
    />
  );
}
