import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        margin: 5
    },
    leftIcons:{
        flexDirection:'row',
        width: 100,
        justifyContent:'space-between'
    },
    iconsContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal: 5
    },
    likes: {
        fontWeight: 'bold',
        margin: 3
    },
    caption: {
        margin: 3

    },
    postedAt: {
        color: 'grey',
        margin: 3
    }
});

export default styles;