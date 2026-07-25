export const generateImageSrc = ({ width, height, bg, color, text }) => {
  let imgSrc = `https://placehold.co/${width || 600}x${height || 400}/${bg || 'gray'}/${color || 'white'}?text=${text || width + 'x' + height}`
  return imgSrc
}