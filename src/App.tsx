
import './App.css'
import {useState} from "react";

export interface KosmicznyObiekt {
  id:number;
  name: string;
  type: string;
  distance: string;
  img: string;
}
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

const bazaObiektow: KosmicznyObiekt[] = [
  { id: 1, name: "Andromeda", type: "Galaktyka spiralna", distance: "2.5 mln lat św.", img: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=500" },
  { id: 2, name: "Czarna Dziura M87", type: "Supermasywna czarna dziura", distance: "53.5 mln lat św.", img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=500" },
  { id: 3, name: "Mgławica Orion", type: "Mgławica emisyjna", distance: "1344 lata św.", img: "https://images.unsplash.com/photo-1538370965046-79c0d6907d47?w=500" },
  { id: 4, name: "Jowisz", type: "Gazowy olbrzym", distance: "4.3 au", img: "https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?w=500" },
  { id: 5, name: "Mars", type: "Planeta skalista", distance: "0.52 au", img: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=500" }
];
function App() {
  const [obiekty, setObiekty] = useState<KosmicznyObiekt[]>(bazaObiektow);
  const [wybranyObiekt, setWybranyObiekt] = useState<KosmicznyObiekt>(bazaObiektow[0]);
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