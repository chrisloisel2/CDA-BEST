package com.example.users.websocket

import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.WebSocket
import okhttp3.WebSocketListener
import okio.ByteString


class WebSocketClient(url: String) : WebSocketListener() {
    private var webSocket: WebSocket? = null

    init {
        val client = OkHttpClient()
        val request = Request.Builder().url(url).build()
        webSocket = client.newWebSocket(request, this)
    }

    fun send(message: String) {
        webSocket?.send(message)
    }

    override fun onOpen(webSocket: WebSocket, response: okhttp3.Response) {
        println("Connection opened")
    }

    override fun onMessage(webSocket: WebSocket, text: String) {
        println("Receiving : $text")
    }

    override fun onClosing(webSocket: WebSocket, code: Int, reason: String) {
        webSocket.close(1000, null)
        println("Closing : $code / $reason")
    }

    override fun onFailure(webSocket: WebSocket, t: Throwable, response: okhttp3.Response?) {
        println("Error : " + t.message)
    }
}
