interface ChildProps {
  color: string;
  children?: React.ReactNode;
  onClick: () => void;
}

export function Child({ color, onClick }: ChildProps) {
  return (
    <div>
      {color}
      <button onClick={onClick}>CLICK</button>
    </div>
  );
}

// 2 different ways to write a React function Component
// Arrow
export const ChildFC: React.FC<ChildProps> = ({ color, onClick }) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>CLICK</button>
    </div>
  );
};
// Normal
export const ChildAsFC: React.FC<ChildProps> = function ({ color, onClick }) {
  return (
    <div>
      {color}
      <button onClick={onClick}>CLICK</button>
    </div>
  );
};
