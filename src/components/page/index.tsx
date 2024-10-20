import {View,Text,TouchableOpacity} from "react-native"
import { Feather } from "@expo/vector-icons"
import {s} from "../page-list/styles"
type Props = {
    title:string
}


export function Page({title}:Props){
    return(
        <View style= {s.containerPage}>
           
            <Feather name="chevron-right" size={20} color={"#d1d5db"} />
            <Feather name="file-text" size={20} color={"#6366f1"} />
            <Text style={s.title}>{title}</Text>

            <TouchableOpacity style={s.iconRight}>
                <Feather name="plus" size={20} color={"#d1d5db"} />
            </TouchableOpacity>
        </View>
    )
}