import React from "react";

const ListItem = (props) => {
  return (
    <article className="flex items-start space-x-2 p-3">
      <div className="min-w-0 relative flex-auto">
        <h2 className="font-semibold text-white truncate pr-20">
          -{props.title}
        </h2>
      </div>
    </article>
  );
};

export default ListItem;
