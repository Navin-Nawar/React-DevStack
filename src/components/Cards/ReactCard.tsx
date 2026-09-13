import { SiReact } from "react-icons/si";
import Card from "./Card";

type Props = {
  isAdded: boolean;
  onAdd: () => void;
};

const ReactCard = ({ isAdded, onAdd }: Props) => {
  return (
    <Card
      name="React"
      description="A declarative, component-based JavaScript library for building modern user interfaces."
      category="Frontend"
      level="Beginner-Friendly"
      rating="4.9"
      badge="Popular"
      badgeColor="bg-sky-50 text-sky-500"
      icon={<SiReact className="text-cyan-400" />}
      isAdded={isAdded}
      onAdd={onAdd}
    />
  );
};

export default ReactCard;