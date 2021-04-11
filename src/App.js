import { useState, useEffect } from 'react';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Searchbar from './components/Searchbar/Searchbar';
import Modal from './components/Modal/Modal';
import imagesApi from './servises/images-api';

function App() {
  const [gallery, setGallery] = useState([]);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');

  useEffect(() => {
    if (searchQuery) {
      fetchQuery();
    }
  }, [searchQuery]);

  const toggleModal = () => {
    setShowModal(prev => !prev);
  };

  const addModalImage = ({ target }) => {
    console.dir(target);
    const { src } = target.dataset;
    setLargeImageURL(src);
    toggleModal();
  };

  const onChangeQuery = query => {
    setSearchQuery(query);
    if (query !== searchQuery) {
      setPage(1);
      setGallery([]);
    }
  };

  const fetchQuery = () => {
    const options = { searchQuery, page };
    setIsLoading(true);
    imagesApi
      .fetchImages(options)
      .then(hits => {
        if (hits.length === 0) {
          return;
        } else {
          setLargeImageURL(hits.largeImageURL);
          setPage(prev => prev + 1);
          setGallery(gallery => [...gallery, ...hits]);
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        }
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <>
      <div className="App">
        <Searchbar onSubmit={onChangeQuery} />
        {searchQuery && (
          <ImageGallery
            gallery={gallery}
            onClick={fetchQuery}
            loader={isLoading}
            onShowModal={addModalImage}
          />
        )}
        {showModal && (
          <Modal onClose={toggleModal}>
            {' '}
            <img src={largeImageURL} alt="image" />{' '}
          </Modal>
        )}
      </div>
    </>
  );
}

export default App;
