import { useState } from "react";
import CatalogList from "./components/CatalogList";
import ObjectDetails from "./components/ObjectDetails";
import DiscoveryForm from "./components/DiscoveryForm";
import './App.css';

export type SpaceObject = {
  id: number;
  name: string;
  type: string;
  distance: string;
  description: string;
  img: string;
};

const initialObjects: SpaceObject[] = [
  {
    id: 1,
    name: "Andromeda",
    type: "Galaktyka spiralna",
    distance: "2.5 mln lat św.",
    description: "Najbliższa nam duża galaktyka spiralna, widoczna gołym okiem.",
    img: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=500"
  },
  {
    id: 2,
    name: "Czarna Dziura M87",
    type: "Supermasywna czarna dziura",
    distance: "53.5 mln lat św.",
    description: "Pierwsza czarna dziura, której cień został bezpośrednio sfotografowany.",
    img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=500"
  },
  {
    id: 3,
    name: "Mgławica Orion",
    type: "Mgławica emisyjna",
    distance: "1344 lata św.",
    description: "Jasna mgławica dyfuzyjna w gwiazdozbiorze Oriona, żłobek nowych gwiazd.",
    img: "https://images.unsplash.com/photo-1538370965046-79c0d6907d47?w=500"
  },
  {
    id: 4,
    name: "Jowisz",
    type: "Gazowy olbrzym",
    distance: "4.3 au",
    description: "Największa planeta Układu Słonecznego z charakterystyczną Wielką Czerwoną Plamą.",
    img: "https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?w=500"
  },
  {
    id: 5,
    name: "Mars",
    type: "Planeta skalista",
    distance: "0.52 au",
    description: "Czwarta planeta od Słońca. Pokryta tlenkiem żelaza, stąd jej czerwony kolor.",
    img: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=500"
  }
];

export default function App() {
  const [objects, setObjects] = useState<SpaceObject[]>(initialObjects);
  const [selectedObject, setSelectedObject] = useState<SpaceObject | null>(null);

  function handleAddObject(newObject: Omit<SpaceObject, 'img'>) {
    const objectWithImg: SpaceObject = {
      ...newObject,
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500"
    };
    setObjects([...objects, objectWithImg]);
  }

  return (
      <div className="app">
        <header className="header" style={{ padding: '20px', textAlign: 'center', background: '#0b0f19', borderBottom: '1px solid #1e293b' }}>
          <h1 style={{ color: '#fff', margin: 0 }}>🌌 KOSMICZNY REJESTR OBSERWACYJNY</h1>
        </header>

        <main className="main-layout" style={{ display: 'flex', gap: '20px', padding: '20px', alignItems: 'flex-start' }}>
          <div className="left-column" style={{ flex: '1', minWidth: '280px' }}>
            <CatalogList
                obiekty={objects}
                onWybierzObiekt={setSelectedObject}
            />
          </div>

          <div className="right-column" style={{ display: 'flex', flexDirection: 'column', gap: '20px', flex: '2' }}>
            <ObjectDetails selectedObject={selectedObject} />
            <DiscoveryForm
                objectsCount={objects.length}
                onAddObject={handleAddObject}
            />
          </div>
        </main>
      </div>
  );
}