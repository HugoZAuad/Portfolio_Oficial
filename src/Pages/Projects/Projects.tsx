import { Arrow } from "@/Components/Arrow/Arrow";

export function Projetos() {
  return (
    <main>
      <div className="bg-neon w-12 h-12 rounded-4xl cursor-pointer hover:bg-green-400">
        <Arrow direction="left" />
      </div>

      <div className="bg-neon w-12 h-12 rounded-4xl cursor-pointer hover:bg-green-400">
        <Arrow direction="right" />
      </div>
    </main>
  );
}
