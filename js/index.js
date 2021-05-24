function modalDom () {
	return `<div class="chat_modal_wrap" style="width:100%; height: 550px;">
	<div class="fl chat_left">
	<div class="chat_left_friend">
		<div class="frends select_friends">
			<span class="friends_head_portrait"><img src="./img/free_stock_photo.jpg" /></span>
			<span class="friends_name sl">李明东 货主</span>
			<span class="layui-icon layui-icon-close-fill friends_close"></span>
		</div>
		<div class="frends">
			<span class="friends_head_portrait"><img src="./img/free_stock_photo.jpg" /></span>
			<span class="friends_name sl">未备注: 王五 货主</span>
			<span class="layui-icon layui-icon-close-fill friends_close"></span>
		</div>
		<div class="frends">
			<span class="friends_head_portrait"><img src="./img/free_stock_photo.jpg" /></span>
			<span class="friends_name sl">张三 车主</span>
			<span class="layui-icon layui-icon-close-fill friends_close"></span>
		</div>
	</div>
</div>
<div class="fl chat_right">
	<div class="user_info">
		<div class="fl layui-form user_data">
			<div class="layui-form-item layui-form-text user_data_info">
				<div class="fl user_name">李明东</div>
				<div class="fl user_company">建筑木材有限公司</div>
				<div class="fl user_update_phone">
					<div class="fl user_phone">17610003123</div>
					<div class="fl user_submit">(本次来电)</div>
				</div>
			</div>
			<div class="layui-form-item user_select">
				<div class="fl user_select_item">
					<select lay-filter="aihao">
						<option value="0">货主</option>
						<option value="1">车主</option>
					</select>
				</div>
				<div class="fl user_select_item">
					<select lay-filter="aihao">
						<option value="0">A1</option>
						<option value="1">A2</option>
						<option value="1">C1</option>
					</select>
				</div>
				<div class="fl user_select_item">
					<span>昵称：</span>
					<span>艾斯的axure峡谷</span>
				</div>
				<div class="fl user_select_item">
					<span>发货6次</span>、
					<span>成单2次</span>、
					<span>信用2</span>
				</div>
			</div>
		</div>
		<div class="chat_user_move"></div>
	</div>
	<div class="tab_select">
    <span class="select_tab" data-type="1">微信聊天</span>
    <span data-type="2">网络采集记录<i data-modal-type="2" class="layui-icon layui-icon-templeate-1"></i></span>
    <span data-type="3">通话记录<i data-modal-type="3" class="layui-icon layui-icon-templeate-1"></i></span>
    <span data-type="4">联系人及备注<i data-modal-type="4" class="layui-icon layui-icon-templeate-1"></i></span>
    <span data-type="5">企业详情<i data-modal-type="5" class="layui-icon layui-icon-templeate-1"></i></span>
    <span data-type="6">客户营销<i data-modal-type="6" class="layui-icon layui-icon-templeate-1"></i></span>
    <span data-type="7">货源录入<i data-modal-type="7" class="layui-icon layui-icon-templeate-1"></i></span>
    <span data-type="8">操作日志<i data-modal-type="8" class="layui-icon layui-icon-templeate-1"></i></span>
	</div>
	<div class="friend_chat">
		<div class="friend_chat_item friend_chat_port">
			<span class="chat_port_image"><img src="./img/tttt.png" /></span>
			<span class="chat_port_message chat_port_text">谢谢，我最近急需</span>
		</div>
		<div class="friend_chat_item friend_chat_port">
			<span class="chat_port_image"><img src="./img/tttt.png" /></span>
			<span class="chat_port_message chat_port_voice">
				5"<i class="layui-icon layui-icon-voice"></i>
			</span>
		</div>
		<div class="friend_chat_time">下午 6:00</div>
		<div class="friend_chat_item friend_chat_oneself">
			<span class="chat_port_image"><img src="./img/tttt.png" /></span>
			<span class="chat_port_message chat_port_text">收到，稍后联系您</span>
		</div>
		<div class="friend_chat_item friend_chat_oneself">
			<span class="chat_port_image"><img src="./img/tttt.png" /></span>
			<span class="chat_port_message chat_port_voice">
				5"<i class="layui-icon layui-icon-voice layui-icon-voice-left"></i>
			</span>
		</div>
		<div class="friend_chat_item friend_chat_oneself">
			<span class="chat_port_image"><img src="./img/tttt.png" /></span>
			<span class="chat_port_message chat_port_voice">
				10"<i class="layui-icon layui-icon-voice layui-icon-voice-left"></i>
			</span>
		</div>
		<div class="friend_chat_item friend_chat_port">
			<span class="chat_port_image"><img src="./img/tttt.png" /></span>
			<span class="chat_port_message chat_port_text">谢谢，我最近急需</span>
		</div>
		<div class="friend_chat_item friend_chat_port">
			<span class="chat_port_image"><img src="./img/tttt.png" /></span>
			<span class="chat_port_message chat_port_voice">
				5"<i class="layui-icon layui-icon-voice"></i>
			</span>
		</div>
		<div class="friend_chat_time">下午 6:00</div>
		<div class="friend_chat_item friend_chat_oneself">
			<span class="chat_port_image"><img src="./img/tttt.png" /></span>
			<span class="chat_port_message chat_port_text">收到，稍后联系您</span>
		</div>
		<div class="friend_chat_item friend_chat_oneself">
			<span class="chat_port_image"><img src="./img/tttt.png" /></span>
			<span class="chat_port_message chat_port_voice">
				5"<i class="layui-icon layui-icon-voice layui-icon-voice-left"></i>
			</span>
		</div>
		<div class="friend_chat_item friend_chat_oneself">
			<span class="chat_port_image"><img src="./img/tttt.png" /></span>
			<span class="chat_port_message chat_port_voice">
				10"<i class="layui-icon layui-icon-voice layui-icon-voice-left"></i>
			</span>
		</div>
	</div>
	<div class="chat_conver">
		<div class="chat_conver_opera">
			<div class="conver_opera_iconbtn">
				<span class="layui-icon layui-icon-face-smile-fine"></span>
				<span class="layui-icon layui-icon-picture"></span>
				<span class="layui-icon layui-icon-file"></span>
				<span class="layui-icon layui-icon-headset"></span>
				<span class="layui-icon layui-icon-video"></span>
				<span class="layui-icon layui-icon-fonts-code"></span>
			</div>
			<div class="quick_chat">
				<button type="button" class="layui-btn layui-btn-normal"><span>快捷回复</span></button>
				<div class="quick_chat_record">
					<span class="layui-icon layui-icon-log"></span>
					<span class="chat_record_text">聊天记录</span>
				</div>
			</div>
		</div>
		<div class="chat_conver_editor" contenteditable="true">
		</div>
		<div class="conver_opera_btn">
			<button type="button" class="layui-btn">关闭</button>
			<div class="layui-btn-group">
				<button type="button" class="layui-btn">发送</button>
				<button type="button" class="layui-btn layui-btn-xs btn-icon"> 
					<i class="layui-icon layui-icon-triangle-d"></i>
				</button>
			</div>
		</div>
	</div>
</div>
<div class="layui-icon layui-icon-close close_modal"></div>
</div>
`
}	

