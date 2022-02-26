import AudioPlayer   from '@/components/player.vue'
import AudioRecorder from '@/components/recorder.vue'

const plugin = {
  install (instance)  {
    instance.component('audio-player', AudioPlayer)
    instance.component('audio-recorder', AudioRecorder)
  }
}

export default plugin

export { AudioPlayer, AudioRecorder }
