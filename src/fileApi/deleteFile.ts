import * as fs from 'fs'
import {fileExists} from './fileExists'

export const deleteFile = (fileName: string): Promise<string> => {
    return new Promise(async(resolve, reject) => {
        const alreadyExists = await fileExists(fileName)
        !alreadyExists ? resolve(fileName) : 
        fs.unlink(fileName, (err:Error) => err ? reject(err) : resolve(fileName))
    })
}