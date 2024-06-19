
import fs from "fs/promises"

async function writeSVGFile(containerID: string, width: number, heigth: number, options?: string[]) {

const svgFile = await fs.open(`${containerID}.svg`, "w")

svgFile.close()
}

export {writeSVGFile}