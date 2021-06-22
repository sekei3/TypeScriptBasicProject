import { readFileGenerator } from "../fileApi"
import { zip } from "../utils/zip"

export const csvFileReadGenerator = async(fileName: string) => {
    console.log(fileName)
    let temp = []
    for(let line of readFileGenerator(fileName)) {
        if(temp.length == 0) {
            temp = line.split(',')
            console.log(temp)
        }
        else {
            console.log(zip(temp, line.split(',')))
        }
    }
}
