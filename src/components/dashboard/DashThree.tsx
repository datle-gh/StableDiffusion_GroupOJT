import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';

const feedbacks = [
  { id: 1, name: "Kris Roher", comment: "OMG!!!! This is soooo coool!!", avatar: "https://www.mannoapp.com/static/media/Hombre3.d4400226e83bb0344bcb.png" },
  { id: 2, name: "Audrey Simmmons", comment: "Stunning!", avatar: "https://i.pinimg.com/236x/fe/bf/1f/febf1f437971a4055082ec6d6aca7ed3.jpg"},
  { id: 3, name: "Alfonso Stanton", comment: "Very nice work! Keep it up!", avatar: "https://static.univid.io/profile/toyfaces/coloredbg/ToyFaces_Colored_BG_63.jpg" },
  { id: 4, name: "Val Purvis", comment: "Awesome work mask!", avatar: "https://cdn.dribbble.com/users/230875/screenshots/12114173/media/df3e6ff6ad1ee715644dfad9a7e89b6a.jpg?resize=400x300&vertical=center" },
  { id: 5, name: "Leo Stanton", comment: "Awesome work!", avatar: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTvKExDXfDDQQRrE3tZCGWGSPhxmVXIqYjEEVaMp4EZkqm3bSo7"},
  { id: 6, name: "Bill Gaston", comment: "Looks amazing!", avatar: "https://picx.zhimg.com/v2-9b062ef1027200b74b3dedef6b02a8fe_l.jpg?source=1def8aca" },
];

const houseImages = [
  "https://img.freepik.com/premium-photo/cute-kawaii-house-3d-render-illustration-pastel-colors_691560-6206.jpg?w=360",
  "https://img.freepik.com/premium-photo/cute-kawaii-house-3d-render-illustration-pastel-colors_691560-6197.jpg?w=360",
  "https://img.freepik.com/premium-photo/cute-kawaii-house-3d-render-illustration-pastel-colors_691560-6202.jpg?w=360",
  "https://img.freepik.com/premium-photo/cute-home-with-lgbt-flag-colors-3d-render-illustration_691560-6059.jpg?w=360",
];

const DashThree = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#F5F5F5",
        borderWidth: 5,
        borderColor: "gray",
        borderRadius: 20,
        padding: 10,
        margin: 10,
      }}
    >
      {/* Left Side - Content */}
      <View style={{ flex: 2, padding: 20 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <TouchableOpacity>
            <AntDesign
              name="close"
              size={24}
              color="black"
              style={{ marginRight: 10 }}
            />
          </TouchableOpacity>

          <Image
            source={{
              uri: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTvKExDXfDDQQRrE3tZCGWGSPhxmVXIqYjEEVaMp4EZkqm3bSo7",
            }}
            style={{ width: 40, height: 40, borderRadius: 20, marginRight: 10 }}
          />
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>David</Text>
            <Text style={{ color: "gray" }}>@David205</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: "auto",
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "white",
                padding: 10,
                borderRadius: 12,
                flexDirection: "row",
                alignItems: "center",
                marginRight: 5, // Khoảng cách nhỏ giữa Like & Use
              }}
            >
              <AntDesign
                name="hearto"
                size={16}
                color="black"
                style={{ marginRight: 5 }}
              />
              <Text>Like</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "black",
                padding: 10,
                borderRadius: 12,
              }}
            >
              <Text style={{ color: "white" }}>Use</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <Text style={{ fontWeight: "bold", fontSize: 24 }}>The House</Text>
          <Text
            style={{ color: "gray", textAlign: "center", marginBottom: 10 }}
          >
            Photo cute kawaii house 3d render illustration in pastel colors
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity
              style={{
                backgroundColor: "white",
                borderRadius: 20,
                padding: 10,
                marginRight: 50,
              }}
            >
              <AntDesign name="left" size={24} color="black" />
            </TouchableOpacity>
            <Image
              source={{
                uri: "https://img.freepik.com/free-photo/3d-rendering-cartoon-house_23-2150188294.jpg?w=360",
              }}
              style={{ width: 360, height: 360, borderRadius: 10 }}
            />
            <TouchableOpacity
              style={{
                backgroundColor: "white",
                borderRadius: 20,
                padding: 10,
                marginLeft: 50,
              }}
            >
              <AntDesign name="right" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 15,
            marginTop: 5,
          }}
        >
          You might also like
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            width: "100%",
            padding: 10,
            borderRadius: 10,
            marginTop: 20,
          }}
        >
          {houseImages.map((image, index) => (
            <Image
              key={index}
              source={{ uri: image }}
              style={{
                width: 80,
                height: 80,
                borderRadius: 10,
                marginHorizontal: 10, // Khoảng cách đều giữa các hình
              }}
            />
          ))}
        </View>
      </View>

      {/* Right Side - Feedback */}
      <View
        style={{
          flex: 1,
          backgroundColor: "#F5F5F5",
          padding: 20,
          borderLeftWidth: 1,
          borderColor: "#ddd",
        }}
      >
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>Feedback</Text>
        <ScrollView>
          {feedbacks.map((item) => (
            <View
              key={item.id}
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <Image
                source={{ uri: item.avatar }}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  marginRight: 10,
                }}
              />
              <View>
                <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
                <Text>{item.comment}</Text>
              </View>
            </View>
          ))}
        </ScrollView>

        <TextInput
          placeholder="Write a comment"
          style={{
            marginTop: 10,
            padding: 10,
            borderRadius: 10,
            backgroundColor: "white",
            height: 100,
          }}
        />
      </View>
    </View>
  );
};

export default DashThree;
