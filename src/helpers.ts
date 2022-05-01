import { toBlob } from 'html-to-image'

const TWEET_URL_REGEX = /https:\/\/twitter\.com\/\w+\/status\/(\d+)/

export function isValidTweetUrl (url: string): boolean {
  return TWEET_URL_REGEX.test(url)
}

export function getTweetId (url: string): string | null {
  const match = url.match(TWEET_URL_REGEX)

  return match ? match[1] : null
}

export function downloadBlob (blob: Blob, name: string) {
  const blobUrl = URL.createObjectURL(blob)
  const link = document.createElement('a')

  link.href = blobUrl
  link.download = name

  link.dispatchEvent(
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window
    })
  )

  document.body.removeChild(link)
}

export const snapshotCreator = (element: HTMLElement): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    try {
      const scale = window.devicePixelRatio

      toBlob(element, {
        height: element.offsetHeight * scale,
        width: element.offsetWidth * scale,
        style: {
          transform: 'scale(' + scale + ')',
          transformOrigin: 'top left',
          width: element.offsetWidth + 'px',
          height: element.offsetHeight + 'px'
        }
      })
        .then((blob) => {
          if (blob == null) return

          resolve(blob)
        })
    } catch (e) {
      reject(e)
    }
  })
}

export function copyBlobImageToClipboard (blob: Blob) {
  window
    .navigator
    .clipboard
    .write([
      new ClipboardItem({
        [blob.type]: blob
      })
    ])
}
