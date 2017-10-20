import React from 'react';
import {Row,Cal} from 'antd';
import {
  Menu,
  Icon,
  Tabs,
  message,
  Form,
  Input,
  Button,
  CheckBox,
  Modal
} from 'antd';
const FormItem = Form.Item;
const SubMenu = Menu.Submenu;
const TabPane = Tabs.TabPane;
const MenuItemGroup = Menu.ItemGroup;

class MobileHeader extends React.Component{
  constructor(){//构造函数
    super();
    this.state = {
      current:'top',//高亮显示
      modalVisible:false,//登录框是否显示
      action:'login',//显示登录
      hasLogIned:false,//是否登录
      userNickName:'',//用户名称
      userId:0//用户ID
    }
  };
  setModalVisible (value){//弹框的显示隐藏
    this.setState({modalVisible:value});
  };
  handleClick(e){
    if(e.key=='register'){//点击的是注册登录按钮
      this.setState({current:'register'});//把点击的设置成高亮
      this.setState({modalVisible:true});//显示登录框
    }else{
      this.setState({current:e.key});//把点击的按钮设置高亮
    }
  };
  handleSubmit(e){
    //向API提交数据
    e.preventDefault();//阻止冒泡
    var myFetchOptions = {//提交方式
      method:'GET'
    };
    var formData = this.props.form.getFieldsValue();//表单数据
    //fetch方法 第一个参数 url   第二个参数 请求方式
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=register&username=userName&password=password&r_userName="+formData.r_userName+"&r_password="+formData.r_password+"&r_confirmPassword="+formData.r_confirmPassword,myFetchOptions).then(response=>response.json()).then(json=>{
      this.setState({userNickName:json.userNickName,userId:json.userId});
    })
    message.success('请求成功');
    this.setModalVisible(false);//隐藏模态框
  }
  login(){
    this.setModalVisible(true);//显示模态框
  };
  //用户中心上面的方法依次是:className控制弹框垂直居中显示，控制模态框显示隐藏,点击取消按钮隐藏模态框，点击 ok按钮关闭弹框
  render(){
    let {getFieldDecorator} = this.props.form;//接收全局页面参数
    //判断是否为登录状态
    const userShow = this.state.hasLogIned?
    <Link>
      <Icon type='inbox' />
    </Link>
    :
    <Icon type='setting' onClick={this.login.bind(this)}/>
    return(
      <div id='mobileHeader'>
        <header>
          <img src='./src/img/logo.png' alt='logo' />
          <span>ReactNews</span>
          {userShow}
        </header>

        <Modal title='用户中心' wrapClassName='vertical-center-modal' visible={this.state.modalVisible} onCancel={()=>this.setModalVisible(false)} onOk = {()=>this.setModalVisible(false)} okText = '关闭'>
          <Tabs type='card'>
            <TabPane tab='注册' key='2'>
              <Form layout='horizontal' onSubmit={this.handleSubmit.bind(this)}>
                <FormItem lable='账户'>
                  <Input placeholder='请输入账号' {...getFieldDecorator('r_userName')}/>
                </FormItem>
                <FormItem lable='密码'>
                  <Input type='password' placeholder='请输入密码' {...getFieldDecorator('r_password')} />
                </FormItem>
                <FormItem lable='确认密码'>
                  <Input type='password' placeholder='请再次输入密码' {...getFieldDecorator('r_password')} />
                </FormItem>
                <Button htmlType='submit' type='primary'>注册</Button>
              </Form>
            </TabPane>
          </Tabs>
        </Modal>
      </div>
    );
  };
};
//Form二次封装
export default MobileHeader = Form.create({})(MobileHeader);
