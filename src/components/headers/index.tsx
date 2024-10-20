import { View, Image, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
export function Header() {
    return (
        <View className="bg-gray-800 border border-slate-600 flex-row items-center pt-5">
            <Image
                source={require("../../assets/img01.jpg")}
                className="w-20 h-20 border right-3  ml-6 mb-2 border-white rounded-full"
            />
           <View className="fle:1">
           <Text  className=" text-xl font-bold text-white">Daniele Barbosa</Text> 
           <Text className=" text-lg font-bold text-slate-400" >Danielebarbosabds@hotmail.com</Text>
           </View>
           <TouchableOpacity >
            <Feather className="ml-8 mb-8" name="more-horizontal" size={30} color={'#f3f4f6'} />
           </TouchableOpacity>
        </View>
    );
}
