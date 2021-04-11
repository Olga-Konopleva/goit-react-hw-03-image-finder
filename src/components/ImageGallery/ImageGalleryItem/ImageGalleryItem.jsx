const ImageGalleryItem = ({ webformatURL, largeImageURL }) => {
  return (
    <li className="ImageGalleryItem">
      <img src={webformatURL} alt="" className="ImageGalleryItem-image" />
    </li>
  );
};

export default ImageGalleryItem;
