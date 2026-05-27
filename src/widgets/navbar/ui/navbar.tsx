import { Button } from "@/src/shared";

type Props = {
  handleGenerateRandomShape: (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => void;
};

export function Navbar({ handleGenerateRandomShape }: Props) {
  return (
    <aside className="w-[200px]">
      <Button
        text="Сгенерировать случайные фигуры"
        onClick={handleGenerateRandomShape}
      />
    </aside>
  );
}
