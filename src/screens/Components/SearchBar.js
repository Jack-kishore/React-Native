import React from 'react'
import {View, TextInput, StyleSheet} from 'react-native'
import { exp } from 'react-native/Libraries/Animated/src/Easing';
import { Feather } from '@expo/vector-icons';

const SearchBar = ( {term, onTermChange, onTermComplete} ) => {
    return(
        <View style = {styles.bgStyle}>
            <Feather name="search" style={styles.iconStyle}/>
            <TextInput 
            autoCapitalize = 'none'
            autoCorrect = {false}
            style={styles.inputStyle} 
            placeholder='Search'
            value = {term}
            onChangeText = {onTermChange}
            onEndEditing = {onTermComplete}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    bgStyle: {
        backgroundColor:'#F0EEEE',
        height:50,
        borderRadius:5,
        marginHorizontal : 15,
        flexDirection:"row"
    },
    inputStyle: {
        flex : 1,
        fontSize:18,
    },
    iconStyle: {
       fontSize:35,
       alignSelf:'center',
       marginHorizontal:10
    }
});

export default SearchBar