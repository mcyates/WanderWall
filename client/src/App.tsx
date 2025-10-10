import { useEffect, useState } from "react";
import axios from "axios";
import { Wallpaperlist } from "./components/WallpaperList";

function App() {
  const [wallpapers, setWallpapers] = useState<Wallpaper[]>([]);

  useEffect(() => {
    axios
      .get<Wallpaper[]>("https://localhost:5030/api/wallpapers")
      .then((response) => setWallpapers(response.data));
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
