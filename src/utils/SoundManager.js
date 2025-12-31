export class SoundManager {
    constructor() {
        this.launchAudio = new Audio('/launch.mp3');
        this.ambientAudio = new Audio('/ambient_loop.mp3');
        this.ambientAudio.loop = true;
        this.ambientAudio.volume = 0.5;
    }

    playLaunch() {
        try {
            if (this.launchAudio.readyState >= 2) {
                this.launchAudio.currentTime = 0;
            }
            this.launchAudio.play().catch(e => console.warn("Launch audio failed:", e));
        } catch (e) {
            console.warn("Audio error:", e);
        }
    }

    playAmbient() {
        try {
            const playPromise = this.ambientAudio.play();
            if (playPromise !== undefined) {
                playPromise.catch(e => {
                    console.warn("Audio play failed (likely autoplay policy):", e);
                });
            }
        } catch (e) {
            console.warn("Audio error:", e);
        }
    }

    stopAmbient() {
        this.ambientAudio.pause();
        this.ambientAudio.currentTime = 0;
    }
}

export const soundManager = new SoundManager();
