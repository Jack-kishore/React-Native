import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import SearchBar from '../screens/Components/SearchBar';
import yelp from '../api/yelp'

const SearchScreen = () => {

    const [term, setTerm] = useState('')
    const [results, setResults] = useState([])

    const searchApi = async () => {
        
         const response = await yelp.get('/search', {
             params:{
                limit : 50,
                term : term,
                location: 'san jose'
             }
         })
         console.log(response)
         setResults(response.data.businesses)
    }

    return (<View style={styles.bgColor}>
            <SearchBar term = {term} 
            onTermChange = {(newTerm) => setTerm(newTerm)} 
            onTermComplete = {() => searchApi()}/>
            <Text>Search Screen {term}</Text>
            <Text> we have {results.length} </Text>
        </View>);
};

const styles = StyleSheet.create({ 
    bgColor:{
        backgroundColor:'white'
    }
});

export default SearchScreen;