/* eslint-disable react/static-property-placement */
import React from "react";
import PropTypes from "prop-types";

import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import smapleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from "../base";

class App extends React.Component {
    state = {
        fishes: {},
        order: {},
    };

    static propTypes = {
        match: PropTypes.object,
    };

    componentDidMount() {
        const { params } = this.props.match;
        // first reinstate our localStorage
        const localStorageRef = localStorage.getItem(params.storeId);
        if (localStorageRef) {
            this.setState({
                order: JSON.parse(localStorageRef),
            });
        }
        this.ref = base.syncState(`${params.storeId}/fishes`, {
            context: this,
            state: "fishes",
        });
    }

    componentDidUpdate() {
        // eslint-disable-next-line prettier/prettier
        localStorage.setItem(
            this.props.match.params.storeId,
            JSON.stringify(this.state.order),
        ); 
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

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

    updateFish = (key, updatedFish) => {
        // 1 - Take a copy of the current state
        const fishesCopy = { ...this.state.fishes };

        // 2 - Update that state
        fishesCopy[key] = updatedFish;

        // 3 - Set new values to state
        this.setState({
            fishes: fishesCopy,
        });
    };

    deleteFish = (key) => {
        // 1 - Take a copy of current state
        const fishesCopy = { ...this.state.fishes };

        // 2 - Update the state
        fishesCopy[key] = null;

        // 3 - Set new values to state
        this.setState({
            fishes: fishesCopy,
        });
    };

    loadSampleFishes = () => {
        this.setState({
            fishes: smapleFishes,
        });
    };

    addToOrder = (key) => {
        // 1 - Take a copy of state
        const orderCopy = { ...this.state.order };
        // 2 - Either add to the order, or update the number in our order
        orderCopy[key] = orderCopy[key] + 1 || 1;
        // 3 - Call setState to update our state object
        this.setState({
            order: orderCopy,
        });
    };

    removeFromOrder = (key) => {
        // 1 - Take a copy of current state
        const orderCopy = { ...this.state.order };

        // 2 - Remove item from order
        delete orderCopy[key];

        // 3 - Update state
        this.setState({
            order: orderCopy,
        });
    };

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market" />
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map((key) => (
                            <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder} />
                        ))}
                    </ul>
                </div>
                {/* eslint-disable-next-line prettier/prettier */}
                <Order 
                    fishes={this.state.fishes}
                    order={this.state.order}
                    removeFromOrder={this.removeFromOrder}
                />
                {/* eslint-disable-next-line prettier/prettier */}
                <Inventory 
                    addFish={this.addFish}
                    updateFish={this.updateFish}
                    deleteFish={this.deleteFish}
                    loadSampleFishes={this.loadSampleFishes}
                    fishes={this.state.fishes}
                    storeId={this.props.match.params.storeId}
                />
            </div>
        );
    }
}

export default App;
