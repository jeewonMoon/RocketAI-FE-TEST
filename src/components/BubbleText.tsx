interface BubbleTextProps {
  text: string;
}

function BubbleText({text}: BubbleTextProps) {
  const lines = text.split('\\n');

  return (
    <p className="text-[4vw] lg:text-lg md:text-base sm:text-sm xs:text-xs text-center text-neutral-800">
      {lines.map((line, index) => (
        <span key={index}>
          {line}
          {index < lines.length - 1 && <br />}
        </span>
      ))}
    </p>
  );
}

export default BubbleText;
