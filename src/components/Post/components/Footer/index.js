import React, { useState, useEffect } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import styles from './style'
import ADIcon from 'react-native-vector-icons/AntDesign'
import FontistoIcon from 'react-native-vector-icons/Fontisto'
import IoniconsIcon from 'react-native-vector-icons/Ionicons'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'

const Footer = ({likesCount: likesCountProp, caption, postedAt}) => { 

    const [isLiked, setIsLiked] = useState(false)
    const [likesCount, setLikesCount] = useState(0)

    const onLikePressed = () => {
        setIsLiked(!isLiked);
        const amount = isLiked ? 1 : -1
        setLikesCount(likesCount + amount)
    }

    useEffect(() => {
        setLikesCount(likesCountProp)
    },[])

    return (
        <View style={styles.container
        }>
        <View style={styles.iconsContainer}>
            <View style={styles.leftIcons}>
                <TouchableWithoutFeedback onPress={onLikePressed}>
                    {isLiked ? 
                        <ADIcon name="heart" size={25} color={"red"}/> : 
                        <ADIcon name="hearto" size={25} color={"grey"}/>
                    }
                </TouchableWithoutFeedback>
                <FontistoIcon name="comment" size={23} color={"grey"}/>
                <IoniconsIcon name="paper-plane-outline" size={25} color={"grey"}/>
            </View>
            <FontAwesomeIcon name="bookmark-o" size={25} />
        </View>
            <Text style={styles.likes}>{likesCount} likes</Text>
            <Text style={styles.caption}>{caption}</Text>
            <Text style={styles.postedAt}>{postedAt}</Text>
        </View>
    )   
}

export default Footer;