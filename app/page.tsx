import { Main } from "@/src/screens";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 justify-center bg-zinc-200 font-sans">
      <main className="flex flex-1 w-full flex-col gap-4 items-center justify-start py-8 lg:py-32 px-10 sm:items-start">
        <h1 className="mx-auto mb-3 font-semibold">
          Pixi/Skia drawing board with PDF export
        </h1>
        <Main />
      </main>
    </div>
  );
}
