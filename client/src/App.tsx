import { useEffect, useState } from "react";
import Image from "./components/Image";

function App() {
  const [wallpapers, setWallpapers] = useState([]);

  useEffect(() => {
    fetch("https://localhost:5030/api/wallpapers")
      .then((response) => response.json())
      .then((data) => setWallpapers(data));
  }, []);

  return (
    <>
      <header>
        <h1 className="branding">WanderWall</h1>
      </header>
      <main>
        <ul className="Wallpapers-list">
          {wallpapers.map((wallpaper: Wallpaper) => (
            <li key={wallpaper.id}>
              <Image wallpaper={wallpaper} />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;
