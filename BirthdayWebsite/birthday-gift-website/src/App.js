import React from 'react';
import GiftCard from './components/GiftCard';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Birthday Gift Website</h1>
            </header>
            <main>
                <GiftCard />
            </main>
        </div>
    );
}

export default App;