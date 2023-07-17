export default function Input(props) {
  return (
    <div className="m-2 flex flex-col gap-2">
      <label className="text-lg text-gray-500" htmlFor={props.name}>
        {props.label}
      </label>
      <input
        {...props}
        className="p-2 border border-gray-500 rounded shadow-sm"
      />
    </div>
  );
}
