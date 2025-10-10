interface ImageProps {
  wallpaper: Wallpaper;
}

export const ImageC: React.FC<ImageProps> = ({ wallpaper }) => {
  return <img className="thumbnail" src={wallpaper.url} alt={wallpaper.alt} />;
};

export default ImageC;
