
import {Card,Form,Row,Col,Input,Select,DatePicker,Button} from "antd"
import './SignUp.css'
import {useNavigate} from "react-router-dom"

const logo = "https://www.freeiconspng.com/thumbs/blogger-logo-icon-png/blogger-logo-icon-png-12.png"

const SignUp = () => {

    const navigate= useNavigate()
    const form=Form.useForm();

    {/*
     initialValues={{
            name:'',
            surname:'',
            username:'',
            email:'',
            city:'İstanbul',
            gender:'Bilinmiyor',
            birthdate:'',
            password:''
        }}
*/}

    return(
       <Card className="sign-up-card">
        <div className="sign-up-logo-wrapper">
           <img src={logo} alt="logo"></img> 
        </div>

        <Form 
        layout="vertical"
        autoComplete="off"
       
        >

        <Row gutter={16}>
            <Col span={8}>
             <Form.Item label="Ad" required name="name" rules={{required:true,message:"Lütfen Ad Giriniz:"}}>
            <Input placeholder="Adınız"></Input>
            </Form.Item>   
            </Col>

            <Col span={8}>
             <Form.Item label="Soyad" required name="surname" rules={{required:true,message:"Lütfen Soyad Giriniz:"}}>
            <Input placeholder="Soyadınız"></Input>
            </Form.Item>   
            </Col>

            <Col span={8}>
             <Form.Item label="Cinsiyet" required name="gender" rules={{required:true,message:"Lütfen Cinsiyet Seçiniz:"}}>
            <Select>
            <Select.Option>Test</Select.Option>
            <Select.Option>Test 1</Select.Option>
            </Select>
            </Form.Item>   
            </Col>

        </Row>

        <Row gutter={16}>
            <Col span={12}>
             <Form.Item label="Kullanıcı Adı" required name="username" rules={{required:true,message:"Lütfen Kullanıcı Adı Giriniz:"},{min:3,message:"Min 3 karakter giriniz"}}>
            <Input.Search placeholder="Kullanıcı Adı" loading></Input.Search>
            </Form.Item>   
            </Col>

            <Col span={12}>
             <Form.Item label="Email" required name="email" rules={{required:true,type:"email",message:"Lütfen Geçerli Bir Email Adresi Giriniz !"}}>
            <Input.Search placeholder="Email" loading></Input.Search>
            </Form.Item>   
            </Col>
        </Row>


        <Row gutter={16}>
            <Col span={12}>
             <Form.Item label="Doğum Tarihi" required name="birthdate" rules={{required:true,message:"Lütfen Tarih Seçiniz !"}}>
            <DatePicker placeholder="YYYY-MM-DD"></DatePicker>
            </Form.Item>   
            </Col>

            <Col span={12}>
             <Form.Item label="Şehir" required name="city" rules={{required:true,message:"Lütfen Şehir Seçiniz:"}}>
            <Select placeholder="Yaşadığınız Şehir">
            <Select.Option>İstanbul</Select.Option>
            <Select.Option>Ankara</Select.Option>
            </Select>
            </Form.Item>   
            </Col>
        </Row>

        <Row gutter={16}>
            <Col span={24}>
             <Form.Item label="Parola" required name="password" rules={{required:true,message:"Lütfen Parola Giriniz !"},{
                min:8,
                message:"Lütfen 8 karakterli bir parola oluşturun"
             }}>
             <Input.Password placeholder="Parola"></Input.Password>
            </Form.Item>   
            </Col>

        </Row>


        <Row gutter={16}>
            <Col span={24}>
             <Button className="w-full" type="primary">Kayıt Ol</Button>
            </Col>

        </Row>

        <Row gutter={16}>
            <Col span={24}>
             <Button className="w-full" type="link" onClick={() => {
                navigate('/auth/sign-in')
             }}>Giriş Yap</Button>
            </Col>

        </Row>

        </Form>

       </Card>
    )
}

export default SignUp