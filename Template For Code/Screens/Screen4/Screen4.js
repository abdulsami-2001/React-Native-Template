import { Text, View } from 'react-native'
import React from 'react'
import { STYLES } from './Screen4Styles'

const Screen4 = () => {
    return (
        <>
            <View style={STYLES.upperBucket} >
                <Text>Bucket</Text>
            </View>
            <View style={STYLES.midBucket} >
                <Text>Bucket</Text>
            </View>
            <View style={STYLES.lowerBucket} >
                <Text>Bucket</Text>
            </View>
        </>
    )
}

export default Screen4
