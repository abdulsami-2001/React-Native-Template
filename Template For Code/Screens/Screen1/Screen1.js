import { Text, View } from 'react-native'
import React from 'react'
import { STYLES } from './Screen1Styles'
import { useDeviceOrientation } from '@react-native-community/hooks'

const Screen1 = () => {

    const { landscape } = useDeviceOrientation()

    return (
        <>
            <View style={STYLES.mainCont(landscape)}>

                <View style={STYLES.wrapper(landscape)} >
                    <View style={STYLES.upperBucket(landscape)} >
                        <Text>Upper Bucket</Text>
                    </View>
                    <View style={STYLES.midBucket(landscape)} >
                        <Text>MidBucket</Text>
                    </View>
                </View>
                <View style={STYLES.lowerBucket(landscape)} >
                    <Text>Lower Bucket</Text>
                </View>
            </View>

        </>
    )
}

export default Screen1

