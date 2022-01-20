import pkg from "jimp";
const { read } = pkg;

export default async function saveImage(data) {
  try {
    const image = await read(data.image);
    image.write(`${process.env.ImgDir}/${data.formatted_name}.png`);
  } catch (error) {
    throw new Error(error);
  }
}
