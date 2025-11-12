import { useState } from 'react'

interface Props {
    // this will likely be its own 'kit' object, but for now, a string
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function PickYourKit({items, heading, onSelectItem }: Props) {
    const [count, setCount] = useState(0);

    // Hook
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <>
            <h2>{heading}</h2>
            {items.length === 0 && <p>No items found :(</p>}
            <ul className="pick-your-kit">
                {items.map((item, index) => (
                    <li
                        className={ selectedIndex === index ? 'group-item active' : 'group-item'}
                        key={item}
                        onClick={() => {
                            setSelectedIndex(index);
                            onSelectItem(item);
                        }}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default PickYourKit;