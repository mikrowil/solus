import AsyncStorage from "@react-native-async-storage/async-storage";
import {NavigationContainer} from "@react-navigation/native";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import StartScreen from "./screens/StartScreen";
import FightScreen from "./screens/FightScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

//Native stack navigator, used to create navigator, screens and groups.
const Stack = createNativeStackNavigator()

/**
 * NavGroup handles the token and checks if a user is logged in. If a token is present, the user will be directed to the game. Otherwise,
 * the user will be sent to the sign in screen.
 * @returns {JSX.Element}
 * @constructor
 */
export default function NavGroup() {

    //Should be present if the user has logged in
    const token = AsyncStorage.getItem('token')

    return (
        <NavigationContainer>
            {
                //Ternary operator for checking authentication. Routes user accordingly.
                !token ?
                    <Stack.Navigator>
                        <Stack.Screen name={"signIn"} component={SignInScreen}/>
                        <Stack.Screen name={"signUp"} component={SignUpScreen}/>
                    </Stack.Navigator>
                    :
                    <Stack.Navigator>
                        <Stack.Screen name={"start"} component={StartScreen}/>
                        <Stack.Screen name={"fight"} component={FightScreen}/>
                    </Stack.Navigator>

            }
        </NavigationContainer>
    )
}
