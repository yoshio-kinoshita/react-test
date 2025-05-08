function Welcome() {
  return <h1>Hello, Hiro!</h1>;
}

function App() {

  const name = "yoshio";
  const isLoginned = true;
  return (
    <>
    <div>
      <Welcome />
    </div>
    </>
  );
}

export default App;