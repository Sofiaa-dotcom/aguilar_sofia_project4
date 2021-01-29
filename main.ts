while (true) {
    console.log(input.acceleration(Dimension.X))
    if (input.acceleration(Dimension.X) > 2) {
        light.setAll(light.rgb(255, 255, 153))
    } else {
        light.clear()
    }
    
}
