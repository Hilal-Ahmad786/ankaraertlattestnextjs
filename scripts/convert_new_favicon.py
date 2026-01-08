from PIL import Image
import os

def convert_favicon():
    input_path = '/Users/hilalahamd/.gemini/antigravity/brain/28ef4ce5-1ee0-4627-a861-3d5d2efefb23/uploaded_image_1767861050015.png'
    output_path = 'src/app/favicon.ico'

    if not os.path.exists(input_path):
        print(f"Error: Input file found at {input_path}")
        # Try checking if we need to copy it first? 
        # The prompt says the user uploaded it, so it should be there.
        # But if the agent cannot access the artifacts folder directly via python script due to permissions or pathing?
        # The user info says "Artifact Directory Path: ...".
        # Let's assume absolute path works.
        pass

    try:
        img = Image.open(input_path)
        img.save(output_path, format='ICO', sizes=[(256, 256)])
        print(f"Successfully converted {input_path} to {output_path}")
    except Exception as e:
        print(f"Error converting favicon: {e}")

if __name__ == "__main__":
    convert_favicon()
