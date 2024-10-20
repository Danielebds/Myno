import { View, TouchableOpacity, Image,Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import {s} from "./styles"

type Props = {
  data: {
    title: string;
    cover?: string;
  };
};
export function Recent({ data }: Props) {
  return (
  
  <TouchableOpacity style={s.container}>
    <Image  style={s.cover} source={{uri:data.cover}}/>
     
    <View  style={s.content}>
          <Feather  name="file-text" size={32} color={"#6366f1"} style={s.icon}/>

          <Text style={s.title} numberOfLines={2}>{data.title} </Text>
          
          
    </View>
   
  </TouchableOpacity>
  )
}
