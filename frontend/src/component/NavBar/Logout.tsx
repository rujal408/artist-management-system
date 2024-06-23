"use client";
import Button from "../Button";

interface IProps {
  handleLogout: () => void;
}

const Logout: React.FC<IProps> = ({ handleLogout }) => {
  const handleClick = () => {
    handleLogout();
  };
  return (
    <Button type="submit" onClick={handleClick}>
      Logout
    </Button>
  );
};

export default Logout;
