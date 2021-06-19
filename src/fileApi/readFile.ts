import * as fs from 'fs'

export const readFile = (filePath: string) : Promise<any> => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err: Error, data: any) => err ? reject(err) : resolve(data))
    })
}