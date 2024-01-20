import React, { useEffect, useState } from "react";
import ListItem from "./navItem";
import { useGlobalContext } from "../../Context";

const List = ({ items }) => {
  const [itemsInBin, setItemsInBin] = useState([]);
  const { streak } = useGlobalContext();

  const trash = [
    {
      id: 1,
      name: "A trash",
    },
    {
      id: 2,
      name: "A trash",
    },
    {
      id: 3,
      name: "A trash",
    },
    {
      id: 4,
      name: "A trash",
    },
    {
      id: 5,
      name: "A trash",
    },
  ];

  useEffect(() => {
    let items = trash.slice(0, streak);
    setItemsInBin(items);
  }, [streak]);

  return (
    <ul className="divide-y divide-slate-100">
      {itemsInBin.length > 0 &&
        itemsInBin.map((trash) => {
          return <ListItem title={trash.name} key={trash.id}/>;
        })}
    </ul>
  );
};

export default List;
