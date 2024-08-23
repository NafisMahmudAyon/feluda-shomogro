import CustomButton from "@/components/CustomButton";
import { books } from "@/constants";
import { router } from "expo-router";
import { useRef, useState } from "react";
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";
const Welcome = () => {
  const swiperRef = useRef<Swiper>(null)
  const [activeIndex, setActiveIndex] = useState(0);
  const isLastSlide = activeIndex === books.length - 1;
  const renderBook = ({ item: book, index }) => (
    <TouchableOpacity key={index} style={{ flex: 1, margin: 5 }} onPress={() => {
      router.replace(`/(auth)/${book.id}`);
    }}>
      {/* <Image source={book.image} style={{ width: '100%', height: 300 }} resizeMode="contain" /> */}
      <View style={{ borderWidth: 1, padding: 20, borderRadius: 10 }}>
        <Text style={{ color: 'black', fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>
          {book.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <ScrollView className="flex h-full bg-white">
        <SafeAreaView>
        <TouchableOpacity
          className="w-full flex justify-end items-end p-5"
          onPress={() => {
            router.replace("/(auth)/sign-up");
          }}
        >
          <Text className="text-black text-md font-JakartaBold">Skip</Text>
        </TouchableOpacity>
        {/* <View className="grid grid-cols-2 gap-2">
        {books.map(book => (
          <TouchableOpacity key={book.id}>
            <Image source={book.image} className="w-full h-[300px]" resizeMode="contain" />
            <View className=" border p-5">
              <Text className="text-black text-3xl font-bold text-center">{book.title}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View> */}
        <FlatList
          data={books}
          renderItem={renderBook}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          contentContainerStyle={{ padding: 5 }}
        />

        {/* <Swiper
        ref={swiperRef}
        loop={false}
        dot={
          <View className="w-[32px] h-[4px] mx-1 bg-[#E2E8F0] rounded-full" />
        }
        activeDot={
          <View className="w-[32px] h-[4px] mx-1 bg-[#0286FF] rounded-full" />
        }
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {books.map((item) => (
          <View key={item.id} className="flex items-center justify-center p-5">
            <Image source={item.image} className="w-full h-[300px]" resizeMode="contain" />
            <View className="flex items-center justify-center w-full mt-10">
              <Text className="text-black text-3xl font-bold mx-10 text-center">{item.title}</Text>
            </View>
          </View>
        ))}
      </Swiper> */}

        {/* <CustomButton
        title={isLastSlide ? "Get Started" : "Next"}
        onPress={() =>
          isLastSlide
            ? router.replace("/(auth)/sign-up")
            : swiperRef.current?.scrollBy(1)
        }
        className="w-11/12 mt-10 mb-5"
      /> */}
      </SafeAreaView>
      </ScrollView>
  );
};
export default Welcome;
