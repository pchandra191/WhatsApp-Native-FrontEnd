import React, { useEffect, useState } from "react";
import {
  FlatList,
  Text,
  ImageBackground,
  KeyboardAvoidingView,
} from "react-native";

import { useRoute } from "@react-navigation/native";

import ChatMessage from "../components/ChatMessage";
import BG from "../assets/images/BG.png";

import ChatRoomsData from "../data/Chats";
import InputBox from "../components/InputBox";

const ChatRoomScreen = () => {
  return (
    <ImageBackground style={{ width: "100%", height: "100%" }} source={BG}>
      <FlatList
        data={ChatRoomsData.messages}
        renderItem={({ item }) => <ChatMessage message={item} />}
        inverted
      />
      <InputBox />
    </ImageBackground>
  );
};

export default ChatRoomScreen;
