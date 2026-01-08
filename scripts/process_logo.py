from PIL import Image
import os

def process_logo():
    input_path = 'public/images/logo.png'
    trimmed_output_path = 'public/images/logo-trimmed.png'
    favicon_output_path = 'src/app/favicon.ico'

    if not os.path.exists(input_path):
        print(f"Error: {input_path} not found.")
        return

    try:
        img = Image.open(input_path)
        img = img.convert("RGBA")
        
        # 0. Clean Noise: Set low alpha pixels to 0
        datas = img.getdata()
        new_data = []
        for item in datas:
            if item[3] < 20: # Threshold for "transparency"
                new_data.append((0, 0, 0, 0))
            else:
                new_data.append(item)
        img.putdata(new_data)
        
        # 1. Trim Whitespace
        bbox = img.getbbox()
        if bbox:
            trimmed_img = img.crop(bbox)
            trimmed_img.save(trimmed_output_path)
            print(f"Saved trimmed logo to {trimmed_output_path}")
        else:
            print("Error: Image is completely transparent.")
            return

        # 2. Extract Icon (Car Part) & Create Favicon
        # Logic: Scan for vertical gap to separate Icon (left) from Text (right)
        # Assuming the icon is on the left.
        
        width, height = trimmed_img.size
        pixels = trimmed_img.load()
        
        split_x = -1
        
        # Scan from left to right to find the end of the icon
        # We look for a column of transparent pixels after finding some non-transparent ones
        
        found_content = False
        gap_start = -1
        
        gap_start = -1
        min_icon_width = 30 # Minimum pixels for the icon width to be considered valid
        content_start_x = 0
        
        # Find where content actually starts (should be 0 since we trimmed, but good to be safe)
        for x in range(width):
            is_col_trans = True
            for y in range(height):
                if pixels[x,y][3] > 0:
                    is_col_trans = False
                    break
            if not is_col_trans:
                content_start_x = x
                break

        for x in range(content_start_x, width):
            is_column_transparent = True
            for y in range(height):
                if pixels[x, y][3] > 0: # Check alpha channel
                    is_column_transparent = False
                    break
            
            # If we hit a transparent column AND we have enough content before it
            if is_column_transparent:
                if (x - content_start_x) > min_icon_width:
                    split_x = x
                    break
                # Else: we found a gap but it's too early (maybe a gap inside the icon), ignore or handle?
                # Actually, a gap INSIDE an icon is possible. 
                # But typically "Icon [GAP] Text" has a larger gap or distinct separation.
                # If we assume the icon is the *first* distinct shapes, simple gap detection works if the gap is real.
                # If the icon has transparent vertical lines inside it, this simple logic fails.
                # Heuristic: The gap usually persists for more than 1 pixel?
                # Let's just enforce min_icon_width for now.
        
        if split_x > 0:
            print(f"Found separation at x={split_x}")
            icon_img = trimmed_img.crop((0, 0, split_x, height))
            
            # Trim the icon again just to be safe
            icon_bbox = icon_img.getbbox()
            if icon_bbox:
                icon_img = icon_img.crop(icon_bbox)
                
            # Resize to square for favicon (centering)
            # Standard favicon size
            size = (256, 256)
            new_img = Image.new("RGBA", size, (0, 0, 0, 0))
            
            # Calculate position to center
            # Maintain aspect ratio
            icon_width, icon_height = icon_img.size
            aspect = icon_width / icon_height
            
            if aspect > 1:
                # Width is bigger
                new_w = size[0]
                new_h = int(new_w / aspect)
            else:
                # Height is bigger
                new_h = size[1]
                new_w = int(new_h * aspect)
                
            icon_img = icon_img.resize((new_w, new_h), Image.Resampling.LANCZOS)
            
            paste_x = (size[0] - new_w) // 2
            paste_y = (size[1] - new_h) // 2
            
            new_img.paste(icon_img, (paste_x, paste_y))
            
            # Save as ICO
            new_img.save(favicon_output_path, format='ICO')
            print(f"Saved favicon to {favicon_output_path}")
            
        else:
            print("Could not detect separation between icon and text. Using entire trimmed logo for favicon.")
            # Fallback: Just resize the whole thing
            # ... (similar resizing logic or just save trimmed as ico if square enough)
             # But user specifically asked to crop car part. 
            # If we fail to find gap, we might just look at the left half? 
            # Let's try to be robust: If no gap found, maybe it's just the icon?
            # Or maybe the spacing is tight. 
            
            # For now, if split fails, let's assume the icon is roughly the left 30%? No that's risky.
            # Let's try to just use the trimmed image if specific split fails,
            # but usually logo + text has a gap.
            
            # Re-using the resizing logic for the whole image as fallback
            size = (256, 256)
            new_img = Image.new("RGBA", size, (0, 0, 0, 0))
            icon_width, icon_height = trimmed_img.size
            aspect = icon_width / icon_height
            if aspect > 1:
                new_w = size[0]
                new_h = int(new_w / aspect)
            else:
                new_h = size[1]
                new_w = int(new_h * aspect)
            
            icon_img_resized = trimmed_img.resize((new_w, new_h), Image.Resampling.LANCZOS)
            paste_x = (size[0] - new_w) // 2
            paste_y = (size[1] - new_h) // 2
            new_img.paste(icon_img_resized, (paste_x, paste_y))
            new_img.save(favicon_output_path, format='ICO')
            print(f"Saved fallback favicon to {favicon_output_path}")

    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    process_logo()
