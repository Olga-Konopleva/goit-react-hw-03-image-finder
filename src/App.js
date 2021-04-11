import { useState, useEffect } from 'react';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Searchbar from './components/Searchbar/Searchbar';
import axios from 'axios';

const API_KEY = '20154627-553297d4fa4e2a9272bf54c5b';

function App() {
  const [gallery, setGallery] = useState([]);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  console.log(page);
  console.log(searchQuery);
  console.log(gallery);

  useEffect(() => {
    if (!searchQuery) return;
    fetchQuery(searchQuery, page);
  }, [searchQuery, page]);

  const onChangeQuery = searchQuery => {
    setSearchQuery(searchQuery);
    setPage(1);
    setGallery([]);
  };

  const loadMoreImages = () => {
    setPage(page + 1);
  };

  const fetchQuery = (searchQuery, page) => {
    axios
      .get(
        `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
      )
      .then(({ data }) => {
        if (data.hits.length === 0) {
          return;
        } else {
          setGallery(gallery => [...gallery, ...data.hits]);
        }
      });
  };
  return (
    <>
      <div className="App">
        <Searchbar onSubmit={onChangeQuery} />
        {searchQuery && (
          <ImageGallery gallery={gallery} onClick={loadMoreImages} />
        )}
      </div>
    </>
  );
}

export default App;
