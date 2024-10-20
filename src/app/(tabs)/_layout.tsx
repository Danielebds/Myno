import {Tabs} from "expo-router";
import "../../styles/global"
import { Feather } from "@expo/vector-icons";
export default function TabsLayout(){
    return (
        <Tabs
        sceneContainerStyle={{backgroundColor:"#0f172a"}}
        screenOptions={{
            headerShown:false,
            tabBarShowLabel:false,
            tabBarActiveTintColor:"#f1f5f9",
            tabBarInactiveTintColor:"#475569",
            tabBarStyle:{
                backgroundColor:"#1e293b",
                borderTopColor:"#9ca3af",
            }
        }}
        >

            <Tabs.Screen
            
            name="index"
            options={{
                tabBarIcon:({color,size})=>(
                <Feather name="home" size={30} color={color} />
                )

            }}
            
            />
            <Tabs.Screen
            
            name="search"
            options={{
                tabBarIcon:({color,size})=>(
                <Feather name="search" size={30} color={color} />
                )

            }}
            
            />
            <Tabs.Screen
            
            name="notifications"
            options={{
                tabBarIcon:({color,size})=>(
                <Feather name="bell" size={30} color={color} />
                ),
                tabBarBadge:3,
                tabBarBadgeStyle:{
                    backgroundColor:"#dc2626",
                    borderRadius:4,
                }
            }}
            
            />
            <Tabs.Screen
            
            name="edit"
            options={{
                tabBarIcon:({color,size})=>(
                <Feather name="edit" size={30} color={color} />
                )

            }}
            
            />
        </Tabs>
        
    )

}
