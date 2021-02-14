import React from 'react';
import Story from '../Story'
import { View, FlatList } from 'react-native';
import styles from './styles'

const data=[
    {
        imageUri:'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        name: 'lucas'
    },{
        imageUri:'https://image.shutterstock.com/image-vector/male-silhouette-avatar-profile-picture-260nw-199246382.jpg',
        name: 'johmn'
    },{
        imageUri:'https://i.pinimg.com/564x/04/bb/21/04bb2164bbfa3684118a442c17d086bf.jpg',
        name: 'vadim'
    },{
        imageUri:'https://i.pinimg.com/originals/be/ac/96/beac96b8e13d2198fd4bb1d5ef56cdcf.jpg',
        name: 'jeff'
    },    {
        imageUri:'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        name: 'lucass'
    },{
        imageUri:'https://image.shutterstock.com/image-vector/male-silhouette-avatar-profile-picture-260nw-199246382.jpg',
        name: 'johmns'
    },{
        imageUri:'https://i.pinimg.com/564x/04/bb/21/04bb2164bbfa3684118a442c17d086bf.jpg',
        name: 'vadims'
    },{
        imageUri:'https://i.pinimg.com/originals/be/ac/96/beac96b8e13d2198fd4bb1d5ef56cdcf.jpg',
        name: 'jeffs'
    },
]

const Stories = () => (
    <FlatList 
        style={styles.container}
        data={data}
        keyExtractor={({name}) => name}
        horizontal
        showsHorizontalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <Story imageUri={item.imageUri} name={item.name}/>}
     />

)

export default Stories