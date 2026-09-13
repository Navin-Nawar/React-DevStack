import { SiTailwindcss } from "react-icons/si";
import Card from "./Card";

type Props = {
  isAdded: boolean;
  onAdd: () => void;
};

const TailwindCard = ({ isAdded, onAdd }: Props) => {
  return (
    <Card
      name="Tailwind CSS"
      description="A utility-first CSS framework packed with classes that can be composed to build custom UI."
      category="Styling"
      level="Beginner-Friendly"
      rating="4.9"
      badge="Modern"
      badgeColor="bg-cyan-50 text-cyan-500"
      icon={<SiTailwindcss className="text-cyan-400" />}
      isAdded={isAdded}
      onAdd={onAdd}
    />
  );
};

export default TailwindCard;