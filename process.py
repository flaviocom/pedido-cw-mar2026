import shutil
import os
from rembg import remove
from PIL import Image

brain_dir = r"C:\Users\oflav\.gemini\antigravity\brain\19a092a1-469b-4792-a4a4-b113c59e4c10"
proj1_dir = r"D:\Antigravity\Meus-Projetos\pedidocwmar2026\img-produtos"
proj2_dir = r"D:\Antigravity\Meus-Projetos\pedido-cw-mar2026\img-produtos"

img_bottle = os.path.join(brain_dir, "media__1773847428787.jpg")
img_tube = os.path.join(brain_dir, "media__1773847428801.jpg")

# 1. Copiar imagem do Complemente (sem rembg pq usuário não pediu)
shutil.copy(img_tube, os.path.join(proj1_dir, "complemente hidratante para cabelos.jpg"))
shutil.copy(img_tube, os.path.join(proj2_dir, "complemente hidratante para cabelos.jpg"))

# 2. Processar remover fundo do Óleo Vitaminado (10cm = rembg) usando python
try:
    with open(img_bottle, "rb") as i:
        input_data = i.read()
    output_data = remove(input_data)
    out1_path = os.path.join(proj1_dir, "óleo vitaminado para pele facial.png")
    out2_path = os.path.join(proj2_dir, "óleo vitaminado para pele facial.png")
    
    with open(out1_path, "wb") as o:
        o.write(output_data)
    with open(out2_path, "wb") as o:
        o.write(output_data)

    print("Success")
except Exception as e:
    import traceback
    traceback.print_exc()
