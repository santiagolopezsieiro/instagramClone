import React from 'react';
import { View , Text } from 'react-native'
import styles from './styles'
import ProfilePictue from '../ProfilePicture';

const Story = ({ imageUri, name }) => (
    <View >
        <ProfilePictue uri={imageUri}/>
        <Text style={styles.name}>{name}</Text>
    </View>
)

export default Story;