import React from "react";
import ListItem from "./navItem";

const List = () => {
  const trash = [
    {
      id: 1,
      name: "A trash",
      description: "This is a trash",
      image: "/images/recycle_bin.png",
    },
    {
      id: 1,
      name: "A trash",
      description: "This is a trash",
      image: "/images/recycle_bin.png",
    },
    {
      id: 1,
      name: "A trash",
      description: "This is a trash",
      image: "/images/recycle_bin.png",
    },
    {
      id: 1,
      name: "A trash",
      description: "This is a trash",
      image: "/images/recycle_bin.png",
    },
    {
      id: 1,
      name: "A trash",
      description: "This is a trash",
      image: "/images/recycle_bin.png",
    },
  ];
  return (
    <ul className="divide-y divide-slate-100">
      {trash.map((trash) => {
        return (
          <ListItem
            image={trash.image}
            title={trash.name}
            rating={trash.description}
          />
        );
      })}
    </ul>
  );
};

export default List;