function supplyGoodsDom (){
	return `<div class="chat_model_right" style="width:100%;">
	<div class="chat_model_table" id="chat_model_table">
		<form class="layui-form model_table_form" action="">
			<div class="layui-form-item stockgood_item">
				<div class="layui-inline">
					<img src="./img/zu.png" alt="" style="width: 22px;">
				</div>
				<div class="layui-inline address" id="cascader">
					<input type="text" name="addres" required="" lay-verify="required" placeholder="请选择装货地址" autocomplete="off"
						class="layui-input">
				</div>
				<div class="layui-inline addressDetail">
					<input type="text" name="asd" required="" lay-verify="required" placeholder="请输入装货详细地址" autocomplete="off"
						class="layui-input">
				</div>
				<div class="layui-inline contact_contact_way">
					<input type="text" name="fff" required="" lay-verify="required" placeholder="联系人及联系方式" autocomplete="off"
						class="layui-input">
				</div>
				<div class="layui-inline">
					<button type="button" class="layui-btn layui-btn-primary layui-btn-sm" style="height: 22px; width: 22px;">
						<i class="layui-icon"></i>
					</button>
				</div>
			</div>
			<div class="layui-form-item stockgood_item">
				<div class="layui-inline">
					<img src="./img/red.png" alt="" style="width: 22px;margin: 0;">
				</div>
				<div class="layui-inline address" id="cascader1">
					<input type="text" name="sss" required="" lay-verify="required" placeholder="请选择卸货地址" autocomplete="off"
						class="layui-input">
				</div>
				<div class="layui-inline addressDetail">
					<input type="text" name="wws" required="" lay-verify="required" placeholder="请输入卸货详细地址" autocomplete="off"
						class="layui-input">
				</div>
				<div class="layui-inline contact_contact_way">
					<input type="text" name="fd" required="" lay-verify="required" placeholder="联系人及联系方式" autocomplete="off"
						class="layui-input">
				</div>
				<div class="layui-inline">
					<button type="button" class="layui-btn layui-btn-primary layui-btn-sm" style="height: 22px; width: 22px;">
						<i class="layui-icon"></i>
					</button>
				</div>
			</div>
			<div class="layui-form-item stockgood_info">
				<div class="layui-inline article">
					<input type="text" name="ws" required="" lay-verify="required" placeholder="请输入标题" autocomplete="off"
						class="layui-input">
				</div>
				<div class="layui-inline article2">
					<input type="text" name="ew" required="" lay-verify="required" placeholder="请输入标题" autocomplete="off"
						class="layui-input">
				</div>
			</div>
			<div class="layui-form-item">
				<div class=" layui-inline all">
					<div class="tag tag1">历史</div>
					<div class="tag tag1">司机报价</div>
					客户： <input type="text" placeholder="报价">
					预算： <input type="text" placeholder="报价">
				</div>
				<div class="layui-inline all-select">
					<select name="city" lay-verify="required">
						<option value=""></option>
						<option value="0">北京</option>
						<option value="1">上海</option>
						<option value="2">广州</option>
						<option value="3">深圳</option>
						<option value="4">杭州</option>
					</select>
				</div>
				<div class="layui-inline all-period">
					<input type="text" class="layui-input" id="goods-laydate" placeholder="年-月-日">
				</div>
			</div>
			<div class="layui-form-item chat_remark">
				<div class="layui-inline remark_select">
					<select name="city" lay-verify="required">
						<option value=""></option>
						<option value="0">北京</option>
						<option value="1">上海</option>
						<option value="2">广州</option>
						<option value="3">深圳</option>
						<option value="4">杭州</option>
					</select>
				</div>
				<div class="tag tag2 layui-inline">标签</div>
				<div class="layui-inline client_remark_select">
					<input type="text" name="title" required="" lay-verify="required" placeholder="请输入标题" autocomplete="off"
						class="layui-input">
				</div>
				<div class="layui-inline my_remark_select">
					<input type="text" name="title" required="" lay-verify="required" placeholder="请输入标题" autocomplete="off"
						class="layui-input">
				</div>
				<div class="layui-inline chat_remark_savebtn">
					<button class="layui-btn layui-btn-normal" lay-submit lay-filter="formDemo" id="supply_save">保存</button>
				</div>
				<div class="layui-inline chat_remark_resetbtn">
					<button type="reset"  class="layui-btn layui-btn-primary layui-border-blue">清空</button>
				</div>
			</div>
		</form>
		<div class="table_wrap"><table id="chat-table" class="chat-table" lay-filter="test"></table></div>
	 </div>
	</div>`
}

