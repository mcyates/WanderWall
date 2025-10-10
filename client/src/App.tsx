import { useEffect, useState } from "react";
import { Wallpaperlist } from "./components/WallpaperList";

function App() {
  const [wallpapers, setWallpapers] = useState<Wallpaper[]>([]);

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
        <Wallpaperlist images={wallpapers} />
      </main>
    </>
  );
}

export default App;
