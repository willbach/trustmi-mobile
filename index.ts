import React from 'react'
import { AppRegistry } from 'react-native'

import 'react-native-crypto'

import boot from "./src/boot"

const App = boot()

AppRegistry.registerComponent('ThePond', () => App)
