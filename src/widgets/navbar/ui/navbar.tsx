import { Button } from "@/src/shared";

type Props = {
  onGenerateRandomShape: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onExportSceneToPdf: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export function Navbar({ onGenerateRandomShape, onExportSceneToPdf }: Props) {
  return (
    <aside className="w-[200px] flex flex-col gap-3 mx-auto lg:ml-auto lg:mr-0">
      <Button
        text="Сгенерировать случайные фигуры (Generate random shapes)"
        onClick={onGenerateRandomShape}
      />
      <Button
        text="Экспортировать в PDF (Export to PDF)"
        onClick={onExportSceneToPdf}
      />
    </aside>
  );
}
