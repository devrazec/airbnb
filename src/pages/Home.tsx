import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <Link to="/airbnb">Airbnb</Link> | <Link to="/notfound">Not Found</Link>
      </nav>
    </div>
  );
}
