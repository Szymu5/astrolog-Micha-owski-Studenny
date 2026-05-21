import { useState } from "react";
import type { SpaceObject } from "../App";

type Props = {
    objectsCount: number;
    onAddObject: (obj: SpaceObject) => void;
};

const typeOptions = ["Planeta", "Gwiazda", "Księżyc", "Asteroida", "Kometa", "Galaktyka"];

export default function DiscoveryForm({ objectsCount, onAddObject }: Props) {

    const [name, setName] = useState("");
    const [type, setType] = useState("Planeta");
    const [distance, setDistance] = useState("");
    const [description, setDescription] = useState("");

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();

        if (name.trim() === "" || distance.trim() === "") {
            alert("Wypełnij przynajmniej nazwę i odległość!");
            return;
        }

        const newObject: SpaceObject = {
            id: objectsCount + 1,
            name: name.trim(),
            type,
            distance: distance.trim(),
            description: description.trim(),
        };
        onAddObject(newObject);

        setName("");
        setType("Planeta");
        setDistance("");
        setDescription("");
    }

    return (
        <section className="card">
            <h2>Zgłoś nowe odkrycie</h2>

            <form onSubmit={handleSubmit} className="form">

                <div className="form-group">
                    <label htmlFor="name">Nazwa obiektu *</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="np. Kepler-186f"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="type">Typ obiektu *</label>
                    <select
                        id="type"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    >
                        {typeOptions.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="distance">Odległość od Ziemi *</label>
                    <input
                        id="distance"
                        type="text"
                        placeholder="np. 490 lat świetlnych"
                        value={distance}
                        onChange={(e) => setDistance(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Opis (opcjonalny)</label>
                    <textarea
                        id="description"
                        placeholder="Krótki opis obiektu..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows={3}
                    />
                </div>

                <button type="submit" className="btn-submit">
                    + Dodaj do katalogu
                </button>
            </form>
        </section>
    );
}
