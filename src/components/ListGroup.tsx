import { useState } from "react";

interface Props {
  items: string[];
  heading: string;

  onSelectItem: (item: string) => void;
}

const ListGroup = ({ items, heading, onSelectItem }: Props) => {
  const [selectedIdx, setSelectedIdx] = useState(-1);

  return (
    <>
        <h1>{heading}</h1>
        {items.length === 0 && <p>No item found</p>}
        <ul className="list-group">
            {items.map((item, idx) => (
                <li className={`list-group-item ${selectedIdx === idx && "active"}`}
                    key={item}
                    onClick={() => {
                        setSelectedIdx(idx); onSelectItem(item);
                    }}>{item}</li>
            ))}
        </ul>
    </>
  );
}

export default ListGroup;