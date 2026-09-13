import { SiDocker } from "react-icons/si";
import Card from "./Card";

type Props = {
  isAdded: boolean;
  onAdd: () => void;
};

const DockerCard = ({ isAdded, onAdd }: Props) => {
  return (
    <Card
      name="Docker"
      description="A platform designed to build, share, and run containerized applications reliably."
      category="DevOps"
      level="Intermediate"
      rating="4.9"
      badge="Containers"
      badgeColor="bg-blue-50 text-blue-500"
      icon={<SiDocker className="text-blue-500" />}
      isAdded={isAdded}
      onAdd={onAdd}
    />
  );
};

export default DockerCard;