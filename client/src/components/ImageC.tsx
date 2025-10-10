interface IImageProps {
  wallpaper: Wallpaper;
}

export const ImageC: React.FC<IImageProps> = ({ wallpaper }) => {
  return <img className="thumbnail" src={wallpaper.url} alt={wallpaper.alt} />;
};

export default ImageC;
