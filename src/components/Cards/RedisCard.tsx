import { SiRedis } from "react-icons/si";
import Card from "./Card";

type Props = {
  isAdded: boolean;
  onAdd: () => void;
};

const RedisCard = ({ isAdded, onAdd }: Props) => {
  return (
    <Card
      name="Redis"
      description="In-memory data structure store used as a high-speed database, cache, and message broker."
      category="Database"
      level="Intermediate"
      rating="4.8"
      badge="Cache"
      badgeColor="bg-red-50 text-red-500"
      icon={<SiRedis className="text-red-500" />}
      isAdded={isAdded}
      onAdd={onAdd}
    />
  );
};

export default RedisCard;