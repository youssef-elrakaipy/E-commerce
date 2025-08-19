export default function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className="bg-[#00ac00] text-white mt-[20px] h-[40px] w-[150px] cursor-pointer rounded-[5px] hover:bg-green-800 transition duration-300
        disabled:bg-gray-400 disabled:cursor-not-allowed "
    >
      {children}
    </button>
  );
}
