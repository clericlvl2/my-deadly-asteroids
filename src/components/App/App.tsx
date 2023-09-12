import { Navigate, Route, Routes } from 'react-router-dom';
import { Header } from '../Header';
import { useCartAsteroidsIds } from '../../hooks';
import { CartAsteroidsIdsContext, DistanceUnitsContext } from '../../contexts';
import { Layout } from '../Layout';
import planetEarth from '../../assets/images/planet-earth.png';
import largeAsteroid from '../../assets/images/asteroid-large.png';
import { AsteroidsList } from '../AsteroidsList';
import { AsteroidDetails } from '../AsteroidDetails';
import { useState } from 'react';
import { DistanceUnits } from '../../utils/types.ts';
import CartModal from '../CartModal/CartModal.tsx';

const App = () => {
  const [cartAsteroidsIds, handlePurchase] = useCartAsteroidsIds();
  const [units, setUnits] = useState<DistanceUnits>('km');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <DistanceUnitsContext.Provider value={units}>
      <CartAsteroidsIdsContext.Provider value={cartAsteroidsIds}>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Layout
                srcImage={planetEarth}
                alt="Планета Земля"
                onModalOpen={handleOpenModal}
                content={
                  <AsteroidsList
                    onPurchaseAsteroid={handlePurchase}
                    onSelectUnits={setUnits}
                  />
                }
              />
            }
          />
          <Route
            path="/asteroid/:id"
            element={
              <Layout
                srcImage={largeAsteroid}
                alt="Астероид"
                onModalOpen={handleOpenModal}
                content={
                  <AsteroidDetails
                    onPurchaseAsteroid={handlePurchase}
                    onSelectUnits={setUnits}
                  />
                }
              />
            }
          />
          <Route path="/*" element={<Navigate to={'/'} replace />} />
        </Routes>
        <CartModal isOpen={isModalOpen} onExit={handleCloseModal} />
      </CartAsteroidsIdsContext.Provider>
    </DistanceUnitsContext.Provider>
  );
};

export default App;
