export const Image = (wallpaper: Wallpaper) => {
  return (
    <>
      <img src={wallpaper.url} alt={wallpaper.alt} />
    </>
  );
};

export default Image;
