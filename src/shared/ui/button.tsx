type Props = {
  text: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export function Button({ text, onClick }: Props) {
  return (
    <button
      className="bg-green-400 px-3 py-2 rounded hover:cursor-pointer hover:bg-green-500"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
