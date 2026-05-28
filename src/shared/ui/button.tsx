type Props = {
  text: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export function Button({ text, onClick }: Props) {
  return (
    <button
      className="bg-blue-400 px-3 py-2 rounded hover:cursor-pointer hover:bg-blue-500"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
