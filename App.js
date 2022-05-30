import { StyleSheet, Text,View,KeyboardAvoidingView,TextInput,TouchableOpacity,Keyboard} from 'react-native';
import {useState} from 'react';
import Tasks from './components/Tasks';

export default function App() {

  //console.log("app executed")

  const [task,setTask]=useState();
  const [taskItems, setTaskItems]=useState([]);

  const handleAddTask=()=>{

   // console.log(task);
    if(task==null){
      alert('Please enter a task');
      return;
    }
    else{
      Keyboard.dismiss();
      setTaskItems([...taskItems,task])
      setTask(null);
    }

  }

  const doneTask =(index)=>{
 
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index,1);
    setTaskItems(itemsCopy);
    alert("Yay! Task Done!");
  }
   
  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto"/> */}
       {/* building a todo app  */}
       <View style={styles.tasksWrapper}>
         <Text style={styles.heading}>Today's Tasks</Text>

          <View style={styles.items}>
            {/* tasks are added here  */}
              {
                taskItems.map((item,index)=>{
                  return (
                    <TouchableOpacity  key={index} onPress={()=>doneTask(index)} >
                      <Tasks text={item}/>
                    </TouchableOpacity>
                  )
                })
              }
              {/* <Tasks text={'task 1'}/>
              <Tasks text={'task 2'}/> */}
          </View>
       </View>

       <KeyboardAvoidingView behavior={Platform.OS === "ios"?"padding":"height"} style={styles.writeTask}>
       <TextInput style={styles.input} placeholder={'Write a task'}  value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lavender',
  },
  tasksWrapper:{
    paddingTop:80,
    paddingHorizontal:20,
  },
  heading:{
    fontSize:30,
    fontWeight:'bold',
  },
  items:{
    marginTop:25,
  },
  writeTask:{
    position:'absolute',
    bottom:60,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'
  },
  input:{
    backgroundColor:'white',
    paddingHorizontal:15,
    paddingVertical:15,
    width:250,
    //textAlign:'center',
    borderRadius:60,
    borderColor:'lightgrey',
    borderWidth:1
  },
  addWrapper:{
    height:60,
    width:60,
    backgroundColor:'white',
    borderRadius:60,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'lightgrey',
    borderWidth:1,
  },
  addTaskBtn:{
    color:'grey',
    fontSize:50
  },
  addText:{
    opacity:0.6
  }
});
