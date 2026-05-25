import { Palette } from "lucide-react";

function Navbar() {
  return (
    <nav className="relative z-10 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 backdrop-blur">
          <Palette size={20} />
        </div>
        <h1 className="text-xl font-semibold tracking-widest">
          SERHAT OZDAMAR
        </h1>
      </div>

      <button className="rounded-full border border-white/15 px-5 py-2 text-sm text-white/80 backdrop-blur hover:bg-white/10">
        Open Studio
      </button>
    </nav>
  );
}

export default Navbar;