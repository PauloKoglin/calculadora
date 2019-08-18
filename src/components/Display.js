import React, {Component} from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native'

const styles = StyleSheet.create({
    display: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
        alignItems: 'flex-end',
    },
    displayValue: {
        fontSize: 60,
        color: '#fff',
    }
})

export default class Display extends Component {
    render() {
        return (
            <TouchableHighlight
                style={styles.display}
                onPress={() => this.props.apagarDigito()}>
                <View >
                    <Text style={styles.displayValue}
                    numberOfLines={1}>{this.props.value}</Text>
                </View>
            </TouchableHighlight>
        )
    }
}