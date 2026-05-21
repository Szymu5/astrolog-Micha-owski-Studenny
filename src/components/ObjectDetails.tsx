import type { SpaceObject } from "../App";

type Props = {
    selectedObject: SpaceObject | null;
};

export default function ObjectDetails({ selectedObject }: Props) {
    return (
        <section className="card details-card">
            <h2>Szczegóły obiektu</h2>

            {selectedObject === null ? (
                <div className="details-empty">
                    <p>Wybierz obiekt z katalogu, aby zobaczyć szczegóły.</p>
                </div>
            ) : (
                <div className="details-content">
                    <h3 className="details-name">{selectedObject.name}</h3>

                    <table className="details-table">
                        <tbody>
                        <tr>
                            <th>Typ:</th>
                            <td>{selectedObject.type}</td>
                        </tr>
                        <tr>
                            <th>Odległość od Ziemi:</th>
                            <td>{selectedObject.distance}</td>
                        </tr>
                        <tr>
                            <th>ID w katalogu:</th>
                            <td>#{selectedObject.id}</td>
                        </tr>
                        </tbody>
                    </table>

                    <p className="details-description">{selectedObject.description}</p>
                </div>
            )}
        </section>
    );
}
