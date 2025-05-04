import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Home</h1>
      <Link to="/sample-page">Sample Pageへ</Link>
    </>
  );
}

export default Home;
