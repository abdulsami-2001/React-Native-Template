import { Text, View } from 'react-native'
import React from 'react'
import { STYLES } from './Screen6Styles'

const Screen6 = () => {
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

export default Screen6
