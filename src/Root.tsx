type Props = {
  id: number;
  image: string;
  name: string;
  types: string[];
};

function Card(props: Props) {
  const typeColor = getTypeColor(props.types[0]);

  return (
    /* Contenitore con larghezza fissa e altezza automatica per evitare spazi vuoti */
    <div className="w-72 p-2.5 bg-yellow-400 rounded-lg shadow-2xl border-[3px] border-yellow-500 h-fit">
      
      {/* Header: Nome e HP */}
      <div className="flex justify-between items-center px-1 mb-0.5">
        <h1 className="font-bold text-lg italic text-gray-800 uppercase tracking-tighter">
          {props.name}
        </h1>
        <div className="flex items-center gap-1">
          <span className="text-[9px] font-black">HP</span>
          <h1 className="text-lg font-bold text-red-600">70</h1>
          <div className={`w-4 h-4 rounded-full shadow-sm ${typeColor} border border-black/20`}></div>
        </div>
      </div>

      {/* Cornice Immagine: Altezza ridotta per compattezza */}
      <div className="bg-linear-to-br from-gray-300 via-white to-gray-400 p-1 border-[3px] border-gray-400 shadow-md">
        <div className="bg-white/40 backdrop-blur-sm overflow-hidden h-40 flex items-center justify-center">
          <img 
            src={props.image} 
            alt={props.name} 
            className="w-full h-full object-contain drop-shadow-md scale-110"
          />
        </div>
      </div>

      {/* Info Bar Gialla */}
      <div className="bg-linear-to-r from-yellow-500 via-yellow-200 to-yellow-500 text-[7px] font-bold text-center py-0.5 border-y border-yellow-600 italic">
        N. {props.id} Pokémon Lucertola Altezza: 0,6m Peso: 8,5kg
      </div>

      {/* Sezione Inferiore: Ridotta per togliere lo spazio grande */}
      <div className="mt-0.5 p-2 rounded-sm bg-linear-to-b from-orange-100 to-orange-300 border-t border-orange-400">
        
        {/* Attacco 1 */}
        <div className="flex items-center py-2 border-b border-black/5 gap-2">
          <div className="flex gap-0.5">
            <div className={`w-3 h-3 rounded-full ${typeColor}`}></div>
            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          </div>
          <span className="font-bold text-xs flex-1 italic">Briccone</span>
          <span className="font-bold text-xs">20x</span>
        </div>
        
        {/* Descrizione Attacco */}
        <p className="text-[8px] leading-tight my-2 text-gray-700 font-medium italic">
          Lancia una moneta. Se esce testa, questo attacco infligge 20 danni per ogni segnalino danno presente su questo Pokémon.
        </p>

        {/* Info di chiusura (Debolezza/Resistenza) */}
        <div className="mt-2 pt-1 border-t border-black/10 flex justify-between text-[7px] font-black uppercase">
          <div className="flex flex-col"><span>Debolezza</span><span className="text-blue-600">水 x2</span></div>
          <div className="flex flex-col text-center"><span>Resistenza</span><span>-</span></div>
          <div className="flex flex-col text-right"><span>Ritirata</span><span>**</span></div>
        </div>
      </div>

      {/* Copyright minuscolo in fondo */}
      <div className="text-[5px] text-right mt-1 font-bold italic italic pr-1">
        Illus. Akira Komayama  RC3/RC32 ©2026 Pokémon
      </div>
    </div>
  );
}

export function Root() {
  return (
    <div className="p-10 flex justify-center items-start min-h-screen">
      {/* Solo Charmander */}
      <Card
        id={4}
        image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
        name="Charmander"
        types={["fire"]}
      />
    </div>
  );
}

function getTypeColor(type: string): string {
  return typeColors[type] || "bg-gray-400";
}

const typeColors: { [key: string]: string } = {
  fire: "bg-red-500",
  water: "bg-blue-500",
  grass: "bg-green-500",
  electric: "bg-yellow-400",
  // Aggiungi gli altri se servono
};