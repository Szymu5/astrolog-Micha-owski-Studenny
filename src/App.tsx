import { useState } from "react";
import CatalogList from "./components/CatalogList";
import ObjectDetails from "./components/ObjectDetails";
import DiscoveryForm from "./components/DiscoveryForm";

export type SpaceObject = {
  id: number;
  name: string;
  type: string;
  distance: string;
  description: string;
};

const initialObjects: SpaceObject[] = [
  {
    id: 1,
    name: "Mars",
    type: "Planeta",
    distance: "225 mln km",
    description: "Czwarta planeta od Słońca. Znana jako Czerwona Planeta.",
  },
  {
    id: 2,
    name: "Syriusz",
    type: "Gwiazda",
    distance: "8,6 lat świetlnych",
    description: "Najjaśniejsza gwiazda na nocnym niebie.",
  },
  {
    id: 3,
    name: "Io",
    type: "Księżyc",
    distance: "628 mln km",
    description: "Najbardziej wulkanicznie aktywny obiekt w Układzie Słonecznym.",
  },
];

export default function App() {
  const [objects, setObjects] = useState<SpaceObject[]>(initialObjects);
  const [selectedObject, setSelectedObject] = useState<SpaceObject | null>(null);

  function handleAddObject(newObject: SpaceObject) {
    setObjects([...objects, newObject]);
  }

  return (
      <div className="app">
        <header className="header">
          <h1>AstroLog</h1>
          <p>Katalog Ciał Niebieskich</p>
        </header>

        <main className="main-layout">
          <div className="left-column">
            <CatalogList
                objects={objects}
                selectedObject={selectedObject}
                onSelectObject={setSelectedObject}
            />
            <DiscoveryForm
                objectsCount={objects.length}
                onAddObject={handleAddObject}
            />
          </div>

          <div className="right-column">
            <ObjectDetails selectedObject={selectedObject} />
          </div>
        </main>
      </div>
  );
}