let list = [
	{
		value: 'zhinan',
		label: '指南',
		children: [
			{
				value: 'shejiyuanze',
				label: '设计原则设计原则设计原则设计原则',
				children: [
					{
						value: 'yizhi',
						label: '一致',
					},
					{
						value: 'fankui',
						label: '反馈',
					},
					{
						value: 'xiaolv',
						label: '效率',
					},
					{
						value: 'kekong',
						label: '可控',
					},
				],
			},
			{
				value: 'daohang',
				label: '导航',
				children: [
					{
						value: 'cexiangdaohang',
						label: '侧向导航',
					},
					{
						value: 'dingbudaohang',
						label: '顶部导航',
					},
				],
			},
		],
	},
	{
		value: 'zujian',
		label: '组件',
		children: [
			{
				value: 'basic',
				label: 'Basic',
				children: [
					{
						value: 'layout',
						label: 'Layout 布局',
					},
					{
						value: 'color',
						label: 'Color 色彩',
					},
					{
						value: 'typography',
						label: 'Typography 字体',
					},
					{
						value: 'icon',
						label: 'Icon 图标',
					},
					{
						value: 'button',
						label: 'Button 按钮',
					},
				],
			},
			{
				value: 'form',
				label: 'Form',
				children: [
					{
						value: 'radio',
						label: 'Radio 单选框',
					},
					{
						value: 'checkbox',
						label: 'Checkbox 多选框',
					},
					{
						value: 'input',
						label: 'Input 输入框',
					},
					{
						value: 'input-number',
						label: 'InputNumber 计数器',
					},
					{
						value: 'select',
						label: 'Select 选择器',
					},
					{
						value: 'cascader',
						label: 'Cascader 级联选择器',
					},
					{
						value: 'switch',
						label: 'Switch 开关',
					},
					{
						value: 'slider',
						label: 'Slider 滑块',
					},
					{
						value: 'time-picker',
						label: 'TimePicker 时间选择器',
					},
					{
						value: 'date-picker',
						label: 'DatePicker 日期选择器',
					},
					{
						value: 'datetime-picker',
						label: 'DateTimePicker 日期时间选择器',
					},
					{
						value: 'upload',
						label: 'Upload 上传',
					},
					{
						value: 'rate',
						label: 'Rate 评分',
					},
					{
						value: 'form sheet',
						label: 'Form 表单',
					},
				],
			},
			{
				value: 'data',
				label: 'Data',
				children: [
					{
						value: 'table',
						label: 'Table 表格',
					},
					{
						value: 'tag',
						label: 'Tag 标签',
					},
					{
						value: 'progress',
						label: 'Progress 进度条',
					},
					{
						value: 'tree',
						label: 'Tree 树形控件',
					},
					{
						value: 'pagination',
						label: 'Pagination 分页',
					},
					{
						value: 'badge',
						label: 'Badge 标记',
					},
				],
			},
			{
				value: 'notice',
				label: 'Notice',
				children: [
					{
						value: 'alert',
						label: 'Alert 警告',
					},
					{
						value: 'loading',
						label: 'Loading 加载',
					},
					{
						value: 'message',
						label: 'Message 消息提示',
					},
					{
						value: 'message-box',
						label: 'MessageBox 弹框',
					},
					{
						value: 'notification',
						label: 'Notification 通知',
					},
				],
			},
			{
				value: 'navigation',
				label: 'Navigation',
				children: [
					{
						value: 'menu',
						label: 'NavMenu 导航菜单',
					},
					{
						value: 'tabs',
						label: 'Tabs 标签页',
					},
					{
						value: 'breadcrumb',
						label: 'Breadcrumb 面包屑',
					},
					{
						value: 'dropdown',
						label: 'Dropdown 下拉菜单',
					},
					{
						value: 'steps',
						label: 'Steps 步骤条',
					},
				],
			},
			{
				value: 'others',
				label: 'Others',
				children: [
					{
						value: 'dialog',
						label: 'Dialog 对话框',
					},
					{
						value: 'tooltip',
						label: 'Tooltip 文字提示',
					},
					{
						value: 'popover',
						label: 'Popover 弹出框',
					},
					{
						value: 'card',
						label: 'Card 卡片',
					},
					{
						value: 'carousel',
						label: 'Carousel 走马灯',
					},
					{
						value: 'collapse',
						label: 'Collapse 折叠面板',
					},
				],
			},
		],
	},
	{
		value: 'ziyuan',
		label: '资源',
		children: [
			{
				value: 'axure',
				label: 'Axure Components',
			},
			{
				value: 'sketch',
				label: 'Sketch Templates',
			},
			{
				value: 'jiaohu',
				label: '组件交互文档',
			},
		],
	},
	{ value: 1, label: 'xxx' },
];
let openModal = {}
let modelPosType = []
function modalClick ({ $, layer, form, table, chatOffset, chatWidth, chatHeight, isMove }) {
	if(isMove) return
	let layer_modal = {}
  $(".tab_select span").on('click', function () {
  	var othis = $(this),
  		type = othis.data('type');
		if (type === 7) {
			openModal[`${type}Right`] = !openModal[`${type}Right`]
  		openModal[`${type}Right`] ? (layer_modal[`${type}Right`] = layer.open({
        type: 1,
  			title: false,
  			closeBtn: false,
  			btn: false,
        tipsMore: true,
        zIndex: layer.zIndex,
				shade: false,
				offset: [chatOffset.top, chatOffset.left+chatWidth],
				skin: 'supply_of_goods',
				id: 'supply_of_goods',
  			// move : '.user_info',
  			// skin: 'chat_modal_wrap',
  			moveType: 1,
  			area: ["32%", '550px'],
				success: function (layero, index) {
					// 重新渲染弹层中的下拉选择框select
					form.render('select');
					table.render({
						elem: '#chat-table',
						height: 312,
						width: $('#chat_model_table').width(),
						// , url: '/demo/table/user/' //数据接口
						// , page: true //开启分页
						cols: [
							[ //表头
							{ field: 'action', title: '出发地-目的地', width: 150 },
								{ field: 'detail', title: '货车及用车详情', width: 150 },
								{ field: 'tel', title: '手机号码', width: 100 },
								{ field: 'price', title: '客户出价', width: 100 },
								{ field: 'time', title: '处理日期及状态' },
								{ field: 'person', title: '操作人', fixed: 'right', width: 140 }
							]
						]
					});
  			},
  			content: supplyGoodsDom()
			})) : layer.close(layer_modal[`${type}Right`])
			console.log(chatOffset, layer_modal)
		}
		modelPosType[0] = 'right'
  })
  $(".tab_select span i").on('click', function (e) {
    e.stopPropagation();
    var othis = $(this),
      modalType = othis.data('modal-type');
		if (modalType === 7) {
			openModal[`${modalType}Bottom`] = !openModal[`${modalType}Bottom`]
			openModal[`${modalType}Bottom`] ? (layer_modal[`${modalType}Bottom`] = layer.open({
        type: 1,
  			title: false,
  			closeBtn: false,
  			btn: false,
        tipsMore: true,
				id: 'supply_of_goods_top',
        zIndex: layer.zIndex,
				shade: false,
				offset: [chatOffset.top+chatHeight, chatOffset.left],
				skin: 'supply_of_goods_top',
  			moveType: 1,
  			area: ["32%", '550px'],
				success: function (layero, index) {
					// 重新渲染弹层中的下拉选择框select
					form.render('select');
					table.render({
						elem: '#chat-table',
						height: 312,
						width: $('#chat_model_table').width(),
						// , url: '/demo/table/user/' //数据接口
						// , page: true //开启分页
						cols: [
							[ //表头
							{ field: 'action', title: '出发地-目的地', width: 150 },
								{ field: 'detail', title: '货车及用车详情', width: 150 },
								{ field: 'tel', title: '手机号码', width: 100 },
								{ field: 'price', title: '客户出价', width: 100 },
								{ field: 'time', title: '处理日期及状态' },
								{ field: 'person', title: '操作人', fixed: 'right', width: 140 }
							]
						]
					});
  			},
  			content: supplyGoodsDom()
  		})) : layer.close(layer_modal[`${modalType}Bottom`])
		}
		modelPosType[1] = 'top'
    return false
  })
	$(".chat_left_friend .frends").on('click', function (e) {
		var othis = $(this)
		e.stopPropagation()
		othis.siblings().removeClass('select_friends');
		othis.addClass('select_friends')
	})
	$(".tab_select span").on('click', function () {
		var othis = $(this)
		othis.siblings().removeClass('select_tab');
		othis.addClass('select_tab')
	})
	$('.chat_left_friend .friends_close').on('click', function (e) {
		e.stopPropagation()
		console.log(111)
	})
}

