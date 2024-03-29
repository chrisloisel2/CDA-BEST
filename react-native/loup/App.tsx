import React, { useState, createContext, ReactNode } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Connection from "./Components/Connection";

const Stack = createStackNavigator();

const App: React.FC = () => {
    return (
		<Connection></Connection>
    );
};

export default App;
