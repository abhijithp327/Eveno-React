import {
    View, Text,
    FlatList,
    SafeAreaView,
    Dimensions,
    TouchableOpacity,
} from 'react-native'
import React, { useState, useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import style from '../theme/style'
import { Colors } from '../theme/color'
import IntroItem from './IntroItem'
import Slides from './Slides'
import { Avatar } from 'react-native-paper'
import themeContext from '../theme/themeContex'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Introduction() {
    const ref = React.useRef(null);
    const navigation = useNavigation();
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const theme = useContext(themeContext);

    const Footer = () => {
        return <View style={{ paddingHorizontal: 20, backgroundColor: theme.bg }} >
            <View style={{
                flexDirection: 'row', alignSelf: 'center'
            }}>
                {Slides.map((_, index) =>
                (
                    <View key={index}
                        style={[style.indicator, currentSlideIndex === index && {
                            borderColor: Colors.default,
                            borderWidth: 1,
                            paddingHorizontal: 15,
                            borderRadius: 10,
                            backgroundColor: Colors.default,
                            alignItems: 'center'
                        },]}
                    />
                ))}
            </View>
            <View>
                {currentSlideIndex == 0 ? (
                    <View style={{ paddingVertical: 20 }}>
                        <TouchableOpacity style=
                            {[style.btn,
                            {
                                // width: width / 2.5,
                                alignItems: 'center',
                                backgroundColor: Colors.default
                            }]}
                            onPress={goNextSlide}
                        >
                            <Text style={[style.btntxt]}>Next</Text>
                        </TouchableOpacity>

                    </View>

                ) : currentSlideIndex == 1 ? (
                    <View style={{ paddingVertical: 20 }}>
                        <TouchableOpacity style=
                            {[style.btn,
                            {
                                // width: width / 2.5,
                                alignItems: 'center',
                                backgroundColor: Colors.default
                            }]}
                            onPress={goNextSlide}
                        >
                            <Text style={[style.btntxt]}>Next</Text>
                        </TouchableOpacity>

                    </View>
                ) :
                    <View style={{ paddingVertical: 20 }}>
                        <TouchableOpacity style=
                            {[style.btn,
                            {
                                alignItems: 'center',
                                backgroundColor: Colors.default
                            }]}
                            onPress={() => navigation.navigate('Signup')}
                        >
                            <Text style={[style.btntxt]}>Get Started</Text>
                        </TouchableOpacity>

                    </View>
                }
            </View>
        </View>
    }

    const updateCurrentSlideIndex = (e) => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / width);
        setCurrentSlideIndex(currentIndex);
    };

    const goNextSlide = () => {
        const nextSlideIndex = currentSlideIndex + 1;
        if (nextSlideIndex != Slides.length) {
            const offset = nextSlideIndex * width;
            ref?.current?.scrollToOffset({ offset });
            setCurrentSlideIndex(nextSlideIndex);
        }

    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList data={Slides}
                ref={ref}
                renderItem={({ item }) => <IntroItem item={item} />}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                bounces={false}
                keyExtractor={(item) => item.id}
                onMomentumScrollEnd={updateCurrentSlideIndex}
            />
            <Footer />
        </SafeAreaView>
    )
}