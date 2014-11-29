ckeditor-jwplayer6-html5
========================

Plugin mặc định trong NukeViet chỉ hỗ trợ trên máy tính có cài flash và sử dụng jwplayer5, plugin này ra đời để mang đến cho người dùng jwplayer6 và hỗ trợ các trình duyệt cho di động.

## Hướng dẫn dành cho NukeViet 4.0

Download các file đính kèm về giải nén ghi đè lên các file hệ thống, có thể dùng chức năng cài đặt và đóng gói tự động trong admin để cài đặt tự động (bỏ qua các cảnh báo) mở file /theme/theme-dang-dung/layout/header_only.tpl thêm phía trước
```html
</head>
```
hai dòng
```html
<script type="text/javascript" src="{NV_BASE_SITEURL}images/jwplayer/jwplayer.js"></script>
<script type="text/javascript" src="{NV_BASE_SITEURL}images/jwplayer/jwplayer.trigger.js"></script>
```

Mở file /editors/ckeditor/config.js sửa dòng

```js
config.extraPlugins = 'video';
```

Thành

```js
config.extraPlugins = 'video,jwplayer';
```

> Chú ý phải thêm trên tất cả các giao diện hiện được sử dụng trên hệ thống (desktop và mobile) không cần thêm cho giao diện admin. Sau khi thêm cần xóa cache của trình duyệt để có hiệu lực.

## Hướng dẫn dành cho NukeViet 3.x

Download các file đính kèm về giải nén ghi đè lên các file hệ thống, có thể dùng chức năng cài đặt và đóng gói tự động trong admin để cài đặt tự động (bỏ qua các cảnh báo) mở file /theme/theme-dang-dung/layout/header.tpl thêm phía trước
```html
</head>
```
hai dòng
```html
<script type="text/javascript" src="{NV_BASE_SITEURL}images/jwplayer6/jwplayer.js"></script>
<script type="text/javascript" src="{NV_BASE_SITEURL}images/jwplayer6/jwplayer.trigger.js"></script>
```
> Chú ý phải thêm trên tất cả các giao diện hiện được sử dụng trên hệ thống (desktop và mobile) không cần thêm cho giao diện admin.

## Các thay đổi:
### 3.4.01
* Vài chức năng cơ bản.
