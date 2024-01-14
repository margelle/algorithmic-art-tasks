import svg
from random import choice
#TODO draw an iron 
#TODO remove sections of circles


rows = 4
columns = 6
width = 60
height = 40
radius = 4
colors = [
    '#ff0000',
    '#ff7f00',
    '#ffff00',
    '#00ff00',
    '#00ffff',
    '#0000ff',
    '#8b00ff',
]


def rainbow_circles(x, y):
    num_colors = len(colors)
    for i,color in enumerate(colors):
        yield svg.Circle(
            cx=x, cy=y, r=radius*(num_colors-i)/num_colors,
            fill=color,
        )

#    yield svg.Circle(
#        cx=x, cy=y, r=radius*5//7,
#        fill='none',
#        stroke=colors[2],
#        stroke_width=radius//7,
#    )


circles = []
step_x = width // columns
step_y = height // rows
for x in range(step_x // 2, width, step_x):
    for y in range(step_y // 2, height, step_y):
        circles.extend(rainbow_circles(x=x, y=y))


canvas = svg.SVG(
    viewBox=svg.ViewBoxSpec(0, 0, width, height),
    elements=circles,
)

print(canvas)