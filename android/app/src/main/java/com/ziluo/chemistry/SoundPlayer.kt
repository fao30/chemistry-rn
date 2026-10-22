package com.ziluo.chemistry

import android.annotation.SuppressLint
import android.media.MediaPlayer
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class SoundPlayer(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {
    private var player: MediaPlayer? = null;

    override fun getName(): String {
        return "SoundPlayer"
    }


    @SuppressLint("DiscouragedApi")
    fun getRawResourceId(fileName: String): Int {
        return reactApplicationContext.resources.getIdentifier(
            fileName,
            "raw",
            reactApplicationContext.packageName
        )
    }

    @ReactMethod
    fun playSound(n: String) {
        // release the previous player, otherwise every play leaks one and they overlap
        stopSound()
        // a missing file has no resource id, and MediaPlayer.create would throw on it
        val id = getRawResourceId("sound_$n")
        if (id == 0) return
        player = MediaPlayer.create(reactApplicationContext, id) ?: return
        player!!.setVolume(90f, 90f)
        player!!.start()
    }

    @ReactMethod
    fun stopSound() {
        player?.release()
        player = null
    }

}