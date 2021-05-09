function modalDom() {
  return `
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
    <div class="fl user_head_port">
      <img src="./img/free_stock_photo.jpg" />
    </div>
    <div class="fl layui-form user_data">
      <div class="layui-form-item layui-form-text user_data_info">
        <div class="fl user_name">李明东</div>
        <div class="fl user_company">建筑木材有限公司</div>
        <div class="fl user_phone"><input type="text" placeholder="请输入手机号" lay-verify="phone"></div>
        <div class="fl user_submit"><button class="layui-btn" lay-submit>完成</button></div>
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
  </div>
  <div class="tab_select">
    <span class="select_tab" data-type="1">微信聊天</span>
    <span data-type="2">网络采集记录</span>
    <span data-type="3">通话记录</span>
    <span data-type="4">联系人及备注</span>
    <span data-type="5">企业详情</span>
    <span data-type="6">客户营销</span>
    <span data-type="7">货源录入</span>
    <span data-type="8">操作日志</span>
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
`
}

function modalClick({ $ }) {
  $(".tab_select span").on('click', function() {
    var othis = $(this),
      type = othis.data('type');
    console.log(type)
  })
  $(".chat_left_friend .frends").on('click', function(e) {
    var othis = $(this)
    e.stopPropagation()
    othis.siblings().removeClass('select_friends');
    othis.addClass('select_friends')
  })
  $(".tab_select span").on('click', function() {
    var othis = $(this)
    othis.siblings().removeClass('select_tab');
    othis.addClass('select_tab')
  })
  $('.chat_left_friend .friends_close').on('click', function(e) {
    e.stopPropagation()
    console.log(111)
  })
}

layui.use('layer', function() {
  let chat_modal = null
  var $ = layui.jquery
  var layer = layui.layer
  modalClick({ $ })
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
  $(".open_chat").on('click', function() {
    chat_modal = layer.open({
      title: false,
      closeBtn: false,
      btn: false,
      skin: 'chat_modal_wrap',
      moveType: 1,
      area: ['815px', '550px'],
      content: modalDom()
    });
    modalClick({ $ })
    $(".close_modal").on('click', function() {
      layer.closeAll()
    })
    $(".chat_left_friend .frends").on('click', function() {
      var othis = $(this)
      othis.siblings().removeClass('select_friends');
      othis.addClass('select_friends')
    })
  })
});