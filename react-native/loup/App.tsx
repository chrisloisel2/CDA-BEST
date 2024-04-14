import React, { useState, createContext, ReactNode } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Connection from "./Components/Connection";
import { NavigationContainer } from "@react-navigation/native";
import Game from "./Components/Game";

const Stack = createStackNavigator();

const App: React.FC = () => {
    return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Connection" component={Connection} />
				<Stack.Screen name="Game" component={Game} />
			</Stack.Navigator>
		</NavigationContainer>
    );
};

export default App;
