import rimraf from 'rimraf'
import {fileExists} from './fileExists'

export const rmdir = (dirName: string): Promise<string> => {
    return new Promise(async(resolve, reject) => {
        const alreadyExists = await fileExists(dirName)
        !alreadyExists ? resolve(`there is no ${dirName}`) : rimraf(dirName, (error: Error) => {
            error ? reject(error) : resolve(dirName)
        })
    })
}