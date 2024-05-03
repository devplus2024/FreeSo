# login.py

def login(username, password):
    # Xử lý đăng nhập ở đây
    print("User logged in successfully.")

def signup(username, password):
    # Xử lý đăng ký ở đây
    # Sau khi đăng ký thành công, gọi hàm để tạo tệp profile
    create_profile_file(username)
    print("User signed up successfully.")

def create_profile_file(username):
    # Tạo tệp profile ở đây
    filename = f"{username}_profile.php"
    with open(filename, 'w') as f:
        f.write(f"<?php echo 'Profile page for {username}'; ?>")
    print(f"Profile file '{filename}' created successfully.")

if __name__ == "__main__":
    # Thay thế dòng sau bằng dữ liệu đăng nhập hoặc đăng ký từ form HTML
    username = "example_user"
    password = "example_password"
    
    # Xử lý đăng nhập hoặc đăng ký
    if username and password:
        login(username, password)
    else:
        signup(username, password)
