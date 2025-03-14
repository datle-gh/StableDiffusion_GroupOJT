import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

interface GenerateButtonProps {
    name: string;
}

const GenerateButton: React.FC<GenerateButtonProps> = ({ name }) => {
    const [isActive, setIsActive] = useState(false);

    const handlePress = () => {
        setIsActive(!isActive); // Toggle trạng thái mỗi khi bấm
    };

    return (
        <View style={[
            styles.backgroundGenerate, 
            isActive ? styles.activeBackground : styles.inactiveBackground // Đổi màu nền khi active
        ]}>
            <TouchableOpacity style={styles.generate} onPress={handlePress}>
                <Ionicons 
                    name={isActive ? 'sparkles' : 'sparkles-sharp'} // Đổi icon khi nhấn
                    size={30} 
                    color={isActive ? "black" : "gray"} // Màu icon thay đổi khi nhấn
                />
                <Text style={isActive ? styles.activeTextGenerate : styles.inactiveTextGenerate}>{name}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default GenerateButton;

const styles = StyleSheet.create({
    backgroundGenerate: {
        backgroundColor: '#3EB8AF',
        width: 70,
        height: 70,
        borderRadius: 10,
        position: "absolute",
        justifyContent: 'center',
        alignItems: 'center',
    },
    activeBackground: {
        backgroundColor: '#3EB8AF', // Màu nền thay đổi khi nhấn
    },
    inactiveBackground: {
        backgroundColor: '#FFFFFF', // Màu nền mặc định
    },
    generate: {
        alignItems: "center",
    },
    activeTextGenerate: {
        fontFamily: 'Arial',
        fontWeight: "bold",
        fontSize: 13,
        color: "black"
    },
    inactiveTextGenerate: {
        fontFamily: 'Arial',
        fontWeight: "bold",
        fontSize: 13,
        color: "gray"
    }
});
