import HomeCarousel from './HomeCarousel';
import RoomListPage from './RoomListPage';
import Search from './Search';

const HomePage = () => {
  return (
    <div className="container mx-auto text-center">
      <HomeCarousel />
      <Search />
      <RoomListPage />
    </div>
  );
};

export default HomePage;
