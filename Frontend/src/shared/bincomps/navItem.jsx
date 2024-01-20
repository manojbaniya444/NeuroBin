import React from "react";

const ListItem = (props) => {
  return (
    <article className="flex items-start space-x-2 p-3">
      <img
        src={props.image}
        alt=""
        width="45"
        height="66"
        className="flex-none rounded-md bg-slate-100 h-16 w-auto"
      />
      <div className="min-w-0 relative flex-auto">
        <h2 className="font-semibold text-slate-900 truncate pr-20">
          {props.title}
        </h2>
        <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium">
          {props.rating}
        </dl>
      </div>
    </article>
  );
};

export default ListItem;
