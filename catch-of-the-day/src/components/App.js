import React from "react";

import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import smapleFishes from "../sample-fishes";

class App extends React.Component {
    state = {
        fishes: {},
        order: {},
    };

    addFish = (fish) => {
        // 1 - Take a copy of the existing state
        const fishesCopy = { ...this.state.fishes };

        // 2 - Add our new fish to that fishes variable
        fishesCopy[`fish${Date.now()}`] = fish;

        // 3 - Set the new fishes object to state
        this.setState({
            fishes: fishesCopy,
        });
    };

    loadSampleFishes = () => {
        this.setState({
            fishes: smapleFishes,
        });
    };

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market" />
                </div>
                <Order />
                {/* eslint-disable-next-line prettier/prettier */}
                <Inventory 
                    addFish={this.addFish}
                    loadSampleFishes={this.loadSampleFishes}
                />
            </div>
        );
    }
}

export default App;
