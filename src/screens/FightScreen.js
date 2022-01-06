import React, {useState} from "react";
import {StyleSheet, View} from "react-native";
import {Button, Image, Text} from "react-native-elements";
import enemyImg from '../../assets/enemies/little_mushroom.png'
import Player from "../models/Player";
import Enemy from '../models/Enemy'

export default function FightScreen({navigation}) {

    const ATTACK = 'ATTACK'
    const DEFENSE = 'DEFENSE'

    const [player, setPlayer] = useState(new Player())
    const [enemy, setEnemy] = useState(new Enemy())
    const [round, setRound] = useState(0)

    const updateRound = () => {
        setRound(round + 1)
    }

    function attackAction() {
        enemy.takeDamage(player.doDamage())
    }

    const actionSelected = (action) => {

        switch (action) {
            case ATTACK:

                attackAction()
                break
        }

        if(enemy.isDead()){
            navigation.pop()
        }

        player.takeDamage(enemy.doDamage())

        if (player.isDead()) {
            navigation.pop()
        }

        updateRound()
    }




    return <View style={styles.container}>
        <View style={styles.fight_area}>
            <Text>Round: {round}</Text>
            <Text>Enemy Health: {enemy.health}</Text>
            <Image resizeMode={"contain"} containerStyle={styles.img} source={enemyImg}/>
            <Text>Player Health: {player.health}</Text>
        </View>
        <View style={styles.input_area}>
            <Button title={"Attack"} onPress={() => {
                actionSelected(ATTACK)
            }}/>
            <Button title={"Defend"} onPress={() => {
                actionSelected(DEFENSE)
            }}/>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    img: {
        height: 300,
        width: 300,

    },
    fight_area: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input_area: {
        flex: 1,
        backgroundColor: '#b6fdea',
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})
