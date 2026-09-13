import React from "react";

export type CardProps = {
  name: string;
  description: string;
  category: string;
  level: string;
  rating: string;
  icon: React.ReactNode;

  badge?: string;
  badgeColor?: string;

  isAdded: boolean;
  onAdd: () => void;
};

const Card = ({
  name,
  description,
  category,
  level,
  rating,
  icon,
  badge,
  badgeColor,
  isAdded,
  onAdd,
}: CardProps) => {
  return (
    <div
      className="
        flex
        min-h-[175px]
        flex-col
        rounded-xl
        border
        border-slate-100
        bg-white
        p-4
        shadow-sm
        transition
        duration-200
        hover:-translate-y-0.5
        hover:shadow-md
      "
    >
      <div className="flex items-start justify-between">
        <div className="flex h-9 w-9 items-center justify-center text-2xl">
          {icon}
        </div>

        {badge && (
          <span
            className={`rounded-full px-2 py-1 text-[9px] font-medium ${badgeColor}`}
          >
            {badge}
          </span>
        )}
      </div>

   
      <h3 className="mt-3 text-sm font-semibold text-slate-800">
        {name}
      </h3>

     
      <p className="mt-1 flex-1 text-[10px] leading-4 text-slate-400">
        {description}
      </p>

     
      <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-2">
        <span className="rounded bg-slate-50 px-2 py-1 text-[9px] text-slate-500">
          {category}
        </span>

        <span className="text-[9px] text-slate-400">
          {level}
        </span>

        <span className="text-[10px] text-slate-600">
          <span className="text-yellow-400">★</span>{" "}
          {rating}
        </span>
      </div>

    
     <button
  type="button"
  onClick={onAdd}
  disabled={isAdded}
  className={`
    btn
    btn-sm
    mt-2
    h-7
    min-h-0
    w-full
    rounded-md
    border-none
    text-[9px]
    font-normal

    ${
      isAdded
        ? "cursor-not-allowed bg-pink-100 text-pink-500"
        : "bg-slate-950 text-white hover:bg-slate-800"
    }
  `}
>
  {isAdded ? "Added to Stack ✓" : "Add to Stack"}
</button>

    </div>
  );
};

export default Card;