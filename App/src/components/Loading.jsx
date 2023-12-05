import { square } from "ldrs";

function Loading() {
  square.register();

  return (
    <div className="min-w-[350px] lg:w-[1440px] min-h-screen grid place-content-center text-center bg-very-dark-blue gap-2 animate-fade animate-once animate-ease-in-out">
      <l-square
        size="150"
        stroke="10"
        stroke-length="0.25"
        bg-opacity="0.1"
        speed="1.2"
        color="white"
      ></l-square>
      <span className="text-2xl text-white font-semibold">Loading</span>
    </div>
  );
}

export default Loading;
