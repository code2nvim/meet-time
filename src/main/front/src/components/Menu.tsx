export default function Menu() {
  return (
    <>
      <button
        type="button"
        className="flex aspect-square flex-col items-center justify-evenly rounded-md border bg-gray-700 p-1"
      >
        <span className="block h-0.5 w-5 bg-white"></span>
        <span className="block h-0.5 w-5 bg-white"></span>
        <span className="block h-0.5 w-5 bg-white"></span>
      </button>
      <div className="absolute">
        <section></section>
      </div>
    </>
  );
}
