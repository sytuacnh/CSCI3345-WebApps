package example

import org.scalajs.dom
import org.scalajs.dom.document
import scalajs.js
import scala.scalajs.js.annotation.JSExportTopLevel
import org.scalajs.dom.html

object Hello {
  def main(args: Array[String]): Unit = {
    println("Hello, Dr. Lewis!")

    drawToCanvas(document.getElementById("mainCanvas").asInstanceOf[html.Canvas])
  }

  def drawToCanvas(canvas: html.Canvas): Unit = {
    val context = canvas.getContext("2d").asInstanceOf[dom.CanvasRenderingContext2D]
    context.fillRect(100, 100, 200, 150)
  }
}
