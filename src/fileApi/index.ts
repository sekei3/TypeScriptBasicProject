import {fileExists} from './fileExists'
import {mkdir} from './mkdir'
import {rmdir} from './rmdir'
import {writeFile} from './writeFile'
import {readFile} from './readFile'
import {appendFile} from './appendFile'
import {deleteFile} from './deleteFile'

export const exists = async(filePath: string) => {
    const result = await fileExists(filePath)
    console.log(`fileExists result: ${result}`)
}

export const makeDir = async(dirName: string) => {
    const result = await mkdir(dirName)
    console.log(`makeDirName: ${result}`)
}

export const removeDir = async(dirName: string) => {
    const result = await rmdir(dirName)
    console.log(`removeDirName: ${result}`)
}

export const writeTest = async(fileName: string, data: any) => {
    const result = await writeFile(fileName, data)
    console.log(`writeFile:${data} to ${fileName}`)
}

export const readTest = async(fileName: string) => {
    const result = await readFile(fileName)
    console.log(`readFile:${result} to ${fileName}`)
}

export const appendFileTest = async(fileName: string, data: any) => {
    const result = await appendFile( fileName, data)
    console.log(`appendFile:${result} to ${fileName}`)
}

export {fileExists, mkdir, rmdir, writeFile, readFile, appendFile, deleteFile}