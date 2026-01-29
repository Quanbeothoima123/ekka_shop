import os

# Cấu hình
FOLDER_TO_SCAN = 'src/components/Shop'  # Thư mục muốn quét
OUTPUT_FILE = 'code_full_manual.txt'
# Các đuôi file muốn lấy (để trống [] nếu muốn lấy tất cả)
EXTENSIONS = ['.js', '.html', '.css', '.py', '.json'] 

with open(OUTPUT_FILE, 'w', encoding='utf-8') as outfile:
    # os.walk tự động đi vào tất cả thư mục con
    for root, dirs, files in os.walk(FOLDER_TO_SCAN):
        for file in files:
            # Lọc đuôi file
            if EXTENSIONS and not any(file.endswith(ext) for ext in EXTENSIONS):
                continue
                
            file_path = os.path.join(root, file)
            
            # Ghi đường dẫn file
            outfile.write(f"\n{'='*20}\n")
            outfile.write(f"FILE: {file_path}\n")
            outfile.write(f"{'='*20}\n")
            
            # Ghi nội dung file
            try:
                with open(file_path, 'r', encoding='utf-8') as infile:
                    outfile.write(infile.read())
            except Exception as e:
                outfile.write(f"[Error reading file: {e}]")
            
            outfile.write("\n")

print(f"Đã ghi xong code vào file: {OUTPUT_FILE}")