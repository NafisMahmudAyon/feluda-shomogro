import { booksData } from '@/constants';
import { router, useLocalSearchParams, useRouter } from 'expo-router';
import { useRef, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper';

export default function DetailsScreen() {
  const { id } = useLocalSearchParams();

  // const router = useRouter();
  // const { id } = router.query;
  const swiperRef = useRef<Swiper>(null)
  const [activeIndex, setActiveIndex] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const isLastSlide = activeIndex === booksData.length - 1;
  const book = booksData.find((book) => book.id === Number(id));

  // Check if the book exists and has pages
  const pages = book ? book.pages : [];

  const isLastPage = activeIndex === pages.length - 1;
  const handleIndexChange = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <ScrollView>
      <SafeAreaView>
        <TouchableOpacity
          style={{ marginTop: 20, paddingHorizontal: 15, backgroundColor: 'red', paddingVertical: 10,  }}
          onPress={() => {
            router.replace("/(auth)/welcome");
          }}
        >
          <Text style={{ display: 'flex', gap: 30, color: 'black', fontSize: 20, fontWeight: 'bold' }}> <Text>⫷</Text> <Text>Back to Story</Text></Text>
        </TouchableOpacity>
        {book && pages.length > 0 && (
          <>
            <Swiper
              ref={swiperRef}
              loop={false}
              dot={
                <View style={styles.dot} />
              }
              activeDot={
                <View style={styles.activeDot} />
              }
              onIndexChanged={handleIndexChange}
            >
              {pages.map((item, index) => {
                return(
                  
                  <View key={item.id} style={styles.slide}>
                    <View style={styles.textContainer}>
                      <Text style={styles.text}>{item.content}</Text>
                    </View>
                  </View>
              )})}
            </Swiper>
            <Text className='absolute bottom-4 right-4'><Text>{activeIndex + 1}</Text> of <Text>{pages.length}</Text></Text>
          </>
        )}
      </SafeAreaView>
    </ScrollView>
  );
}

// Disable the header for this screen
DetailsScreen.options = {
  headerShown: false,
};

const styles = StyleSheet.create({
  dot: {
    display: 'none',
    width: 32,
    height: 4,
    marginHorizontal: 1,
    backgroundColor: '#E2E8F0',
    borderRadius: 2,
  },
  activeDot: {
    display: 'none',
    width: 32,
    height: 4,
    marginHorizontal: 1,
    backgroundColor: '#0286FF',
    borderRadius: 2,
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  image: {
    width: '100%',
    height: 300,
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  text: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'normal',
    // textAlign: 'center',
    marginHorizontal: 10,
  },
});
