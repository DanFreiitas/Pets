import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Welcome from "../pages/welcome";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import PetLove from "../pages/PetLove";
import MyAcount from "../pages/Account";
import Historico from "../pages/Historico";

import PetWalker from "../pages/PeWalker";

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
            <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
            <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
            <Stack.Screen name="PetLove" component={PetLove} options={{ headerShown: false }} />
            <Stack.Screen name="MyAcount" component={MyAcount} options={{ headerShown: false }} />
            <Stack.Screen name="Historico" component={Historico} options={{ headerShown: false }} />
            <Stack.Screen name="PetWalker" component={PetWalker} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}