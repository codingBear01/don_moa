export const Header = () => {
  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid black',
    height: '30px',
  };
  return (
    <header style={headerStyle}>
      <h2>HEADER당!</h2>
    </header>
  );
};
