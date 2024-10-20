import {View,Text,TouchableOpacity,FlatList} from "react-native"
import { Feather } from "@expo/vector-icons"
import {s} from "./styles"
import { Page } from "../page"
type Props ={
    data:{
        id:string
        title:string
    }[]
}
export function PageList({data}:Props){
    return(
        <View style={s.container}>
            <View style={s.header}>
            <Text style={s.titlePage} className="text-gray-300 ml-1 ">Privado</Text>

            <TouchableOpacity>
                <Feather  name="more-horizontal" size={20} color={"#d1d5db"}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Feather  name="plus" size={20} color={"#d1d5db"}/>
            </TouchableOpacity>
            </View>

            <FlatList  
             data={data}
             keyExtractor={item => item.id}
             renderItem={({item}) => <Page title={item.title}/>}
             showsVerticalScrollIndicator ={false}
             style={s.list}
             ItemSeparatorComponent={() => <View style={s.separator}/>}
             scrollEnabled={false}
            
            />


           
        </View>
    )
}