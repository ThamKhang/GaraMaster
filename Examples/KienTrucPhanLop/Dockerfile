# Sử dụng image Node.js chính thức (phiên bản 16 hoặc mới hơn)
FROM node:16

# Tạo thư mục làm việc trong container
WORKDIR /app

# Sao chép package.json và package-lock.json (nếu có)
COPY package*.json ./

# Cài đặt dependencies
RUN npm install

# Sao chép toàn bộ mã nguồn vào container
COPY . .

# Mở cổng 3000 (cổng mặc định của ứng dụng)
EXPOSE 3000

# Lệnh khởi động ứng dụng
CMD ["npm", "start"]