import {Main} from '@/src/screens'

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-200 font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col gap-4 items-center justify-start py-32 px-16 sm:items-start">
          <h1>Pixi/Skia drawing board with PDF export</h1>
          <Main />
      </main>
    </div>
  );
}
