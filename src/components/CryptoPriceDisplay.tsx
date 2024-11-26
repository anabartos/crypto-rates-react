import { useMemo } from "react";
import { useCryptoStore } from "../store";
import Spinner from './Spinner'; // Asegúrate de importar el componente Spinner

export default function CryptoPriceDisplay() {
    const result = useCryptoStore((state) => state.result);
    const loading = useCryptoStore((state) => state.loading);

    const hasResult = useMemo(() => {
        return result && Object.keys(result).length > 0 && !Object.values(result).includes("");
    }, [result]);

    return loading ? (
        <Spinner />
    ) : !hasResult ? null : (
        <div className="result-wrapper">
            <div className="result">
                <img
                    src={`https://cryptocompare.com/${result.IMAGEURL}`}
                    alt="crypto image"
                />
                <div>
                    <p>The price: <span>{result.PRICE}</span></p>
                    <p>The day's high: <span>{result.HIGHDAY}</span></p>
                    <p>The day's low: <span>{result.LOWDAY}</span></p>
                    <p>24-hour price change: <span>{result.CHANGEPCT24HOUR}%</span></p>
                    <p>Last update: <span>{result.LASTUPDATE}</span></p>
                </div>
            </div>
        </div>
    );
}
