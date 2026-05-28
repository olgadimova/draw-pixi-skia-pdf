import { Button } from "@/src/shared";

type Props = {
  onGenerateRandomShape: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onExportSceneToPdf: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export function Navbar({ onGenerateRandomShape, onExportSceneToPdf }: Props) {
  return (
    <aside className="w-[200px] flex flex-col gap-3">
      <Button
        text="Сгенерировать случайные фигуры"
        onClick={onGenerateRandomShape}
      />
      <Button text="Экспортировать в PDF" onClick={onExportSceneToPdf} />
    </aside>
  );
}
