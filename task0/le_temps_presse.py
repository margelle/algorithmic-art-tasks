import svg
import math


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

faded = [
    '#fcc7c7',
    '#fce3c7',
    '#fcf8c7',
    '#c8fcc7',
    '#c7fcf6',
    '#c7defc',
    '#e8c7fc',
]

grays = [    
    '#777777',
    '#999999',
    '#D7D7D7',    
    '#9D9D9D',
    '#B3B3B3',
    '#AAAAAA',
    '#A5A5A5',
]

""" grays 
colors = dark
colors_fade = grays
num_colors = len(colors)
rows = 12
columns = 30
num_circles = rows * columns
radius = num_colors//2 + 1
width = (2*radius + 2) * columns
height = (2*radius + 2) * rows
 """
colors = dark
colors_fade = faded
num_colors = len(colors)
rows = 5
columns = 7
num_circles = rows * columns
radius = num_colors//2 + 1
width = (2*radius + 2) * columns
height = (2*radius + 2) * rows


def rainbow_circles(x, y, angle):        
    for i, color in enumerate(colors):
        #dash array and dash offset part adapted from https://stackoverflow.com/a/59232930
        circumference = 2 * math.pi * radius * (num_colors-i)/(num_colors)
        offset = 0.25 * circumference
        sweep = (angle / (num_circles)) * circumference

        #non-faded circle
        yield svg.Circle(
            cx=x, cy=y, r=radius*(num_colors-i)/(num_colors),
            stroke=color, stroke_width=1,
            fill="transparent", 
            stroke_dasharray=str(circumference - sweep)+" "+str(sweep),
            stroke_dashoffset=str(offset),
        )
        
        #faded circle
        yield svg.Circle(
            cx=x, cy=y, r=radius*(num_colors-i)/(num_colors),
            stroke=colors_fade[i], stroke_width=1,
            fill="transparent", 
            stroke_dasharray="0 "+str(circumference - sweep)+" "+str(sweep)+" 0",
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
count = 0
for y in range(step_y // 2, height, step_y):        
    for x in range(step_x // 2, width, step_x):            
        circles.extend(rainbow_circles(x=x, y=y, angle=count))
        count+=1

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
