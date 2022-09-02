import React, { Component } from 'react';
import { Text, 
    View,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    Image,
    ScrollView,
    TextInput
              } from 'react-native';

import {RFValue} from 'react-native-responsive-fontsize'; 
import {DropDownPicker}  from 'react-native-dropdownpicker';

export default class CreatePost extends Component {

    constructor(props){
        super(props)
        this.State={
            previewImage: "Image_1",
            dropdownHeight: 40
        };
    }

    ComponentDidMount(){}
   

    render() {

        let preview_images = {
            image_1: require("../assets/image_1.jpg"),
            image_2: require("../assets/image_2.jpg"),
            image_3: require("../assets/image_3.jpg"),
            image_4: require("../assets/image_4.jpg"),
            image_5: require("../assets/image_5.jpg"),
            image_6: require("../assets/image_6.jpg"),
            image_7: require("../assets/image_7.jpg"),
        };


        return (
            <View style={styles.container}>
               <SafeAreaView style={styles.AndroidSafeArea}/>
               <View style={styles.appTitle}>
                <View style={styles.appIcon}>
                <Image
                    source={require("../assets/logo.png")}
                    style={styles.iconImage}>
                </Image> 

                </View>
                <View style={styles.appTitleTextContainer}>
                <Text style={styles.appTitleText}>New Post</Text>
                </View>

                </View>
                <View style={styles.fieldsContainer}>
               <ScrollView>
                <Image 
                style={styles.previewImage}
                source={preview_images[this.State.previewImage]}
                ></Image>
               </ScrollView>

                </View>
                <View style={{height:
                         RFValue(this.State.dropdownHeight)}}>
                   <DropDownPicker
                   items={[
                    {label: "Image 1", value:"image_1"},
                   
                    {label: "Image 2", value:"image_2"},
                   
                    {label: "Image 3", value:"image_3"},
                   
                    {label: "Image 4", value:"image_4"},
                   
                    {label: "Image 5", value:"image_5"},
                   
                    {label: "Image 6", value:"image_6"},
                   
                    {label: "Image 7", value:"image_7"}
                   ]}
                   defaultValue={this.State.previewImage}

                   containerStyle={{
                    height:40,
                    borderRadius:20,
                    marginBottom:10
                   }}
                   onOpen={()=>{
                    this.setState({dropdownHeight:170});
                   }}
                   onClose={()=>{
                    this.setState({dropdownHeight:40});
                   }}
                   style={{
                    justifyContent:"flex-start"
                   }}
                   DropDownStyle={{
                    backgroundColor:"#2A2A2A"
                   }}
                   labelStyle={{
                    color:"white"
                   }}
                   arrowStyle={{
                    color:"white"
                   }}
                   onChangeItem={item =>
                this.setState({
                    previewImage:item.value
                })
                }/>
            </View>
            <TextInput 
            style={styles.inputFont}
            onChangeText={caption => this.setState({caption})}
            placeholder={"caption"}
            placeholderTextColor="white"
            />
            <ScrollView/>
            <View style={{flex:0.08}}/>
            </View>
            
            
        )
    }
}