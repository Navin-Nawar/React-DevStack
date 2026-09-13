import { SiVuedotjs } from "react-icons/si";
import Card from "./Card";

type Props = {
  isAdded: boolean;
  onAdd: () => void;
};

const VueCard = ({ isAdded, onAdd }: Props) => {
  return (
    <Card
      name="Vue.js"
      description="An approachable, performant, and versatile framework for building web user interfaces."
      category="Frontend"
      level="Beginner-Friendly"
      rating="4.8"
      badge="Versatile"
      badgeColor="bg-emerald-50 text-emerald-500"
      icon={<SiVuedotjs className="text-green-500" />}
      isAdded={isAdded}
      onAdd={onAdd}
    />
  );
};

export default VueCard;