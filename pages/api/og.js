import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'edge'
}

export default async function handler() {
  const imageData = await fetch(new URL('/public/og-logo.jpg', import.meta.url)).then(res => res.arrayBuffer())

  return new ImageResponse(<img src={imageData} />, {
    width: 1200,
    height: 630
  })
}
