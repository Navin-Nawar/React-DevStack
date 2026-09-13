import { SiPostgresql } from "react-icons/si";
import Card from "./Card";

type Props = {
  isAdded: boolean;
  onAdd: () => void;
};

const PostgreSQLCard = ({ isAdded, onAdd }: Props) => {
  return (
    <Card
      name="PostgreSQL"
      description="A powerful, open-source object-relational database system with proven reliability."
      category="Database"
      level="Intermediate"
      rating="4.9"
      badge="Top SQL"
      badgeColor="bg-blue-50 text-blue-500"
      icon={<SiPostgresql className="text-blue-500" />}
      isAdded={isAdded}
      onAdd={onAdd}
    />
  );
};

export default PostgreSQLCard;