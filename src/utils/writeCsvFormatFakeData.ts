import * as path from 'path'
import {IPerson, makeRandomIPerson} from '../model/person'
import {mkdir, writeFile, appendFile} from '../fileApi'
import {range} from './range'


export const writeCsvFormatFakeData = async (fileName: string, cntOfMakeRandomPerson: number): Promise<string> => {
    
    if(cntOfMakeRandomPerson <= 0) {
        throw `check cntOfMakeRandomPerson: {${cntOfMakeRandomPerson}}`
    }

    const dirName = path.dirname(fileName)
    await mkdir(dirName)

    const firstPerson: IPerson = makeRandomIPerson()
    const comma = ','
    
    const csvKeys = Object.keys(firstPerson).join(comma)
    await writeFile(fileName, csvKeys)

    const newLine = '\n'
    for(let i of range(cntOfMakeRandomPerson)) {
        let person: IPerson = makeRandomIPerson()
        let values = Object.values(person).join(comma)
        await appendFile(fileName, newLine + values)
    }

    return `success write RandomPerson to fileName: {${fileName}}`
}

