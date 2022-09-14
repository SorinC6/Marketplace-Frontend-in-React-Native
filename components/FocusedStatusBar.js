import { View, Text, StatusBar } from 'react-native'
import { useIsFocused } from '@react-navigation/core'
import React from 'react'

const FocusedStatusBar = (props) => {
    const isFocused = useIsFocused()
    return <StatusBar animated={true} {...props} />
}

export default FocusedStatusBar