import { useState } from 'react'

import './App.css'

export interface KosmicznyObiekt {
  id:number;
  name: string;
  type: string;
  distance: string;
  img: string;
}

const bazaObiektow: KosmicznyObiekt[] = [
  { id: 1, name: "Andromeda", type: "Galaktyka spiralna", distance: "2.5 mln lat św.", img: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=500" },
  { id: 2, name: "Czarna Dziura M87", type: "Supermasywna czarna dziura", distance: "53.5 mln lat św.", img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=500" },
  { id: 3, name: "Mgławica Orion", type: "Mgławica emisyjna", distance: "1344 lata św.", img: "https://images.unsplash.com/photo-1538370965046-79c0d6907d47?w=500" },
  { id: 4, name: "Jowisz", type: "Gazowy olbrzym", distance: "4.3 au", img: "https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?w=500" },
  { id: 5, name: "Mars", type: "Planeta skalista", distance: "0.52 au", img: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=500" }
];
function App() {

  return (
    <>

    </>
  )
}

export default App
