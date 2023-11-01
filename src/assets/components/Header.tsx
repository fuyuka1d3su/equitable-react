interface HeaderProps {
  name: string;
}

function Header(props: HeaderProps) {
  return (
    <>
      <h1
        style={{
          fontWeight: "bold",
          marginBottom: 50,
          fontSize: 40,
        }}
      >
        {props.name}
      </h1>
    </>
  );
}

export default Header;
