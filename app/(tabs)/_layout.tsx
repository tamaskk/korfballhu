import { Tabs } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#f1af18",
          width: "90%",
          alignSelf: "center",
          borderRadius: 20,
        },
        tabBarActiveBackgroundColor: "#d19711",
        tabBarItemStyle: {
          display: "flex",
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "white",

        headerTitleAlign: "center",
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#f1af18",
        },
      }}
    >
      <Tabs.Screen
        name="teams/search"
        options={{
          headerTitle: "Keresés",
          title: "Keresés",
          tabBarIcon: ({ color }) => (
            <AntDesign name="search1" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="teams/index"
        options={{
          headerTitle: "Csapatok",
          title: "Csapatok",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="users" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Magyar Korfball Szövetség",
          title: "Főoldal",
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="leagues/index"
        options={{
          headerTitle: "Bajnokság",
          title: "Bajnokság",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="soccer-ball-o" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="login/index"
        options={{
          headerTitle: "Bejelentkezés",
          title: "Bejelentkezés",
          tabBarIcon: ({ color }) => (
            <Entypo name="login" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
