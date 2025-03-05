# Project Proposal - Quản Lý Gara Ô TÔ

## 1. Introduction
Trong ngành dịch vụ ô tô, việc quản lý tiếp nhận xe, sửa chữa, kho vật tư và tài chính là một thách thức lớn. Các gara truyền thống thường sử dụng phương pháp ghi chép thủ công, dễ xảy ra sai sót và mất kiểm soát. Do đó, hệ thống Quản Lý Gara Ô Tô ra đời nhằm tự động hóa quy trình, giảm thiểu sai sót và nâng cao hiệu quả kinh doanh.

## 2. Problem Statement
- Quản lý xe, khách hàng, và vật tư phụ tùng còn thủ công, gây mất thời gian và dễ sai sót.
- Quy trình tiếp nhận xe và sửa chữa chưa được số hóa, khó theo dõi trạng thái đơn hàng.
- Việc lập hóa đơn và quản lý thu chi chưa đồng bộ, gây khó khăn trong báo cáo tài chính.
- Chưa có hệ thống phân quyền rõ ràng để quản lý nhân sự và bảo mật thông tin.

## 3. Objectives
- Xây dựng hệ thống quản lý danh sách xe và khách hàng.
- Tự động hóa quy trình tiếp nhận xe, tạo phiếu sửa chữa và theo dõi trạng thái.
- Quản lý vật tư phụ tùng và cập nhật tồn kho chính xác.
- Lập hóa đơn thanh toán và theo dõi thu chi.
- Phát triển giao diện thân thiện, dễ sử dụng cho nhân viên gara.

## 4. Methodology
### Dữ liệu:
- Sử dụng danh mục xe, khách hàng, vật tư phụ tùng thực tế từ các gara hoặc dữ liệu mô phỏng.

### Phương pháp phát triển:
- Xây dựng hệ thống web với mô hình Client-Server.
- Thiết kế cơ sở dữ liệu SQL để lưu trữ thông tin xe, khách hàng và kho vật tư.
- Phát triển chức năng phân quyền để bảo mật dữ liệu.
- Tích hợp báo cáo doanh thu và phân tích tài chính.

### Công cụ:
- **Backend**: Node.js, Express.js
- **Frontend**: React.js
- **Database**: MySQL/PostgreSQL
- **Quản lý mã nguồn**: GitHub

## 5. Expected Outcomes
- Một hệ thống quản lý gara có thể sử dụng thực tế.
- Báo cáo tài chính, kho vật tư và sửa chữa chi tiết.
- Giao diện trực quan, dễ sử dụng cho nhân viên.
- Giảm thiểu sai sót và nâng cao hiệu suất làm việc của gara.

## 6. Planning
| Giai đoạn | Nội dung | Thời gian |
|-----------|-------------------------------------|------------|
| 1 | Phân tích yêu cầu và thiết kế hệ thống | Tuần 1 - 2 |
| 2 | Xây dựng cơ sở dữ liệu và backend | Tuần 3 - 5 |
| 3 | Phát triển frontend và giao diện người dùng | Tuần 6 - 7 |
| 4 | Tích hợp và kiểm thử hệ thống | Tuần 8 |
| 5 | Hoàn thiện, triển khai và viết tài liệu | Tuần 9 - 10 |

## 7. Resources & Budget
- **Nhân lực**: 4 thành viên (Backend, Frontend, Database, Quản lý dự án).
- **Công cụ**: Máy chủ cloud/AWS (nếu cần), thiết bị kiểm thử.
- **Ngân sách**: Chi phí máy chủ, domain (nếu triển khai thực tế).

## 8. Conclusion
Hệ thống Quản Lý Gara Ô Tô sẽ giúp gara cải thiện hiệu suất hoạt động, giảm sai sót và nâng cao trải nghiệm khách hàng. Việc áp dụng công nghệ vào quản lý giúp tiết kiệm thời gian, đồng thời hỗ trợ phân tích tài chính chính xác hơn.