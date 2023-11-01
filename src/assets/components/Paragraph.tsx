interface ParagraphProps {
  text: string;
  marginBot: number;
}

function Paragraph(props: ParagraphProps) {
  return (
    <p style={{ fontSize: 25, maxWidth: 1000, marginBottom: props.marginBot, textAlign: "center" }}>
      {props.text}
    </p>
  );
}

export default Paragraph;
