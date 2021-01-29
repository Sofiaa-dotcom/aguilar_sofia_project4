while True: 
    print(input.acceleration(Dimension.X))
    if input.acceleration(Dimension.X) > 2 : 
        light.set_all(light.rgb(255, 255, 153))
    else:
        light.clear()