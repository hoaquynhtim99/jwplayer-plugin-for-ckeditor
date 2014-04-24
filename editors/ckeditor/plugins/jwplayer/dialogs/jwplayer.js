CKEDITOR.dialog.add('jwplayer', function (editor){
	var path_player = nv_siteroot + 'images/';
	var JWplayer = path_player + 'jwplayer5/player.swf';

	function UpdatePreview(){
		var fileUrl = CKEDITOR.dialog.getCurrent().getContentElement('tab1', 'video_url').getValue();
		var imageUrl = CKEDITOR.dialog.getCurrent().getContentElement('tab1', 'preview_url').getValue();
		var width = CKEDITOR.dialog.getCurrent().getContentElement('tab1', 'width').getValue();
		var height = CKEDITOR.dialog.getCurrent().getContentElement('tab1', 'height').getValue();
		var auto = CKEDITOR.dialog.getCurrent().getContentElement('tab1', 'auto').getValue();
		if(width == 0 && height == 0){
			width = 240;
			height = 200
		}
		var playerflashvars = "file=" + fileUrl + "&autostart=" + auto;
		if(imageUrl != ''){
			playerflashvars += "&image=" + imageUrl
		}
		var skin = '';
		var selectskin = CKEDITOR.dialog.getCurrent().getContentElement('tab1', 'skin').getValue();
		if(selectskin != 'default'){
			skin = "&skin=" + path_player + "jwplayer/skin/" + selectskin + ".zip "
		}
		var JWEmbem = "<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000'" + " width='" + width + "' height='" + height + "'>" + " <param name='movie' value='" + JWplayer + "'>" + " <param name='allowfullscreen' value='true'>" + " <param name='allowscriptaccess' value='always'>" + " <param name='flashvars' value='" + playerflashvars + "'>";
		if(selectskin != 'default'){
			JWEmbem += "<param name='flashvars' value='" + skin + "'>"
		}
		JWEmbem += " <embed id='player1' name='player1'";
		JWEmbem += " width='" + width + "' height='" + height + "'" + " src='" + JWplayer + "' allowscriptaccess='always'" + " allowfullscreen='true' flashvars='" + playerflashvars + "'/>" + "</object>";
		
		document.getElementById("_video_preview").innerHTML = JWEmbem;
	}

	function ReturnPlayer(){
		var fileUrl = CKEDITOR.dialog.getCurrent().getContentElement('tab1', 'video_url').getValue();
		var imageUrl = CKEDITOR.dialog.getCurrent().getContentElement('tab1', 'preview_url').getValue();
		var width = CKEDITOR.dialog.getCurrent().getContentElement('tab1', 'width').getValue();
		var height = CKEDITOR.dialog.getCurrent().getContentElement('tab1', 'height').getValue();
		var auto = CKEDITOR.dialog.getCurrent().getContentElement('tab1', 'auto').getValue();
		
		if(width == 0 && height == 0){
			width = 490;
			height = 300
		}
		
		var JWEmbem = '<div style="text-align:center;margin:0 auto;width:' + width + 'px;height:' + height + 'px;background:#dadada;"';
		
		JWEmbem += ' data-width="' + width + '"';
		JWEmbem += ' data-height="' + height + '"';
		JWEmbem += ' data-auto="' + auto + '"';
		
		if(imageUrl != ''){
			JWEmbem += ' data-image="' + imageUrl + '"';
		}
		
		JWEmbem += ' data-url="' + fileUrl + '"';
		JWEmbem += ' class="jwplayer-html5-item"';
		JWEmbem += '><div>VIDEO GOES HERE!</div></div><br />';
		
		return JWEmbem;
	}

	return {
		title: 'JWplayer 6 For NukeViet',
		minWidth: 450,
		minHeight: 230,
		contents: [{
			id: 'tab1',
			label: '',
			title: '',
			expand: true,
			padding: 0,
			elements: [{
				type: 'vbox',
				widths: ['280px', '30px'],
				align: 'left',
				children: [{
					type: 'hbox',
					widths: ['280px', '30px'],
					align: 'left',
					children: [{
						type: 'text',
						required: true,
						validate: CKEDITOR.dialog.validate.notEmpty(editor.lang.flash.validateSrc),
						id: 'video_url',
						label: 'Youtube URL Or Stream Link URL',
						onChange: UpdatePreview,
					}, {
						type: 'button',
						id: 'browse',
						filebrowser: 'tab1:video_url',
						label: editor.lang.common.browseServer,
						style: 'display:inline-block;margin-top:8px;',
					}]
				}, {
					type: 'hbox',
					widths: ['280px', '30px'],
					align: 'left',
					children: [{
						type: 'text',
						id: 'preview_url',
						label: 'Preview Image',
						onChange: UpdatePreview,
					}, {
						type: 'button',
						id: 'browse',
						filebrowser: 'tab1:preview_url',
						label: editor.lang.common.browseServer,
						style: 'display:inline-block;margin-top:8px;',
					}]
				}, {
					type: 'hbox',
					widths: ['280px', '10px'],
					align: 'left',
					children: [{
						type: 'vbox',
						widths: ['280px', '10px'],
						align: 'left',
						children: [{
							type: 'select',
							id: 'skin',
							'default': 'default',
							label: 'Skin JW Player',
							items: [
								['default', 'default'],
							],
							onChange: UpdatePreview,
						}, {
							type: 'text',
							id: 'width',
							style: 'width:95px',
							label: editor.lang.common.width,
							validate: CKEDITOR.dialog.validate.integer(editor.lang.common.invalidWidth),
							onChange: UpdatePreview,
						}, {
							type: 'text',
							id: 'height',
							style: 'width:95px',
							label: editor.lang.common.height,
							validate: CKEDITOR.dialog.validate.integer(editor.lang.common.invalidHeight),
							onChange: UpdatePreview,
						}, {
							type: 'checkbox',
							id: 'auto',
							'default': false,
							label: editor.lang.flash.chkPlay,
							onChange: UpdatePreview,
						}]
					}, {
						type: 'vbox',
						widths: ['280px', '10px'],
						align: 'left',
						children: [{
							type: 'html',
							id: 'preview',
							html: '<div id="_video_preview" ><object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" height="200px" width="200px"> <param name="movie" value="' + JWplayer + '" /> <param name="allowfullscreen" value="true" /> <param name="allowscriptaccess" value="always" /> <param name="flashvars" value="autostart=false" /> <embed allowfullscreen="true" allowscriptaccess="always" flashvars="autostart=false" height="200px" src="' + JWplayer + '" width="200px"></embed></object></div><br>Author:phantandung92@gmail.com'
						}]
					}]
				}]
			}]
		}],
		buttons: [CKEDITOR.dialog.okButton, CKEDITOR.dialog.cancelButton],
		onOk: function (){
			editor.setData(editor.getData() + ReturnPlayer())
		}
	}
});