import type React from "react";
import ImageC from "./ImageC";

interface IWallpaperListProps {
  images: Wallpaper[];
}

export const Wallpaperlist: React.FC<IWallpaperListProps> = ({ images }) => {
  const wallpapers = images;
  return (
    <ul className="Wallpapers-list">
      {wallpapers.map((wallpaper: Wallpaper) => (
        <li key={wallpaper.id}>
          <ImageC wallpaper={wallpaper} />
        </li>
      ))}
    </ul>
  );
};
