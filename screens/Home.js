import { useState } from 'react'
import { Text, SafeAreaView, FlatList, View } from 'react-native'
import { FocusedStatusBar, HomeHeader, NftCard } from '../components'
import { NFTData, COLORS } from '../constants'


const Home = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FocusedStatusBar backgroundColor={COLORS.primary} />
            <View style={{ flex: 1, zIndex: 1 }}>
                <FlatList
                    data={NFTData}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => {
                        return <NftCard data={item} />
                    }}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={<HomeHeader />}
                />
            </View>
            <View style={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, zIndex: -1 }}>
                <View style={{ height: 300, backgroundColor: COLORS.primary }} />
                <View style={{ flex: 1, backgroundColor: COLORS.white }} />
            </View>
        </SafeAreaView>
    )
}

export default Home