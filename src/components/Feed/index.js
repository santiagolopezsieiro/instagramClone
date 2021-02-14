import React from 'react';
import { Text, FlatList } from 'react-native';
import Post from '../Post';
import Stories from '../Stories';

const data = [
    {
    user: {
        imageUri: 'https://image.shutterstock.com/image-vector/male-silhouette-avatar-profile-picture-260nw-199246382.jpg',
        name: 'lukas'
    },
    imageUri: 'http://www.todopaisajes.com/800x600/paisaje-natural-en-el-campo.jpg',
    caption: 'beautiful grass #instagram',
    likesCount: 1234,
    postedAt: '6 minutes ago'
},{
    user: {
        imageUri: 'https://image.shutterstock.com/image-vector/male-silhouette-avatar-profile-picture-260nw-199246382.jpg',
        name: 'lukas'
    },
    imageUri: 'http://www.todopaisajes.com/800x600/paisaje-natural-en-el-campo.jpg',
    caption: 'beautiful grass #instagram',
    likesCount: 1234,
    postedAt: '6 minutes ago'
},{
    user: {
        imageUri: 'https://image.shutterstock.com/image-vector/male-silhouette-avatar-profile-picture-260nw-199246382.jpg',
        name: 'lukas'
    },
    imageUri: 'http://www.todopaisajes.com/800x600/paisaje-natural-en-el-campo.jpg',
    caption: 'beautiful grass #instagram',
    likesCount: 1234,
    postedAt: '6 minutes ago'
}
]

const Feed = () => (
    <FlatList 
        data={data}
        ListHeaderComponent={Stories}
        renderItem={({item}) => <Post post={item} />}
    />
)

export default Feed