import { type KosmicznyObiekt } from '../App';
interface CatalogListProps {
    obiekty: KosmicznyObiekt[];
    onWybierzObiekt: (obiekt: KosmicznyObiekt) => void;
}

function CatalogList({ obiekty, onWybierzObiekt }: CatalogListProps) {
    return (
        <div className="catalog-card" style={{ border: '1px solid #333', padding: '15px', borderRadius: '8px', background: '#1a1a1a', minWidth: '250px' }}>
            <h3 style={{ color: '#888', textTransform: 'uppercase', fontSize: '12px', letterSpacing: '1px', marginTop: 0 }}>
                KATALOG OBIEKTÓW
            </h3>

            <div className="catalog-list" style={{ marginTop: '15px' }}>
                {obiekty.map(function(item) {

                    function handleItemClick() {
                        onWybierzObiekt(item);
                    }

                    return (
                        <div
                            key={item.id}
                            className="catalog-item"
                            onClick={handleItemClick}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '15px',
                                padding: '10px',
                                margin: '10px 0',
                                background: '#222',
                                borderRadius: '6px',
                                cursor: 'pointer',
                                transition: 'background 0.2s'
                            }}
                        >
                            <img
                                src={item.img}
                                alt={item.name}
                                style={{ width: '40px', height: '40px', borderRadius: '4px', objectFit: 'cover' }}
                            />
                            <span style={{ fontWeight: '500', color: '#fff' }}>{item.name}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default CatalogList;
export default function CatalogList(){}