layui.use(['form', 'layedit', 'laydate', 'layer', 'table'], function () {
	let chat_modal = null
	let chatDom = null
	var $ = layui.jquery
	var table = layui.table
	var layer = layui.layer
	var form = layui.form
	// modalClick({ $, layer, form, table })
	// chat_modal = layer.open({
	//   title: false,
	//   closeBtn: false,
	//   btn: false,
	//   skin: 'chat_modal_wrap',
	//   moveType: 1,
	//   area: ['815px', '550px'],
	//   content: modalDom()
	// });
	// close_modal = $(".close_modal")
	$(".open_chat").on('click', function () {
		chat_modal = layer.open({
      title: false,
      type: 1,
			closeBtn: false,
			btn: false,
			id: 'chat_modal_wrap',
			// move : '.user_info',
			skin: 'chat_modal_wrap',
			moveType: 1,
      area: ["50%", '550px'],
			zIndex: layer.zIndex,
			offset: ['auto', '100px'],
			shade: false,
			move: '.chat_user_move',
			resizing (layero) {
				console.log(layero)
			},
			onMove (offset, layero) {
				chatDom = $(layero.selector)
				let offsetPosRight = modelPosType.includes('right') && {
					left: offset.left + chatDom.width(),
					top: offset.top
				}
				let offsetPosTop = {
					left: offset.left,
					top: offset.top + chatDom.height()
				}
				modelPosType.includes('right') && $('.supply_of_goods').css(offsetPosRight)
				modelPosType.includes('top') && $('.supply_of_goods_top').css(offsetPosTop)
				modalClick({ $, layer, form, table, chatOffset: offset, chatWidth: chatDom.width(), chatHeight: chatDom.height(), isMove: true })
			},
			tipsMore: true,
			success: function (layero, index) {
				chatDom = $(layero.selector)
				layer.setTop(layero);
				form.render('select');
				console.log(chatDom)
				modalClick({ $, layer, form, table, chatOffset: chatDom.offset(), chatWidth: chatDom.width(), chatHeight: chatDom.height() })
				$(".close_modal").on('click', function () {
					modelPosType = []
					layer.closeAll()
				})
				$(".chat_left_friend .frends").on('click', function () {
					var othis = $(this)
					othis.siblings().removeClass('select_friends');
					othis.addClass('select_friends')
				})
				$(".user_update_phone").on('click', function () {
					console.log('修改手机号')
				})
				form.on('submit(formDemo)', function (data) {
					layer.msg(JSON.stringify(data.field));
					return false;
				});
				const cas = new Cascader({
					container: '#cascader',
					data: arr,
					selectFn: (val) => {
						console.log('你选择了', val);
					},
				});
				const xcas = new Cascader({
					container: '#cascader1',
					data: arr,
					selectFn: (val) => {
						console.log('你选择了', val);
					},
				});
				$('#cascader input').on('focus', function () {
					console.log('你选择了', 'cascader');
					xcas.popClose()
				})
				$('#cascader1 input').on('focus', function () {
					console.log('你选择了', 'cascader1');
					cas.popClose()
				})
			},
			content: modalDom()
		});
	})
});

layui.use('laydate', function () {
	var laydate = layui.laydate
	laydate.render({
		elem: '#goods-laydate',
		btns: ['clear'],
		change: function (value, date, endDate) {
			console.log(value); //得到日期生成的值，如：2017-08-18
			console.log(date); //得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
			console.log(endDate); //得结束的日期时间对象，开启范围选择（range: true）才会返回。对象成员同上。
		}
	});
});

