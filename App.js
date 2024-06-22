import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';

import { Home } from './src/components/Home';
import  About from './src/components/About';


import { Login } from './src/components/Login';
import { OtpViewPage } from "./src/components/OtpViewPage";
import  OthersBranchs  from "./src/components/OthersBranchs";
import  BookAppoinment  from "./src/components/BookAppoinment";
import  Packages  from "./src/components/Packages";
import  OnlineReports  from "./src/components/OnlineReports"

import ReportOnline from "./src/ReportOnline";

import PackageDetail from './src/components/PackageDetail';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



import { Icon } from "react-native-elements";

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();



function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ReportOnline"  component={ReportOnline}  />
    </Tab.Navigator>
  );
}

const HomeScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="OtpViewPage" component={OtpViewPage} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen   name="PackageDetail" 
      component={PackageDetail} />

    </Stack.Navigator>
  );
}


export default function App({ navigation }) {
  return (
    <NavigationContainer >

      <Drawer.Navigator
        initialRouteName='Home'
        screenOptions={{ headerTitleAlign: "center" }}
      >

<Drawer.Screen name="HomeScreen" component={HomeScreen}  />


        <Drawer.Screen name="Home" component={Home}
          options={{
              drawerIcon: ({focused, size}) => (
                 <Icon
                 name="home"
                    size={size}
                    color={focused ? '#7cc' : '#ccc'}
                 />
              ),
         

            headerTitle: () => ( // App Logo
              <Image
                style={{
                  width: 200, height: 50,
                  flexDirection: 'row',

                }}
                source={require('./public/assets/images/logo.png')}
                resizeMode='contain'
              />

            ),

            headerRight: (props) => (
              <View
              onPress={() => {
                navigation.navigate('Login');
              }}
                style={{ flex: 1, flexDirection: "row", padding: 15, alignItems: "center" }}
              >
                <TouchableOpacity   >
                  

                  <Image

                    

                    style={{
                      width: 40, height: 40,
                      flexDirection: 'row',

                    }}
                    source={require('./public/assets/images/user.png')}
                    resizeMode='contain'
                  />
              
                </TouchableOpacity>
              </View>
            )
          }}

        />
        <Drawer.Screen 

options={{
  drawerIcon: ({focused, size}) => (
     <Icon
     name="search"
        size={size}
        color={focused ? '#7cc' : '#ccc'}
     />
  ),


headerTitle: () => ( // App Logo
  <Image
    style={{
      width: 200, height: 50,
      flexDirection: 'row',

    }}
    source={require('./public/assets/images/logo.png')}
    resizeMode='contain'
  />

),

headerRight: (props) => (
  <View
  onPress={() => {
    navigation.navigate('Login');
  }}
    style={{ flex: 1, flexDirection: "row", padding: 15, alignItems: "center" }}
  >
    <TouchableOpacity   >
      

      <Image

        

        style={{
          width: 40, height: 40,
          flexDirection: 'row',

        }}
        source={require('./public/assets/images/user.png')}
        resizeMode='contain'
      />
  
    </TouchableOpacity>
  </View>
)
}}
        name="About" 
        component={About} 



        
        />


        <Drawer.Screen name="Login"
          component={Login}
          options={{
            headerShown: false, drawerItemStyle: {
              display: "none",
            },
          }} />

        <Drawer.Screen name="OtpViewPage"
          component={OtpViewPage}
          options={{
            headerShown: false,
            drawerItemStyle: {
              display: "none",
            },

          }} />

          
      <Drawer.Screen 




options={{
  drawerIcon: ({focused, size}) => (
     <Icon
     name="home"
        size={size}
        color={focused ? '#7cc' : '#ccc'}
     />
  ),


headerTitle: () => ( // App Logo
  <Image
    style={{
      width: 200, height: 50,
      flexDirection: 'row',

    }}
    source={require('./public/assets/images/logo.png')}
    resizeMode='contain'
  />

),

headerRight: (props) => (
  <View
  onPress={() => {
    navigation.navigate('Login');
  }}
    style={{ flex: 1, flexDirection: "row", padding: 15, alignItems: "center" }}
  >
    <TouchableOpacity   >
      

      <Image

        

        style={{
          width: 40, height: 40,
          flexDirection: 'row',

        }}
        source={require('./public/assets/images/user.png')}
        resizeMode='contain'
      />
  
    </TouchableOpacity>
  </View>
)
}}
      name="Others Branchs" 
      component={OthersBranchs}  />

      <Drawer.Screen 
       options={{
        drawerIcon: ({focused, size}) => (
           <Icon
              name="search"
              size={size}
              color={focused ? '#7cc' : '#ccc'}
           />
        ),
     }}
      
      name="Book Appoinment" 
      component={BookAppoinment} />



      <Drawer.Screen 
       options={{
        drawerIcon: ({focused, size}) => (
           <Icon
              name="search"
              size={size}
              color={focused ? '#7cc' : '#ccc'}
           />
        ),
     }}
      
      name="Packages" 
      component={Packages} />



      <Drawer.Screen 

options={{
  drawerIcon: ({focused, size}) => (
     <Icon
        name="search"
        size={size}
        color={focused ? '#7cc' : '#ccc'}
     />
  ),
}}
      
      name="Online Reports" 
      component={OnlineReports} />



      
<Drawer.Screen 

options={{
  drawerIcon: ({focused, size}) => (
     <Icon
        name="search"
        size={size}
        color={focused ? '#7cc' : '#ccc'}
     />
  ),
}}
  name="Package Detail"  component={PackageDetail} />
  
      </Drawer.Navigator>








  
  
 
      

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({



});
