import { View,ScrollView} from "react-native"
import { Header } from "@/components/headers"
import { RecentList } from "@/components/recent-list"
import { PageList } from "@/components/page-list"
import { DATA } from "@/utils/data"

export default function Index () {
    return (
        <View className="flex:1, pt-10">
            <Header/>

            <ScrollView 
            showsVerticalScrollIndicator
            contentContainerStyle ={{paddingTop:24,paddingBottom:100,}}
            >
            <RecentList data={DATA.RECENT}/>
            <PageList data={DATA.PAGES}/>
            </ScrollView>
        </View>
    )
}