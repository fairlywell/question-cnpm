const questions = [
  {
    text: "Lỗi phần mềm 'sai' được hiểu là:",
    options: [
      "Sản phẩm được xây dựng khác với đặc tả.",
      "Lập trình được xây dựng khác với thiết kế.",
      "Thiết kế được xây dựng khác với lập trình.",
      "Sản phẩm được xây dựng khác với chương trình."
    ],
    correct: 0
  },
  {
    text: "Nguyên nhân xuất hiện lỗi phần mềm đa số do:",
    options: [
      "Kiểm định.",
      "Đặc tả.",
      "Thiết kế.",
      "Lập trình."
    ],
    correct: 1
  },
  {
    text: "Quy trình làm phần mềm:",
    options: [
      "Đặc tả, thiết kế, lập trình, kiểm định, bảo trì.",
      "Đặc tả, thiết kế, tạo mã, lập trình, kiểm định.",
      "Giai đoạn thiết kế và lập trình.",
      "Giai đoạn lập trình."
    ],
    correct: 0
  },
  {
    text: "Có thể định nghĩa kỹ nghệ (Engineering) là:",
    options: [
      "Tập hợp các công nghệ được bố trí theo một quy trình nhất định.",
      "Dùng các công cụ để tạo ra các sản phẩm nhất định.",
      "Là một cách thức tiến hành một công việc để tạo ra một sản phẩm của một ngành nào đó.",
      "Là việc sử dụng phối hợp các công nghệ cần thiết để sản xuất ra các sản phẩm của một ngành nào đó."
    ],
    correct: 3
  },
  {
    text: "Một phần mềm được gọi là tốt nếu thoả mãn tối thiểu các thuộc tính:",
    options: [
      "Đáng tin cậy, có hiệu quả, giao diện người sử dụng thích hợp, có thể bảo trì được, dễ sửa lỗi.",
      "Phần mềm thoả mãn yêu cầu người dùng, có hiệu quả, giao diện người sử dụng thích hợp, có thể bảo trì được, giá cả chấp nhận được.",
      "Đáng tin cậy, có hiệu quả, tính bảo mật cao, có thể bảo trì được, dễ sửa lỗi.",
      "Đáng tin cậy, có hiệu quả, giao diện người sử dụng thích hợp, có thể bảo trì được, giá cả phải chấp nhận được."
    ],
    correct: 1
  },
  {
    text: "Trong quá trình phát triển phần mềm, giai đoạn bảo trì phần mềm có nghĩa là:",
    options: [
      "Thay đổi và phát triển hệ thống đã được xây dựng.",
      "Xây dựng không gian giải pháp cho vấn đề.",
      "Xây dựng một hệ thống thực hiện được dựa vào thiết kế.",
      "Thẩm định lại tính đúng đắn của giải pháp theo yêu cầu ban đầu đã đặt ra."
    ],
    correct: 0
  },
  {
    text: "'Xác định yêu cầu chức năng', nghĩa là:",
    options: [
      "Đặc tả trìu tượng các ràng buộc mà hệ thống phải tuân theo.",
      "Đặc tả các yêu cầu của người dùng.",
      "Đặc tả trìu tượng các dịch vụ mà hệ thống phải cung cấp.",
      "Đặc tả trìu tượng các nhu cầu của người dùng mà hệ thống phải cung cấp."
    ],
    correct: 2
  },
  {
    text: "'Xác định yêu cầu phi chức năng', nghĩa là:",
    options: [
      "Đặc tả các yêu cầu của người dùng.",
      "Đặc tả trìu tượng các nhu cầu của người dùng mà hệ thống phải cung cấp.",
      "Đặc tả trìu tượng các dịch vụ mà hệ thống phải cung cấp.",
      "Đặc tả trìu tượng các ràng buộc mà hệ thống phải tuân theo."
    ],
    correct: 3
  },
  {
    text: "Khái niệm vòng đời phần mềm:",
    options: [
      "Một vòng đời phần mềm là quá trình phát triển từ khi nhận dự án đến khi phần mềm bị loại bỏ.",
      "Một vòng đời phần mềm là quá trình phát triển theo chu kỳ từ giai đoạn đặc tả đến giai đoạn bảo trì phần mềm.",
      "Một vòng đời phần mềm là quá trình phát triển từ giai đoạn thiết kế đến bảo trì phần mềm.",
      "Một vòng đời phần mềm quá trình phát triển từ giai đoạn đặc tả đến kiểm định phần mềm."
    ],
    correct: 1
  },
  {
    text: "Thuộc tính có thể bảo trì được bao gồm các thành phần sau:",
    options: [
      "Dễ sửa lỗi, nâng cấp.",
      "Dễ sửa lỗi, nâng cấp và chuyển giao công nghệ.",
      "Có đầy đủ tài liệu và việc thay đổi có thể thực hiện mà không quá tốn kém.",
      "Dễ sửa lỗi, có đầy đủ tài liệu để nâng cấp phần mềm."
    ],
    correct: 2
  },
  {
    text: "Trong quá trình phát triển phần mềm, giai đoạn lập trình phần mềm có nghĩa là:",
    options: [
      "Nhận biết vấn đề, bài toán thực tế, các yêu cầu mà người dùng đặt ra.",
      "Xây dựng một hệ thống thực hiện được dựa vào thiết kế.",
      "Xây dựng không gian giải pháp cho vấn đề.",
      "Thẩm định lại tính đúng đắn của giải pháp theo yêu cầu ban đầu đã đặt ra."
    ],
    correct: 1
  },
  {
    text: "Trong quá trình phát triển phần mềm, giai đoạn nào quan trọng nhất?",
    options: [
      "Giai đoạn thiết kế và lập trình.",
      "Giai đoạn lập trình.",
      "Giai đoạn lập kiểm định và bảo hành.",
      "Giai đoạn đặc tả và thiết kế."
    ],
    correct: 3
  },
  {
    text: "Trong quá trình phát triển phần mềm, giai đoạn thiết kế phần mềm có nghĩa là:",
    options: [
      "Xây dựng không gian giải pháp cho vấn đề.",
      "Nhận biết vấn đề, bài toán thực tế, các yêu cầu mà người dùng đặt ra.",
      "Xây dựng một hệ thống thực hiện được dựa vào thiết kế.",
      "Thẩm định lại tính đúng đắn của giải pháp theo yêu cầu ban đầu đã đặt ra."
    ],
    correct: 0
  },
  {
    text: "Trong quá trình phát triển phần mềm, giai đoạn kiểm định phần mềm có nghĩa là:",
    options: [
      "Nhận biết vấn đề, bài toán thực tế, các yêu cầu mà người dùng đặt ra.",
      "Xây dựng không gian giải pháp cho vấn đề.",
      "Xây dựng một hệ thống thực hiện được dựa vào thiết kế.",
      "Thẩm định lại tính đúng đắn của giải pháp theo yêu cầu ban đầu đã đặt ra."
    ],
    correct: 3
  },
  {
    text: "Trong các mô hình sau, mô hình nào không phải là mô hình phát triển phần mềm:",
    options: [
      "Mô hình tuần tự tuyến tính.",
      "Mô hình bản mẫu.",
      "Mô hình song song.",
      "Mô hình tương tranh."
    ],
    correct: 3
  },
  {
    text: "Bên mời thầu yêu cầu bên dự thầu phải: 'xác định chi tiết lịch trình làm việc, kế hoạch nhân sự, quản lý nhân viên'. Là nội dung của:",
    options: [
      "Yêu cầu về phần mềm.",
      "Yêu cầu về công ty.",
      "Yêu cầu về kế hoạch nhân sự.",
      "Yêu cầu về quản lý."
    ],
    correct: 2
  },
  {
    text: "Trong các nội dung sau, nội dung nào chính là kiểm định đơn vị:",
    options: [
      "Là một kỹ thuật hệ thống để xây dựng cấu trúc chương trình trong khi tiến hành các kiểm định để phát hiện các lỗi liên kết.",
      "Kiểm định tập trung vào việc xác minh trên thành phần nhỏ nhất của thiết kế phần mềm như module hoặc lớp.",
      "Các module được tích hợp từ dưới lên theo từng đơn vị.",
      "Là kiểm định các thành phần nhỏ trong tất cả các hệ thống."
    ],
    correct: 1
  },
  {
    text: "Bảo trì phần mềm được định nghĩa thông qua mô tả 4 hoạt động:",
    options: [
      "Bảo trì vận hành, bảo trì hiệu chỉnh, bảo trì hoàn thiện, bảo trì phòng ngừa.",
      "Bảo trì hiệu chỉnh, bảo trì tiếp hợp, bảo trì hoàn thiện, bảo trì phòng ngừa.",
      "Bảo trì hệ thống, bảo trì hiệu chỉnh, bảo trì tiếp hợp, bảo trì hoàn thiện.",
      "Bảo trì hiệu chỉnh, bảo trì tiếp hợp, bảo trì thiết kế, bảo trì hoàn thiện."
    ],
    correct: 0
  },
  {
    text: "Trong quá trình phát triển phần mềm, giai đoạn nào có thể lặp lại nhiều lần?",
    options: [
      "Đặc tả, thiết kế.",
      "Đặc tả, thiết kế, kiểm định.",
      "Đặc tả, lập trình, bảo trì.",
      "Đặc tả, thiết kế, lập trình, kiểm định, bảo trì."
    ],
    correct: 1
  },
  {
    text: "Các mức đặc tả yêu cầu:",
    options: [
      "Định ra yêu cầu, đặc tả yêu cầu, đặc tả chức năng.",
      "Định ra yêu cầu, đặc tả yêu cầu, đặc tả thiết kế.",
      "Đặc tả chức năng, đặc tả phần mềm, đặc tả thiết kế.",
      "Định ra yêu cầu, đặc tả phần mềm, đặc tả thiết kế."
    ],
    correct: 1
  },
  {
    text: "Bên mời thầu yêu cầu bên dự thầu phải: 'chỉ rõ phần cứng, phần mềm và các dịch vụ cụ thể cần được cung cấp'.",
    options: [
      "Yêu cầu về kỹ thuật.",
      "Yêu cầu về sản phẩm.",
      "Yêu cầu về tài nguyên phải đáp ứng.",
      "Yêu cầu về phần mềm."
    ],
    correct: 0
  },
  {
    text: "Trong quá trình bảo trì phần mềm: 'thay đổi các chức năng đã có, các mở rộng tổng quát, các khả năng mới' được gọi là:",
    options: [
      "Bảo trì hiệu chỉnh.",
      "Bảo trì hoàn thiện.",
      "Bảo trì phòng ngừa.",
      "Bảo trì thích nghi."
    ],
    correct: 1
  },
  {
    text: "Thế nào là mô hình tuần tự tuyến tính?",
    options: [
      "Phân tích - thiết kế - kiểm định - vận hành.",
      "Phân tích - thiết kế - lập trình - kiểm định - vận hành.",
      "Phân tích - thiết kế - mã hóa - vận hành.",
      "Xác định yêu cầu - thiết kế - lập trình - kiểm định - vận hành."
    ],
    correct: 3
  },
  {
    text: "Trong các mô hình phát triển phần mềm sau, mô hình nào chính là mô hình thác nước?",
    options: [
      "Mô hình xoáy ốc.",
      "Mô hình bản mẫu.",
      "Mô hình RAD.",
      "Mô hình tuần tự tuyến tính."
    ],
    correct: 3
  },
  {
    text: "Khái niệm 'Đặc tả yêu cầu', nghĩa là:",
    options: [
      "Yêu cầu được viết bằng ngôn ngữ tự nhiên về các dịch cụ mà hệ thống phải cung cấp.",
      "Yêu cầu được viết bằng ngôn ngữ chuyên ngành để mô tả chi tiết phần mềm.",
      "Yêu cầu được đặc tả bởi các biểu đồ ngữ cảnh, đồ thị và lược đồ quan hệ,…",
      "Các dịch vụ được đặc tả một cách chi tiết, chính xác để có thể dùng làm cơ sở hợp đồng giữa hai bên."
    ],
    correct: 3
  },
  {
    text: "Trong kỹ thuật 'Phân tích giá trị biên' của phương pháp kiểm định hộp đen, nếu 'điều kiện vào xác định một miền giới hạn bởi các giá trị a và b', thì:",
    options: [
      "Xác định các trường hợp kiểm định được xác định ngay tại a và b.",
      "Xác định các trường hợp kiểm định được xác định ngay dưới a và b.",
      "Xác định các trường hợp kiểm định cho giá trị cực đại, cực tiểu và ngay trên (hoặc ngay dưới) giá trị cực đại, cực tiểu."
    ],
    correct: 2
  },
  {
    text: "Nội dung chính của phương pháp kiểm định hộp trắng:",
    options: [
      "Cho phép kiểm tra cấu trúc bên trong của phần mềm với mục đích đảm bảo rằng tất cả các câu lệnh và điều kiện sẽ được thực hiện ít nhất một lần.",
      "Tạo mô hình hệ thống để mô phỏng ứng xử của phần mềm đối với tác động của môi trường bên ngoài.",
      "Không quan tâm nhiều đến cấu trúc bên trong của phần mềm mà chỉ quan tâm đến các miền thông tin ra.",
      "Chỉ tập trung vào các yêu cầu chức năng của phần mềm bằng cách cho nhập giá trị đầu vào và xem xét kết quả ra có đúng như mong đợi hay không."
    ],
    correct: 0
  },
  {
    text: "Trong các nội dung sau, nội dung nào chính là kiểm định tích hợp:",
    options: [
      "Các module được tích hợp từ dưới lên trên theo từng đơn vị.",
      "Các module được tích hợp bằng cách đi dần xuống qua cấp bậc điều khiển với việc bắt đầu từ module chính đi dần xuống các module phụ thuộc.",
      "Là một kỹ thuật hệ thống để xây dựng cấu trúc chương trình trong khi tiến hành các kiểm định để phát hiện các lỗi liên kết.",
      "Kiểm định tập trung vào việc xác minh trên thành phần nhỏ nhất của thiết kế phần mềm như module hoặc lớp."
    ],
    correct: 1
  },
  {
    text: "Trong quá trình bảo trì phần mềm: 'quá trình phân tích và chỉnh sửa một hay nhiều lỗi' được gọi là:",
    options: [
      "Bảo trì thích nghi.",
      "Bảo trì hoàn thiện.",
      "Bảo trì phòng ngừa.",
      "Bảo trì hiệu chỉnh."
    ],
    correct: 3
  },
  {
    text: "Trong quá trình bảo trì phần mềm: 'sửa lỗi phần mềm để thích ứng với những thay đổi của môi trường' được gọi là:",
    options: [
      "Bảo trì hiệu chỉnh.",
      "Bảo trì hoàn thiện.",
      "Bảo trì phòng ngừa.",
      "Bảo trì thích nghi."
    ],
    correct: 3
  },
  {
    text: "Lỗi phần mềm 'sai' được hiểu là:",
    options: [
      "Sản phẩm được xây dựng khác với đặc tả.",
      "Lập trình được xây dựng khác với thiết kế.",
      "Thiết kế được xây dựng khác với lập trình.",
      "Sản phẩm được xây dựng khác với chương trình."
    ],
    correct: 0
  },
  {
    text: "Nguyên nhân xuất hiện lỗi phần mềm đa số do:",
    options: [
      "Kiểm định.",
      "Đặc tả.",
      "Thiết kế.",
      "Lập trình."
    ],
    correct: 3
  },
  {
    text: "Quy trình làm phần mềm:",
    options: [
      "Đặc tả, thiết kế, lập trình, kiểm định, bảo trì.",
      "Đặc tả, thiết kế, tạo mã, lập trình, kiểm định.",
      "Giai đoạn thiết kế và lập trình.",
      "Giai đoạn lập trình."
    ],
    correct: 0
  },
  {
    text: "Có thể định nghĩa kỹ nghệ (Engineering) là:",
    options: [
      "Tập hợp các công nghệ được bố trí theo một quy trình nhất định.",
      "Dùng các công cụ để tạo ra các sản phẩm nhất định.",
      "Là một cách thức tiến hành một công việc để tạo ra một sản phẩm của một ngành nào đó.",
      "Là việc sử dụng phối hợp các công nghệ cần thiết để sản xuất ra các sản phẩm của một ngành nào đó."
    ],
    correct: 3
  },
  {
    text: "Một phần mềm được gọi là tốt nếu thoả mãn tối thiểu các thuộc tính:",
    options: [
      "Đáng tin cậy, có hiệu quả, giao diện người sử dụng thích hợp, có thể bảo trì được, dễ sửa lỗi.",
      "Phần mềm thoả mãn yêu cầu người dùng, có hiệu quả, giao diện người sử dụng thích hợp, có thể bảo trì được, giá cả chấp nhận được.",
      "Đáng tin cậy, có hiệu quả, tính bảo mật cao, có thể bảo trì được, dễ sửa lỗi.",
      "Đáng tin cậy, có hiệu quả, giao diện người sử dụng thích hợp, có thể bảo trì được, giá cả phải chấp nhận được."
    ],
    correct: 3
  },
  {
    text: "Trong quá trình phát triển phần mềm, giai đoạn bảo trì phần mềm có nghĩa là:",
    options: [
      "Thay đổi và phát triển hệ thống đã được xây dựng.",
      "Xây dựng không gian giải pháp cho vấn đề.",
      "Xây dựng một hệ thống thực hiện được dựa vào thiết kế.",
      "Thẩm định lại tính đúng đắn của giải pháp theo yêu cầu ban đầu đã đặt ra."
    ],
    correct: 0
  },
  {
    text: "'Xác định yêu cầu chức năng', nghĩa là:",
    options: [
      "Đặc tả trìu tượng các ràng buộc mà hệ thống phải tuân theo.",
      "Đặc tả các yêu cầu của người dùng.",
      "Đặc tả trìu tượng các dịch vụ mà hệ thống phải cung cấp.",
      "Đặc tả trìu tượng các nhu cầu của người dùng mà hệ thống phải cung cấp."
    ],
    correct: 2
  },
  {
    text: "'Xác định yêu cầu phi chức năng', nghĩa là:",
    options: [
      "Đặc tả các yêu cầu của người dùng.",
      "Đặc tả trìu tượng các nhu cầu của người dùng mà hệ thống phải cung cấp.",
      "Đặc tả trìu tượng các dịch vụ mà hệ thống phải cung cấp.",
      "Đặc tả trìu tượng các ràng buộc mà hệ thống phải tuân theo."
    ],
    correct: 3
  },
  {
    text: "Khái niệm vòng đời phần mềm:",
    options: [
      "Một vòng đời phần mềm là quá trình phát triển từ khi nhận dự án đến khi phần mềm bị loại bỏ.",
      "Một vòng đời phần mềm là quá trình phát triển theo chu kỳ từ giai đoạn đặc tả đến giai đoạn bảo trì phần mềm.",
      "Một vòng đời phần mềm là quá trình phát triển từ giai đoạn thiết kế đến bảo trì phần mềm.",
      "Một vòng đời phần mềm quá trình phát triển từ giai đoạn đặc tả đến kiểm định phần mềm."
    ],
    correct: 1
  },
  {
    text: "Thuộc tính có thể bảo trì được bao gồm các thành phần sau:",
    options: [
      "Dễ sửa lỗi, nâng cấp.",
      "Dễ sửa lỗi, nâng cấp và chuyển giao công nghệ.",
      "Có đầy đủ tài liệu và việc thay đổi có thể thực hiện mà không quá tốn kém.",
      "Dễ sửa lỗi, có đầy đủ tài liệu để nâng cấp phần mềm."
    ],
    correct: 2
  },
  {
    text: "Trong quá trình phát triển phần mềm, giai đoạn lập trình phần mềm có nghĩa là:",
    options: [
      "Nhận biết vấn đề, bài toán thực tế, các yêu cầu mà người dùng đặt ra.",
      "Xây dựng một hệ thống thực hiện được dựa vào thiết kế.",
      "Xây dựng không gian giải pháp cho vấn đề.",
      "Thẩm định lại tính đúng đắn của giải pháp theo yêu cầu ban đầu đã đặt ra."
    ],
    correct: 1
  },
  {
    text: "Trong quá trình phát triển phần mềm, giai đoạn nào quan trọng nhất?",
    options: [
      "Giai đoạn thiết kế và lập trình.",
      "Giai đoạn lập trình.",
      "Giai đoạn lập kiểm định và bảo hành.",
      "Giai đoạn đặc tả và thiết kế."
    ],
    correct: 3
  },
  {
    text: "Trong quá trình phát triển phần mềm, giai đoạn thiết kế phần mềm có nghĩa là:",
    options: [
      "Xây dựng không gian giải pháp cho vấn đề.",
      "Nhận biết vấn đề, bài toán thực tế, các yêu cầu mà người dùng đặt ra.",
      "Xây dựng một hệ thống thực hiện được dựa vào thiết kế.",
      "Thẩm định lại tính đúng đắn của giải pháp theo yêu cầu ban đầu đã đặt ra."
    ],
    correct: 0
  },
  {
    text: "Trong quá trình phát triển phần mềm, giai đoạn kiểm định phần mềm có nghĩa là:",
    options: [
      "Nhận biết vấn đề, bài toán thực tế, các yêu cầu mà người dùng đặt ra.",
      "Xây dựng không gian giải pháp cho vấn đề.",
      "Xây dựng một hệ thống thực hiện được dựa vào thiết kế.",
      "Thẩm định lại tính đúng đắn của giải pháp theo yêu cầu ban đầu đã đặt ra."
    ],
    correct: 3
  },
  {
    text: "Trong các mô hình sau, mô hình nào không phải là mô hình phát triển phần mềm:",
    options: [
      "Mô hình tuần tự tuyến tính.",
      "Mô hình bản mẫu.",
      "Mô hình song song.",
      "Mô hình tương tranh."
    ],
    correct: 3
  },
  {
    text: "Bên mời thầu yêu cầu bên dự thầu phải: 'xác định chi tiết lịch trình làm việc, kế hoạch nhân sự, quản lý nhân viên'. Là nội dung của:",
    options: [
      "Yêu cầu về phần mềm.",
      "Yêu cầu về công ty.",
      "Yêu cầu về kế hoạch nhân sự.",
      "Yêu cầu về quản lý."
    ],
    correct: 2
  },
  {
    text: "Các mức đặc tả yêu cầu:",
    options: [
      "Định ra yêu cầu, đặc tả yêu cầu, đặc tả chức năng.",
      "Định ra yêu cầu, đặc tả yêu cầu, đặc tả thiết kế.",
      "Đặc tả chức năng, đặc tả phần mềm, đặc tả thiết kế.",
      "Định ra yêu cầu, đặc tả phần mềm, đặc tả thiết kế."
    ],
    correct: 1
  },
  {
    text: "Bên mời thầu yêu cầu bên dự thầu phải: 'chỉ rõ phần cứng, phần mềm và các dịch vụ cụ thể cần được cung cấp'.",
    options: [
      "Yêu cầu về kỹ thuật.",
      "Yêu cầu về sản phẩm.",
      "Yêu cầu về tài nguyên phải đáp ứng.",
      "Yêu cầu về phần mềm."
    ],
    correct: 0
  },
  {
    text: "Trong quá trình phát triển phần mềm, giai đoạn nào có thể lặp lại nhiều lần?",
    options: [
      "Đặc tả, thiết kế.",
      "Đặc tả, thiết kế, kiểm định.",
      "Đặc tả, lập trình, bảo trì.",
      "Đặc tả, thiết kế, lập trình, kiểm định, bảo trì."
    ],
    correct: 3
  },
  {
    text: "Khái niệm 'Đặc tả yêu cầu', nghĩa là:",
    options: [
      "Yêu cầu được viết bằng ngôn ngữ tự nhiên về các dịch cụ mà hệ thống phải cung cấp.",
      "Yêu cầu được viết bằng ngôn ngữ chuyên ngành để mô tả chi tiết phần mềm.",
      "Yêu cầu được đặc tả bởi các biểu đồ ngữ cảnh, đồ thị và lược đồ quan hệ,… ",
      "Các dịch vụ được đặc tả một cách chi tiết, chính xác để có thể dùng làm cơ sở hợp đồng giữa hai bên."
    ],
    correct: 3
  },
  {
    text: "Trong kỹ thuật 'Phân tích giá trị biên' của phương pháp kiểm định hộp đen, nếu 'điều kiện vào xác định một miền giới hạn bởi các giá trị a và b', thì:",
    options: [
      "Xác định các trường hợp kiểm định được xác định ngay tại a và b.",
      "Xác định các trường hợp kiểm định được xác định ngay dưới a và b.",
      "Xác định các trường hợp kiểm định cho giá trị cực đại, cực tiểu và ngay trên (hoặc ngay dưới) giá trị cực đại, cực tiểu."
    ],
    correct: 2
  },
  {
    text: "Nội dung chính của phương pháp kiểm định hộp trắng:",
    options: [
      "Cho phép kiểm tra cấu trúc bên trong của phần mềm với mục đích đảm bảo rằng tất cả các câu lệnh và điều kiện sẽ được thực hiện ít nhất một lần.",
      "Tạo mô hình hệ thống để mô phỏng ứng xử của phần mềm đối với tác động của môi trường bên ngoài.",
      "Không quan tâm nhiều đến cấu trúc bên trong của phần mềm mà chỉ quan tâm đến các miền thông tin ra.",
      "Chỉ tập trung vào các yêu cầu chức năng của phần mềm bằng cách cho nhập giá trị đầu vào và xem xét kết quả ra có muốn như mong đợi hay không."
    ],
    correct: 0
  },
  {
    text: "Trong các nội dung sau, nội dung nào chính là kiểm định đơn vị:",
    options: [
      "Là một kỹ thuật hệ thống để xây dựng cấu trúc chương trình trong khi tiến hành các kiểm định để phát hiện các lỗi liên kết.",
      "Kiểm định tập trung vào việc xác minh trên thành phần nhỏ nhất của thiết kế phần mềm như module hoặc lớp.",
      "Các module được tích hợp từ dưới lên theo từng đơn vị.",
      "Là kiểm định các thành phần nhỏ trong tất cả các hệ thống."
    ],
    correct: 1
  },
  {
    text: "Trong các nội dung sau, nội dung nào chính là kiểm định tích hợp:",
    options: [
      "Các module được tích hợp từ dưới lên trên theo từng đơn vị.",
      "Các module được tích hợp bằng cách đi dần xuống qua cấp bậc điều khiển với việc bắt đầu từ module chính đi dần xuống các module phụ thuộc.",
      "Là một kỹ thuật hệ thống để xây dựng cấu trúc chương trình trong khi tiến hành các kiểm định để phát hiện các lỗi liên kết.",
      "Kiểm định tập trung vào việc xác minh trên thành phần nhỏ nhất của thiết kế phần mềm như module hoặc lớp."
    ],
    correct: 1
  },
  {
    text: "Bảo trì phần mềm được định nghĩa thông qua mô tả 4 hoạt động:",
    options: [
      "Bảo trì hệ thống, bảo trì hiệu chỉnh, bảo trì tiếp hợp, bảo trì hoàn thiện.",
      "Bảo trì hiệu chỉnh, bảo trì tiếp hợp, bảo trì thiết kế, bảo trì hoàn thiện.",
      "Bảo trì vận hành, bảo trì hiệu chỉnh, bảo trì hoàn thiện, bảo trì phòng ngừa.",
      "Bảo trì hiệu chỉnh, bảo trì tiếp hợp, bảo trì hoàn thiện, bảo trì phòng ngừa."
    ],
    correct: 3
  },
  {
    text: "Trong quá trình bảo trì phần mềm: 'quá trình phân tích và chỉnh sửa một hay nhiều lỗi' được gọi là:",
    options: [
      "Bảo trì thích nghi.",
      "Bảo trì hoàn thiện.",
      "Bảo trì phòng ngừa.",
      "Bảo trì hiệu chỉnh."
    ],
    correct: 3
  },
  {
    text: "Trong quá trình bảo trì phần mềm: 'sửa lỗi phần mềm để thích ứng với những thay đổi của môi trường' được gọi là:",
    options: [
      "Bảo trì hiệu chỉnh.",
      "Bảo trì hoàn thiện.",
      "Bảo trì phòng ngừa.",
      "Bảo trì thích nghi."
    ],
    correct: 3
  },
  {
    text: "Trong quá trình bảo trì phần mềm: 'thay đổi các chức năng đã có, các mở rộng tổng quát, các khả năng mới' được gọi là:",
    options: [
      "Bảo trì hiệu chỉnh.",
      "Bảo trì hoàn thiện.",
      "Bảo trì phòng ngừa.",
      "Bảo trì thích nghi."
    ],
    correct: 1
  },
  {
    text: "Thế nào là mô hình tuần tự tuyến tính?",
    options: [
      "Phân tích - thiết kế - kiểm định - vận hành.",
      "Phân tích - thiết kế - lập trình - kiểm định - vận hành.",
      "Phân tích - thiết kế - mã hóa - vận hành.",
      "Xác định yêu cầu - thiết kế - lập trình - kiểm định - vận hành."
    ],
    correct: 3
  },
  {
    text: "Trong các mô hình phát triển phần mềm sau, mô hình nào chính là mô hình thác nước:",
    options: [
      "Mô hình xoáy ốc.",
      "Mô hình bản mẫu.",
      "Mô hình RAD.",
      "Mô hình tuần tự tuyến tính."
    ],
    correct: 3
  }
];

const quizContainer = document.getElementById("quiz");

questions.forEach((q, index) => {
  const questionDiv = document.createElement("div");
  questionDiv.classList.add("question");

  const questionText = document.createElement("p");
  questionText.textContent = `Câu ${index + 1}: ${q.text}`;
  questionDiv.appendChild(questionText);

  q.options.forEach((option, i) => {
      const label = document.createElement("label");
      label.style.display = "block";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.value = i;

      checkbox.addEventListener("change", function () {
          const resultDiv = this.parentNode.querySelector(".result");
          if (this.checked) {
              if (parseInt(this.value) === q.correct) {
                  resultDiv.textContent = "Đúng!";
                  resultDiv.className = "result correct";
              } else {
                  resultDiv.textContent = "Sai!";
                  resultDiv.className = "result incorrect";
              }
          } else {
              resultDiv.textContent = "";
          }
      });

      const resultDiv = document.createElement("span");
      resultDiv.className = "result";

      label.appendChild(checkbox);
      label.appendChild(document.createTextNode(option));
      label.appendChild(resultDiv);
      questionDiv.appendChild(label);
  });

  quizContainer.appendChild(questionDiv);
});