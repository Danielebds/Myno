import { StyleSheet } from "react-native";


export const s =StyleSheet.create({
    container:{
    padding:20,
    gap:12,
    },
    header:{
        flexDirection:"row",
        alignItems:"center",
        gap:16,
        paddingRight:16
    },

  title:{
    fontSize:16,
    color:"#e0f2fe",
    
  },

  containerPage:{
    width:"100%",
    flexDirection:"row",
    gap:7,
    alignItems:"center",
    padding:16,
    

  },
  titlePage:{
    color:"#f3f4f6",
    fontSize:18,
    flex:1,
  },
  list:{
    backgroundColor:"#374151",
    borderRadius:8,
  },

  separator:{
    flex:1,
    height:1,
    backgroundColor:"#9ca3af",
    marginLeft:42,
  },
  iconRight: {
    marginLeft: 'auto',   
  },

}) 