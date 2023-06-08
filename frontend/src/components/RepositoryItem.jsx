import { View, StyleSheet, Image, Pressable } from 'react-native';
import Text from './Text';
import theme from '../theme';


const styles = StyleSheet.create({
    separator: {
      borderRadius: 10,
      padding: 5,
      margin: 5,
      backgroundColor: 'white',

    },
    avatar: {
        width: 50,
        height: 50
    },
    flexContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    flexItemA: {
        flexGrow: 0,
        padding: 5,
        marginLeft: 5,

    },
    flexItemB: {
        flexGrow: 1,
        padding: 5,
        marginLeft: 5,  
        marginTop: 1, 

    },
    languageButton: {
        backgroundColor: theme.colors.primary,
        width: 100,
        height: 30,
        border: 1,
        borderRadius: 5,
        
    },
    languageButtonText: {
        color: 'white',
        margin: 'auto', 
        padding: 5,
        textAlignVertical: 'middle'
    },
    lineFlex: {
        height: 20,
    },
    flexContainerB: {
        width: 300,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    numberCount: {
        fontSize: theme.fontSizes.subheading,
        fontWeight: theme.fontWeights.bold
    },
  });

const RepositoryItem = ({item}) => {
    return (
        <View style={styles.separator}>
             <View style={styles.flexContainer}> 
             
             <View style={styles.flexItemA}>

             <Image
        style={styles.avatar}
        source={{uri: `${item.ownerAvatarUrl}` }}
      />
      </View>
      <View style={styles.flexItemB}>

          <Text fontSize="subheading" fontWeight="bold" color="primary" style={styles.lineFlex}>{item.fullName}</Text>
          <Text fontSize="subheading" color="textSecondary" style={styles.lineFlex}>{item.description}</Text>
          <Pressable style={styles.languageButton} onPress={() => {}}>
          <Text fontSize="subheading" style={styles.languageButtonText} fontWeight='bold'>{item.language}</Text>
          </Pressable>

          </View>
          </View>

          <View style={styles.flexContainerB}> 
             
             <View style={styles.flexItemA}>
          <Text style={styles.numberCount}>{
          (item.stargazersCount > 1000) 
          ? (item.stargazersCount / 1000).toFixed(1) + 'k'
          : item.stargazersCount
        }</Text> 
        <Text>Stars</Text>
        </View>
        <View style={styles.flexItemA}>

          <Text style={styles.numberCount}>{
          (item.forksCount > 1000)
          ? (item.forksCount / 1000).toFixed(1) + 'k'
          : item.forksCount
          }</Text>
          <Text>
          Forks
          </Text>
          </View>
          <View style={styles.flexItemA}>

          <Text style={styles.numberCount}>{item.reviewCount}</Text>
          <Text>Reviews</Text>
          </View>
          <View style={styles.flexItemA}>

          <Text style={styles.numberCount}>{item.ratingAverage}</Text>
          <Text>
          Rating
          </Text>
          </View>
          </View>
          </View>
      );

}


export default RepositoryItem