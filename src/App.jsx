import React, { useEffect, useState } from 'react';
import ColorBox from './components/ColorBox';
import { getRandomColor } from './utils/randomColor';
import { Toaster } from 'react-hot-toast';

function App() {
    const [colors, setColors] = useState(null);

    useEffect(() => {
        const newColors = [];
        for (let i = 0; i < 100; i++) {
            newColors.push(getRandomColor());
        }

        const timeout = setTimeout(() => {
            setColors(newColors);
        }, 500);

        return () => {
            clearTimeout(timeout);
        }
    }, [])

    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100vw" }}>
                <h1>Get Random Colors</h1>
                {
                    (colors === null) ?
                        (<h1>Loading...</h1>) :
                        (<div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: "10px" }}>
                            {colors?.map((color, index) => (
                                <ColorBox color={color} key={index} />
                            ))}
                        </div>)
                }
            </div>
            <Toaster />
        </>
    );
}

export default App;