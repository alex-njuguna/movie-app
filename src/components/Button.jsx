import "./button.css";

function Button({ icon, name, color = "#fff", bgColor = "#ff3700" }) {
  return (
    <a
      href="#"
      className="mainBtn"
      style={{ color: color, backgroundColor: bgColor }}
    >
      {icon} {name}
    </a>
  );
}

export default Button;
