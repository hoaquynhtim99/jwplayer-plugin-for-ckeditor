Plugin Jwplayer cho trình soạn thảo Ckeditor NukeViet
========================

Bản NukeViet hỗ trợ: NukeViet 4

## Hướng dẫn cài đặt

- Download các file đính kèm về giải nén ghi đè lên các file hệ thống (Chỉ upload thư mục includes và assets).
- Đăng nhập quản trị site, vào khu vực Cấu hình => Thiết lập Plugin để thêm plugin ckeditor_jwplayer.php trước khi gọi các module.
- Mở file `assets/editors/ckeditor/config.js` thêm giá trị `jwplayer` vào mục `config.extraPlugins`. Ví dụ:

Thay:

```js
config.extraPlugins = 'video,eqneditor,switchbar,tbvdownload,googledocs';
```

Thành

```js
config.extraPlugins = 'video,jwplayer,eqneditor,switchbar,tbvdownload,googledocs';
```

- Dọn dẹp hệ thống.

## Các thay đổi:

### 4.3.00
* Nâng cấp tương thích NukeViet 4.3

### 4.1.01
* Nâng cấp tương thích NukeViet >= 4.0.23
* Cập nhật jwplayer 7.9.3

### 4.0.01
* Chạy trên NukeViet 4.x.

### 3.4.01
* Vài chức năng cơ bản.
