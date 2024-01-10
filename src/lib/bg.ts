const DENSITY = 50 // lower = more dense
const HUE_START = 120
const HUE_END = 230
const MAX_SIZE = 3
const MIN_LIGHT = 33
const MAX_LIGHT = 67
const MIN_TRANSPARENCY = 1
const MAX_TRANSPARENCY = 66
const SATURATION = 100
const START_ANGLE = 240
const END_ANGLE = 300
const MAX_SPEED = 12

let num_bits: number
let bits: Bit[] = []

class Bit {
	x: number
	y: number
	size: number
	color: string
	angle: number
	speed: number
	constructor(width: number, height: number) {
		this.x = randomRange(0, width)
		this.y = randomRange(0, height)
		this.size = randomRange(1, randomRange(1, MAX_SIZE))
		let hue = randomRange(HUE_START, HUE_END)
		let light = randomRange(MIN_LIGHT, MAX_LIGHT)
		let sat = SATURATION
		let trans = randomRange(MIN_TRANSPARENCY, MAX_TRANSPARENCY)
		this.color = 'hsla(' + hue + ', ' + sat + '%, ' + light + '%, ' + trans + '%)'
		// We want to generate a random angle between 180 and 360
		// to make most of the bits go up
		this.angle = randomRange(START_ANGLE, END_ANGLE)
		this.speed = randomRange(1, MAX_SPEED) * 0.025
	}

	move(width: number, height: number) {
		this.x = this.x + this.speed * Math.cos((this.angle * Math.PI) / 180)
		this.y = this.y + this.speed * Math.sin((this.angle * Math.PI) / 180)
		if (this.x < 0) {
			this.x = width
		}
		if (this.x > width) {
			this.x = 0
		}
		if (this.y < 0) {
			this.y = height
		}
		if (this.y > height) {
			this.y = 0
		}
	}
}

function generateBits(width: number, height: number) {
	for (let i = 0; i < num_bits; i++) {
		bits.push(new Bit(width, height))
	}
}

function randomRange(min = 0, max = 360) {
	return Math.floor(Math.random() * (max - min) + min)
}

export function draw(bg_canvas: HTMLCanvasElement, bg_ctx: CanvasRenderingContext2D) {
	if (bg_ctx) {
		let width = bg_canvas.width
		let height = bg_canvas.height
		bg_ctx.clearRect(0, 0, bg_canvas.width, bg_canvas.height)
		for (let i = 0; i < bits.length; i++) {
			let bit = bits[i]
			bg_ctx.fillStyle = bit.color
			bg_ctx.beginPath()
			bg_ctx.arc(bit.x, bit.y, bit.size, 0, 2 * Math.PI)
			bg_ctx.fill()
			bit.move(width, height)
		}
	}
}

export function resizeCanvas(bg_canvas: HTMLCanvasElement) {
	let width = bg_canvas.width
	let height = bg_canvas.height
	num_bits = Math.floor((width * height) / DENSITY / DENSITY)
	bits = []
	generateBits(width, height)
}
