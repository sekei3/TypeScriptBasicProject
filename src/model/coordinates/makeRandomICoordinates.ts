import {ICoordinates} from './ICoordinates'
import {makeICoordinates} from './makeICoordinates'
import Chance from 'chance'

const C = new Chance

export const makeRandomICoordinates = (): 
ICoordinates => makeICoordinates( C.latitude(), C.longitude())


