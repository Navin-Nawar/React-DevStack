import type { Technology } from "../../types/technology";


interface CardProps {
  technology: Technology;
  isAdded: boolean;
  onAdd: () => void;
}

const Card = ({ technology, isAdded, onAdd }: CardProps) => {
  return (
    <div className="flex min-h-[250px] flex-col rounded-xl border border-slate-100 bg-white p-4 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">

      <div className="flex items-start justify-between">

        <div className="flex h-10 w-10 items-center justify-center">
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-9 w-9 object-contain"
          />
        </div>

        <span className="rounded-full bg-pink-50 px-2 py-1 text-[9px] font-medium text-pink-500">
          {technology.badge}
        </span>

      </div>

      <h3 className="mt-3 text-sm font-semibold text-slate-800">
        {technology.name}
      </h3>

      <p className="mt-2 flex-1 text-[10px] leading-4 text-slate-400">
        {technology.description}
      </p>

      <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-2">

        <span className="rounded bg-slate-50 px-2 py-1 text-[9px] text-slate-500">
          {technology.category}
        </span>

        <span className="text-[9px] text-slate-400">
          {technology.difficulty}
        </span>

        <span className="text-[10px] text-slate-600">
          <span className="text-yellow-400">★</span>{" "}
          {technology.rating}
        </span>

      </div>

      <button
        type="button"
        onClick={onAdd}
        disabled={isAdded}
        className={`btn btn-sm mt-3 h-8 min-h-0 w-full rounded-md border-none text-[9px] ${
          isAdded
            ? "cursor-not-allowed bg-pink-100 text-pink-500"
            : "bg-slate-950 text-white hover:bg-slate-800"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>

    </div>
  );
};

export default Card;