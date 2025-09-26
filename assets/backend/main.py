import os
import json

def scan_directory(path):
    tree = {"name": os.path.basename(path), "type": "directory", "children": []}

    try:
        for entry in os.listdir(path):
            full_path = os.path.join(path, entry)
            if os.path.isdir(full_path):
                tree["children"].append(scan_directory(full_path))
            else:
                tree["children"].append({
                    "name": entry,
                    "type": "file"
                })
    except PermissionError:
        tree["children"].append({"name": "Permission denied", "type": "error"})
    
    return tree


if __name__ == "__main__":
    root_path = r"D:\html work\oopGallery\assets\img" 
    result = scan_directory(root_path)

    with open("tree.json", "w", encoding="utf-8") as f:
        json.dump(result, f, indent=4, ensure_ascii=False)

    print("Дерево сохранено в tree.json")
