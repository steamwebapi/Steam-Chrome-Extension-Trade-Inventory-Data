// Offscreen document for playing audio in the background
// This runs in a DOM context where Audio is available
// Uses browser API with chrome fallback for cross-browser compatibility

const browserAPI = typeof browser !== 'undefined' ? browser : chrome

const SOUND_FILES = {
  notification: 'notification.mp3',
  cash: 'cash.mp3',
}

browserAPI.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'play-sound') {
    const soundFile = SOUND_FILES[message.soundType]
    
    if (!soundFile) {
      console.log('[Offscreen] Unknown sound type:', message.soundType)
      sendResponse({ success: false, error: 'Unknown sound type' })
      return
    }
    
    const audio = new Audio(soundFile)
    audio.volume = 0.5
    
    audio.play()
      .then(() => {
        console.log('[Offscreen] ✅ Sound played:', message.soundType)
        sendResponse({ success: true })
      })
      .catch((error) => {
        console.error('[Offscreen] ❌ Sound failed:', error)
        sendResponse({ success: false, error: error.message })
      })
    
    // Return true to indicate async response
    return true
  }
})

console.log('[Offscreen] Audio player ready')
