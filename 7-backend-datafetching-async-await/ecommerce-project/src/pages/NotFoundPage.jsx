import { Header } from '../components/Header';
import './NotFoundPage.css';

export function NotFoundPage() {
  return (
    <>
      <title>404 Page Not Found</title>
      <link rel="icon" type="image/svg+xml" href="notfound-favicon.png" />

      <Header />

      <div className="not-found-message">
        Page not found
      </div>
        <img className="notfound-pic" src="notfound-favicon.png" />
    </>
  );
}