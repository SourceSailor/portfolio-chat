const GradientOrb = ({
  size,
  top,
  left,
  color,
  opacity,
  width,
  position = "absolute",
}) => {
  return (
    <div
      style={{
        position,
        width: width || size,
        height: size,
        top,
        left,
        transform: "translate(-50%, -50%)",
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        opacity,
        filter: "blur(40px)",
        pointerEvents: "none",
      }}
    />
  );
};

export default GradientOrb;
