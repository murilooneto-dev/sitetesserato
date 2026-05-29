from PIL import Image

# Coordenadas: (x_esquerda, y_topo, x_direita, y_base) — imagens originais são 4000x6000px
# Aumente y_topo e y_base juntos para descer o crop, diminua para subir

crops = {
    "bruno":   (700, 1600, 3300, 4200),  # ajuste y_topo/y_base aqui
    "cris":    (900,    0, 3100, 2200),  # ajuste y_topo/y_base aqui
    "mauricio":(700,    0, 3300, 2600),  # ajuste y_topo/y_base aqui
}

for name, (x1, y1, x2, y2) in crops.items():
    img = Image.open(f"public/images/{name}.jpg")
    crop = img.crop((x1, y1, x2, y2))
    crop = crop.resize((500, 500), Image.LANCZOS)
    crop.save(f"public/images/{name}-thumb.jpg", quality=90)
    print(f"{name}: crop ({x1},{y1}) -> ({x2},{y2}), output 500x500")
