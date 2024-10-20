import {FlatList,View, Text} from "react-native"
 import {s} from "../recent/styles"
import { Recent } from "../recent"
type Props = {
    data:{
         id:string
         title:string
         cover?:string
    }[]
}
export function RecentList( {data}:Props){
    return(
        <View className="flex:1 w-full  ">
            <Text className="text-gray-300 ml-5 mb-5 text-xl">Recentes</Text>

            <FlatList
            data={data}
            keyExtractor={item =>item.id}
            renderItem={({item}) => <Recent data={item}/>}
            horizontal
            showsHorizontalScrollIndicator ={false}
            contentContainerStyle={s.containerList}
            
            />
        </View>
    )
}