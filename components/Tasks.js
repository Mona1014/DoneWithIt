import react from "react";
import { StyleSheet, Text,View,TouchableOpacity} from 'react-native';


const Tasks = (props)=>{

    return(
        <View style={styles.item}>
            <View style={styles.itemLeft}>
               <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    item:{
        backgroundColor:'white',
        padding:15,
        borderRadius:10,
        marginTop:15, 
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    itemLeft:{
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap',
    },
    square:{
        width:24,
        height:24,
        backgroundColor:'#006D77',
        borderRadius:5,
        opacity:0.8,
        marginRight:15,
    },
    itemText:{
        maxWidth:'80%'
    },
    circular:{
        height:15,
        width:15,
        borderColor:'#006D77',
        borderWidth:2,
        borderRadius:6
    }
})


export default Tasks;
