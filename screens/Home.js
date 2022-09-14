import { useState } from 'react'
import { Text, SafeAreaView, FlatList, View } from 'react-native'
import { FocusedStatusBar } from '../components'
import { NFTData, COLORS } from '../constants'


const Home = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FocusedStatusBar backgroundColor={COLORS.primary} />
        </SafeAreaView>
    )
}

export default Home