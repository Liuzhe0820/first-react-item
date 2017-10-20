import React from 'react';
import {Row,Col} from 'antd';
import {
  Menu,
  Icon,
  Tabs,
  message,
  Form,
  Input,
  Button,
  Modal,
  CheckBox
} from 'antd';
import {Router, Route, Link, browserHistory} from 'react-router';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

class pcHeader extends React.Component{
  constructor() {//构造函数
    super();
    this.state = {
      current:'top',//高亮显示
      modalVisible:false,//登录框是否显示
      action:'login',//显示登录或注册
      hasLogined:false,//是否已登录
      userNickName:'',//用户昵称
      userid:0//用户id
    };
  };
  componentWillMount(){
		if (localStorage.userid!='') {
			this.setState({hasLogined:true});
			this.setState({userNickName:localStorage.userNickName,userid:localStorage.userid});
		}
	};
  setModalVisible(value){//弹框的显示隐藏
    this.setState({modalVisible:value});
  };
  handleClick(e){
    if(e.key=='register'){//点击的是个人中心或登录页面
      this.setState({current:'register'});//把点击的设置高亮
      this.setModalVisible(true);//显示弹框
    }else{//点击的不是个人中心或登录页面
      {this.setState({current:e.key})}//把点击的设置高亮
    }
  };
  handleSubmit(e){
    //向API提交数据
    e.preventDefault();//阻止冒泡
    var myFetchOptions = {
      method:'GET'
    }
    var formData = this.props.form.getFieldsValue();
    //fetch方法，第一个参数：url，第二个参数：请求方式get
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=register&username=userName&password=password&r_userName="+formData.r_userName+"&r_password="+formData.r_password+"&r_confirmPassword="+formData.r_confirmPassword,myFetchOptions).then(response=>response.json()).then(json=>{
      this.setState({userNickName:json.NickUserName,userid:json.userId});
      localStorage.userid= json.UserId;
			localStorage.userNickName = json.NickUserName;
    });
    if(this.state.action=='login'){
      this.setState({hasLogined:true});
    }
    message.success('请求成功');
    this.setModalVisible(false);//隐藏模态框
  };
  callback(key){
    if (key == 1) {
			this.setState({action: 'login'});
		} else if (key == 2) {
			this.setState({action: 'register'});
		}
  };
  logout(){
		localStorage.userid= '';
		localStorage.userNickName = '';
		this.setState({hasLogined:false});
	};
  render(){
    let {getFieldDecorator} = this.props.form;//接收全局页面参数
    //判断是否是登录状态
    const userShow = this.state.hasLogined
    ?
    <Menu.Item ket='logout' className='register'>
      <Button type='primary' htmlType='button'>{this.state.userNickName}</Button>
      &nbsp;&nbsp;
      <Link target='_blank'>
        <Button type='dashed' htmlType='button'>个人中心</Button>
      </Link>
      &nbsp;&nbsp;
      <Button type='ghost' htmlType='button'  onClick={this.logout.bind(this)}>退出</Button>
    </Menu.Item>
    :
    <Menu.Item key='register' className='register'>
      <Icon type='home' />注册/登录
    </Menu.Item>;
      //用户中心上面的方法依次是:className控制弹框垂直居中显示，控制模态框显示隐藏,点击取消按钮隐藏模态框，点击 ok按钮关闭弹框
    return (
      <header>
        <Row>
          <Col span={2}></Col>
          <Col span={4}>
            <a className='logo' href='/'>
              <img src='./src/img/logo.png' alt='logo' />
              <span>ReactNews</span>
            </a>
          </Col>
          <Col span={16}>
            <Menu mode='horizontal' onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]}>
              <Menu.Item key='top' >
                <Icon type='appstore' />头条
              </Menu.Item>
              <Menu.Item key='shehui'>
                <Icon type='appstore' />社会
              </Menu.Item>
              <Menu.Item key='guonei'>
                <Icon type='appstore' />国内
              </Menu.Item>
              <Menu.Item key='guoji'>
                <Icon type='appstore' />国际
              </Menu.Item>
              <Menu.Item key='yule'>
                <Icon type='appstore' />娱乐
              </Menu.Item>
              <Menu.Item key='keji'>
                <Icon type='appstore' />科技
              </Menu.Item>
              <Menu.Item key='shishang'>
                <Icon type='appstore' />时尚
              </Menu.Item>
              {userShow}
            </Menu>
          </Col>
          <Col span={2}></Col>
        </Row>

        <Modal title='用户中心' wrapClassName='vertical-center-modal' visible={this.state.modalVisible} onCancel = {()=>this.setModalVisible(false)} onOk = {()=>this.setModalVisible(false)} okText='关闭'>
          <Tabs type='card' onChange={this.callback.bind(this)}>
          <TabPane tab='登录' key='1'>
            <Form layout='horizontal' onSubmit={this.handleSubmit.bind(this)}>
              <FormItem label='账户'>
                <Input placeholder='请输入账号' {...getFieldDecorator('userName')}/>
              </FormItem>
              <FormItem label='密码'>
                <Input type='password' placeholder='请输入密码' {...getFieldDecorator('password')}/>
              </FormItem>
              <Button htmlType='submit' type='primary'>登录</Button>
            </Form>
          </TabPane>
          <TabPane tab='注册' key='2'>
              <Form layout='horizontal' onSubmit={this.handleSubmit.bind(this)}>
                <FormItem label='账户'>
                  <Input placeholder='请输入账号' {...getFieldDecorator('r_userName')}/>
                </FormItem>
                <FormItem label='密码'>
                  <Input type='password' placeholder='请输入密码' {...getFieldDecorator('r_password')}/>
                </FormItem>
                <FormItem label='确认密码'>
                  <Input type='password' placeholder='再次输入密码' {...getFieldDecorator('r_confirmPassword')}/>
                </FormItem>
                <Button type='primary' htmlType='submit'>注册</Button>
              </Form>
            </TabPane>
          </Tabs>
        </Modal>
      </header>
    );
  };
};
//Form二次封装
export default pcHeader = Form.create({})(pcHeader);
