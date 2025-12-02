import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div>
      <h1>NotFound Page</h1>
      <nav>
        <Link to="/airbnb">Airbnb</Link> | <Link to="/notfound">Not Found</Link>
      </nav>
    </div>
  );
}
