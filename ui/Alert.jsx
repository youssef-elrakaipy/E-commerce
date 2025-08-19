export default function Alert({ alert }) {
  return (
    <p
      role="alert"
      className="text-red-800 text-sm bg-red-100 px-[20px] py-[15px] rounded-[7px]"
    >
      {alert}
    </p>
  );
}
