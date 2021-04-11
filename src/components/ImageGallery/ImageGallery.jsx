import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Button from '../Button/Button';
import Loader from 'react-loader-spinner';

const ImageGallery = ({ gallery, onClick }) => {
  return (
    <div className="container">
      <ul className="ImageGallery">
        {gallery.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
          />
        ))}
      </ul>
      {gallery && <Button onClick={onClick} />}
      <Loader type="ThreeDots" color="#303f9f" height={80} width={80} />
    </div>
  );
};

export default ImageGallery;
