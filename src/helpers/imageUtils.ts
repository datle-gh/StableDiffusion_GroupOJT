import { useEffect, useState } from "react"
import { Image, ImageSourcePropType, Platform } from "react-native"
//@ts-ignore
import resolveAssetSource from "react-native/Libraries/Image/resolveAssetSource"


/**
 * A React hook that automatically retrieves the dimensions of an image.
 * Supports both remote images (URLs) and local assets (via require).
 * Works on both mobile (iOS/Android) and web platforms.
 *
 * @param {string | ImageSourcePropType} uri - The image source, either a remote URL or a local asset.
 * @returns {{
*   size: { width: number; height: number };
*   error: boolean;
* }} An object containing the width and height of the image, along with an error flag.
*
* @example
* const { size, error } = useImageSize(require('../../assets/image.png'));
*
* <Image
*   source={handleImageUrlType(uri)}
*   style={{ width: '100%', aspectRatio: size.width / size.height }}
* />
* 
* @author: Tien Dat
*/
export const useImageSize = (uri: string | ImageSourcePropType) => {
  const [size, setSize] = useState({ width: 0, height: 0 })
  const [error, setError] = useState(false)

  useEffect(() => {
    let isMounted = true
    setError(false)

    const setSafeSize = (width: number, height: number) => {
      if (isMounted) {
        setSize({ width, height })
      }
    }

    // 👉 Remote image (string URL)
    if (typeof uri === "string") {
      Image.getSize(
        uri,
        (width, height) => setSafeSize(width, height),
        (err) => {
          console.warn("Remote image size error:", err)
          setError(true)
          setSafeSize(1, 1)
        }
      )
    } else {
      // 👉 Local image (require)
      if (Platform.OS === "web") {
        // Web fallback: dùng <img> ẩn
        const src = (uri as any)?.uri || (resolveAssetSource(uri)?.uri ?? "")
        const img = new window.Image()
        img.onload = () => {
          setSafeSize(img.width, img.height)
        }
        img.onerror = (err) => {
          console.warn("Web image load error:", err)
          setError(true)
          setSafeSize(1, 1)
        }
        img.src = src
      } else {
        try {
          const asset = resolveAssetSource(uri)
          if (asset?.width && asset?.height) {
            setSafeSize(asset.width, asset.height)
          } else {
            throw new Error("Invalid asset")
          }
        } catch (err) {
          console.warn("Native image load error:", err)
          setError(true)
          setSafeSize(1, 1)
        }
      }
    }

    return () => {
      isMounted = false
    }
  }, [uri])

  return { size, error }
}


/**
 * A utility function that normalizes image sources for use in the <Image /> component.
 * Converts a string URL to the required `{ uri: string }` format,
 * while leaving local assets unchanged.
 *
 * @param {string | ImageSourcePropType} url - The image source, either a URL string or a local asset.
 * @returns {ImageSourcePropType} A normalized image source compatible with React Native's <Image /> component.
 *
 * @example
 * const imageSource = handleImageUrlType("https://example.com/image.jpg");
 * <Image source={imageSource} />
 * 
 * @author: Tien Dat
 */
export const handleImageUrlType = (url: string | ImageSourcePropType) => {
    return typeof url === "string" ? { uri: url } : url
}