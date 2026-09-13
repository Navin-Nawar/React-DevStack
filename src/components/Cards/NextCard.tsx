import { SiNextdotjs } from "react-icons/si";
import Card from "./Card";

type Props = {
  isAdded: boolean;
  onAdd: () => void;
};

const NextCard = ({ isAdded, onAdd }: Props) => {
  return (
    <Card
      name="Next.js"
      description="The React framework for full-stack web applications with hybrid static and server rendering."
      category="Frontend"
      level="Intermediate"
      rating="4.9"
      icon={<SiNextdotjs className="text-black" />}
      isAdded={isAdded}
      onAdd={onAdd}
    />
  );
};

export default NextCard;