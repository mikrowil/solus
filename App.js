import { StyleSheet} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Provider, useSelector} from "react-redux";
import store from './src/store/store'
import AsyncStorage from '@react-native-async-storage/async-storage'

import SignUpScreen from "./src/screens/SignUpScreen";
import StartScreen from "./src/screens/StartScreen";

const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <Provider store={store}>
            <NavGroup/>
        </Provider>
    );
}

function NavGroup() {
    const token = AsyncStorage.getItem('token')

    return (
        <NavigationContainer>
            {
                !token ? <Stack.Navigator>
                    <Stack.Screen name={"signUp"} component={SignUpScreen}/>
                </Stack.Navigator> : <Stack.Navigator>
                    <Stack.Screen name={"start"} component={StartScreen}/>
                </Stack.Navigator>

            }
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
