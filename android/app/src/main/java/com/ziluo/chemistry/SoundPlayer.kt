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
        player = MediaPlayer.create(reactApplicationContext, getRawResourceId("sound_$n"))
        player!!.setVolume(90f, 90f)
        player!!.start()
    }

    @ReactMethod
    fun stopSound() {
        if (player == null) return;
        if (player!!.isPlaying) {
            player!!.stop()
        }
    }

}