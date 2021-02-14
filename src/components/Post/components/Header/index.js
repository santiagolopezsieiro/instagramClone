import React from 'react';
import { Text, View } from 'react-native';
import ProfilePictue from '../../../ProfilePicture';
import styles from './style'
import ADIcon from 'react-native-vector-icons/Entypo';

const Header = ({imageUri, name}) => (
    <View style={styles.container}>
        <View style={styles.left}>
            <ProfilePictue uri={imageUri} size={40}/>
            <Text style={styles.name}>{name}</Text>
        </View>
        <View style={styles.right}>
            <ADIcon name="dots-three-vertical" size={20} />
        </View>
    </View>
)

export default Header;