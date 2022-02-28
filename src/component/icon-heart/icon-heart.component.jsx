import { FaHeart, FaRegHeart } from "react-icons/fa";

const IconHeart = ({ favorite, buttonPrevent }) => {
  const iconHeartStyle = {
    color: "red",
    fontSize: "35px",
    cursor: "pointer",
  };

  return favorite ? (
    <FaHeart onClick={() => buttonPrevent()} style={iconHeartStyle} />
  ) : (
    <FaRegHeart onClick={() => buttonPrevent()} style={iconHeartStyle} />
  )
};

export default IconHeart;
