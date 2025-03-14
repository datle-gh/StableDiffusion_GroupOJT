import { StyleSheet, View, Text, Image, TouchableOpacity, FlatList, ImageSourcePropType } from "react-native";
import React from "react";
import { MaterialIcons } from '@expo/vector-icons';
import Image10 from "../../../assets/image/icons/image10.png";
import Image19 from "../../../assets/aiToolImage/image19.png";
import Image20 from "../../../assets/aiToolImage/image20.png";
import Image21 from "../../../assets/aiToolImage/image21.png";
import Image22 from "../../../assets/aiToolImage/image22.png";
import Image23 from "../../../assets/aiToolImage/image23.png";

interface DataItem {
    id: string;
    image: ImageSourcePropType;
    name: string;
    size: string;
}

const data: DataItem[] = [
    { id: "1", image: Image10, name: "Name", size: "94 Kb" },
    { id: "2", image: Image19, name: "Cloud", size: "674 Kb" },
    { id: "3", image: Image20, name: "Land", size: "315 Kb" },
    { id: "4", image: Image21, name: "Mushroom", size: "6,6 Kb" },
    { id: "5", image: Image22, name: "Pine", size: "62,4 Kb" },
    { id: "6", image: Image23, name: "Dragon", size: "737 Kb" },
];

const ManipulationTool: React.FC = () => {
    const renderItem = ({ item }: { item: DataItem }) => (
        <TouchableOpacity style={styles.listItem} activeOpacity={0.7} onPress={() => console.log("Clicked", item.name)}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.itemInfo}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemSize}>{item.size}</Text>
            </View>
            <TouchableOpacity style={styles.deleteButton}>
                <MaterialIcons name="close" size={24} color="black" />
            </TouchableOpacity>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Manipulation</Text>

            {/* Upload Section */}
            <TouchableOpacity style={styles.uploadBox}>
                <MaterialIcons name="add-photo-alternate" size={40} color="black" style={styles.uploadIcon} />
                <Text style={styles.uploadText}>Drag and drop photos to mashup</Text>
            </TouchableOpacity>

            {/* FlatList */}
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
};

export default ManipulationTool;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
        width: 290,
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 16,
    },
    uploadBox: {
        alignSelf: 'flex-start',
        alignItems: 'center',
        justifyContent: 'center',
        height: 140,
        width: 210,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        backgroundColor: '#f9f9f9',
        marginBottom: 16,
    },
    uploadIcon: {
        marginBottom: 8,
    },
    uploadText: {
        fontSize: 12,
        color: '#666',
        textAlign: 'center',
        justifyContent: 'center',
    },
    listContainer: {
        alignItems: 'flex-start',
        paddingBottom: 16,
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 210,
        height: 55,
        paddingHorizontal: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        marginBottom: 8,
        backgroundColor: '#fff',
    },
    itemImage: {
        width: 40,
        height: 40,
        marginRight: 8,
        borderRadius: 4,
    },
    itemInfo: {
        flex: 1,
        justifyContent: 'center',
    },
    itemName: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000',
    },
    itemSize: {
        fontSize: 12,
        color: '#666',
    },
    deleteButton: {
        marginLeft: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
});