import svg
import math
#from random import choice


rainbow = [
    '#ff0000',
    '#ff7f00',
    '#ffff00',
    '#00ff00',
    '#00ffff',
    '#0000ff',
    '#8b00ff',
]
dark = [
    '#8b0000',
    '#ec5800',
    '#f5c71a',    
    '#9dc209',
    '#0a7e8c',
    '#08457e',
    '#682860',
]
colors = dark
num_colors = len(colors)
rows = 4
columns = 6
width = 10 * columns
height = 10 * rows
radius = num_colors//2 + 1



def rainbow_circles(x, y, j):
    num_colors = len(colors)
    angle = j
    for i,color in enumerate(colors):
        #dash array and dash offset part adapted from https://stackoverflow.com/a/59232930
        circumference = 2 * math.pi * radius * (num_colors-i)/(num_colors)
        offset = 0.25*circumference
        dash = (angle / 360) * circumference         
        yield svg.Circle(
            cx=x, cy=y, r=radius*(num_colors-i)/(num_colors),
            stroke=color, stroke_width=1,
            fill="transparent", 
            stroke_dasharray=str(dash)+" "+str(circumference-dash),
            stroke_dashoffset=str(offset),
        )

def iron():
    #drawn using https://codepen.io/anthonydugois/pen/mewdyZ
    yield svg.Path(
        d=[
            svg.M(600,300),
            svg.L(350,300),
            svg.Q(350,200,600,200),
            svg.Q(550,150,450,150),
            svg.Q(525,125,600,150),            
            svg.L(600,200),
            svg.L(600,300),
        ],
        fill="none",
        stroke="black",
        stroke_width=5,
        )

circles = []
step_x = width // columns
step_y = height // rows
for y in range(step_y // 2, height, step_y):        
    for x in range(step_x // 2, width, step_x):    
        circles.extend(rainbow_circles(x=x, y=y, j=len(circles)))

irons=iron()
canvas = svg.SVG(
    viewBox=svg.ViewBoxSpec(0, 0, width, height),
    elements=circles,
)
#canvas = svg.SVG(
#    viewBox=svg.ViewBoxSpec(0, 0, 800, 600),
#    elements=irons,
#)
print(canvas)
