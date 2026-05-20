
export default function PriceCard() {
    return (
        <>
            <div>
                Kainos
            </div>
            <div>
                Pasirinkite komplektaciją pagal savo poreikius
            </div>
            <div className="flex">
                <div className="border-4 w-88 h-120">
                    <h2>Standartinis</h2>
                    <h1>100eur / para</h1>
                    <ul>
                        <li>
                            5m. skersmens palapinė su visais priedais
                        </li>
                        <li>
                            Kilimas per visą palapinės plotą
                        </li>
                        <li>
                            Dekoratyvinis apšvietimas
                        </li>
                    </ul>
                </div>
                <div className="border-4 w-88 h-120">
                    <h2>Standartinis + Krosnis</h2>
                    <h1>150eur / para</h1>
                    <ul>
                        <li>
                            5m. skersmens palapinė su visais priedais
                        </li>
                        <li>
                            Krosnis su visais priedais (pagal poreikį)
                        </li>
                        <li>
                            Dekoratyvinis apšvietimas
                        </li>
                        <li>
                            Kilimas per visą palapinės plotą
                        </li>

                    </ul>
                </div>
            </div>
            <div>
                Svarbu žinoti
            </div>
            <div>
                Papildoma informacija prieš rezervuojant užsakymą
            </div>
            <ul>
                <li>
                    Palapinės atsiėmimas:
                    <ul>
                        <li>
                            Pasiimkite palapinę patys adresu: Kaunas, Pušyno g. 9, Giraitė
                        </li>
                        <li>
                            Pristatysime palapinę į jūsų pasirinktą vietą už papildomą mokestį
                        </li>
                    </ul>
                </li>

                <li>
                    Papildomai galime išnuomuoti:
                    <ul>
                        <li>
                            Palapinės baldus (stalą, sofą, kėdes)
                        </li>
                        <li>
                            Miegmaišius, čiužinius
                        </li>
                        <li>
                            Turistines lovas
                        </li>
                        <li>
                            Kitos turistinės įrangos
                        </li>
                    </ul>
                </li>

                <li>
                    Švenčių dienomis kainos gali skirtis
                </li>
            </ul>
        </>
    );
}