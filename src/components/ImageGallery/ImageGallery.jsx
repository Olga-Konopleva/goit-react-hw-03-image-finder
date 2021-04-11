import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Button from '../Button/Button';
import Loader from 'react-loader-spinner';

const ImageGallery = ({ gallery, onClick, loader, onShowModal }) => {
  return (
    <div className="container">
      <ul className="ImageGallery">
        {gallery.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            onShowModal={onShowModal}
          />
        ))}
      </ul>
      <div className="button_container">
        {!loader && gallery.length > 0 && <Button onClick={onClick} />}
        {loader && (
          <Loader type="ThreeDots" color="#303f9f" height={80} width={80} />
        )}
      </div>
    </div>
  );
};

export default ImageGallery;
