package example

import org.scalajs.dom
import org.scalajs.dom.document
import scalajs.js
import scalajs.js.timers
import scala.scalajs.js.annotation.JSExportTopLevel
import org.scalajs.dom.html
import scala.collection.mutable.ListBuffer

// case class Mouse(var x: Double, var y: Double)

object Hello {
  val canvas = document.getElementById("mainCanvas").asInstanceOf[html.Canvas]
  canvas.width = dom.window.innerWidth.toInt
  canvas.height = dom.window.innerHeight.toInt
  val ctx = canvas.getContext("2d").asInstanceOf[dom.CanvasRenderingContext2D]
  val rand = scala.util.Random
  val getRandomDouble = (min: Int, max: Int) => rand.nextDouble * (max - min) + min
  val getRandomInt = (min: Int, max: Int) => min + rand.nextInt(( max - min) + 1)
  var meteors = new ListBuffer[Meteor]()
  val speed = 0.05
  val r = 4.0
  val traceColor = "rgba(250,230,150,0.4)"
  // val mouse = Mouse(0, 0)
  
  val colors = Map(
      1 -> "#d7c6aa",
      2 -> "#ff3d7f",
      3 -> "#979592",
      4 -> "#00b2a6",
      5 -> "#356b8c",
      6 -> "#ffff00",
      7 -> "#ffbf00",
      8 -> "#8c56d3",
      9 -> "#ff0000",
      10 -> "#efff00"
  )

  val colorsSize = colors.size

  val getColor = () => colors(getRandomInt(1, colorsSize))

  def drawInstruction() = {
    val ctx = canvas.getContext("2d").asInstanceOf[dom.CanvasRenderingContext2D]
    ctx.font = "lighter 17px Verdana"
    ctx.fillStyle = "#c5b59b"
    ctx.textAlign = "center"
    ctx.fillText("click();", canvas.width / 2, canvas.height / 2)
    ctx.save()
  }

  def animate(): Unit = {
    val ctx = canvas.getContext("2d").asInstanceOf[dom.CanvasRenderingContext2D]
    ctx.save()
    drawInstruction()
    ctx.globalAlpha = 0.1
    ctx.globalCompositeOperation = "destination-out"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.restore()
    meteors.foreach((meteor: Meteor) => {
      if (!meteor.dead) {
        meteor.move
        meteor.drawTrace
      }
    })
    dom.window.requestAnimationFrame { now => // inferred as Double
      timers.setTimeout(1000 / 60)(animate)
    }
  }

  // def requestAnimationFrame(callback: Function0[Any]) = {
  //   dom.window.setTimeout(callback, 1000 / 60)
  //   timers.setTimeout(1000 / 60)(callback())
  //   window.requestAnimationFrame(1000 / 60 _)
  // }

  def main(args: Array[String]): Unit = {
    println("Hello world.")

    dom.window.onload = (e: dom.Event) => animate()

    dom.window.addEventListener("mousedown", (event: dom.MouseEvent) => {
      // println("event.pageX: " + event.pageX)
      // println("event.pageY: " + event.pageY)
      // mouse.x = event.pageX
      // mouse.y = event.pageY
      val meteor = new Meteor(
        x = getRandomDouble(0, canvas.width), 
        r = r, 
        color = getColor(), 
        mx = event.pageX,
        my = event.pageY,
        ctx = ctx,
        speed = speed,
        traceColor = traceColor
      )
      meteors += meteor
    })
  }
}


class Meteor(var x: Double, val r: Double, val color: String, val mx: Double, val my: Double, val ctx: dom.CanvasRenderingContext2D, val speed: Double, val traceColor: String) {
  val dest = (mx, my)
  var dead = false
  var y = r

  def draw: Unit = {
    ctx.save();
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * math.Pi);
    ctx.fillStyle = color
    ctx.fill();
    ctx.restore();
  }

  def move: Unit = {
    val dx = dest._1 - x
    val dy = dest._2 - y
    x = (x + dx * speed)
    y = (y + dy * speed)
    if (Math.abs(dx) <= 1 && Math.abs(dy) <= 1) {
      dead = true
    } else {
      draw
    }
  }

  def drawTrace: Unit = {
    ctx.save();
    ctx.fillStyle = traceColor;
    ctx.beginPath();
    ctx.arc(x, y, r + 2 * math.random, 0, 2 * math.Pi);
    ctx.fill();
    ctx.restore();
  }
}