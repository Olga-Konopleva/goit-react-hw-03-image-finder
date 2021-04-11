const ImageGalleryItem = ({ webformatURL, largeImageURL, onShowModal }) => {
  return (
    <li className="ImageGalleryItem" onClick={onShowModal}>
      <img
        src={webformatURL}
        alt=""
        className="ImageGalleryItem-image"
        data-src={largeImageURL}
      />
    </li>
  );
};

export default ImageGalleryItem;
