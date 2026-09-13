import { SiNodedotjs } from "react-icons/si";
import Card from "./Card";

type Props = {
  isAdded: boolean;
  onAdd: () => void;
};

const NodeCard = ({ isAdded, onAdd }: Props) => {
  return (
    <Card
      name="Node.js"
      description="An asynchronous event-driven JavaScript runtime built on Chrome's V8 engine."
      category="Backend"
      level="Intermediate"
      rating="4.8"
      badge="Standard"
      badgeColor="bg-emerald-50 text-emerald-500"
      icon={<SiNodedotjs className="text-green-500" />}
      isAdded={isAdded}
      onAdd={onAdd}
    />
  );
};

export default NodeCard;