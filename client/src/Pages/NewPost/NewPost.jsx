// import React, { useEffect, useState } from 'react';
// import { getGeoDataService } from '../../Services/properties.service';
// import {
//     Form,
//     Select,
//     Cascader,
//     InputNumber,
//     Input,
//     Switch,
//     Button,
//     Upload,
//     Row,
//     Col,
//     /* Rate,
//     Radio,
//     Slider,
//     Checkbox, */
//   } from 'antd';
//   import 'antd/dist/antd.css';
//   import { /* UploadOutlined, */ InboxOutlined } from '@ant-design/icons';
//   import {streets, cardinals, alphabet} from './data.js'; 
//   import ProgressBar from './ProgressBar';
//   import style from './NewPost.module.css'
  
//   const { Option } = Select;
  
//   const formItemLayout = {
//     labelCol: { span: 4 },
//     wrapperCol: { span: 12 },
//   };
  
//   const normFile = (e) => {
//     console.log('Upload event:', e);
//     if (Array.isArray(e)) {
//       return e;
//     }
//     return e && e.fileList;
//   };
  
//   const Demo = () => {
//     const [options, setCityData] = useState('')
//     useEffect(() => {
//       async function getGeoData() {
//         const data = await getGeoDataService();
//         setCityData(data);
//       }
//        getGeoData()
//     }, []);

//     const onFinish = (values) => {
//       values.department=values.department_city[0]
//       values.city=values.department_city[1]
//       values.street_number= `${values.main_type} ${values.main_num}${values.main_letter} ${values.main_Bis ? 'Bis' : ''} ${values.main_cardinal} ${values.gn_num}${values.gn_letter} ${values.gn_letter} ${values.gn_portal} ${values.gn_cardinal}`
//       console.log('Acá envío el form con este objeto --> ', values);
//     };
    
//     return (
//       <div className={style.ctn}>
//       <ProgressBar />
//       <Form
//         name="validate_other"
//         {...formItemLayout}
//         onFinish={onFinish}
//         initialValues={{
//           // main_cardinal: 'Norte'
//         }}
//       >
//         <Form.Item>
//           <h1 className="ant-form-text">Publica tu inmueble</h1>
//         </Form.Item>
//         {/* Si no tenemos teléfono, antes de empezar a publicar completa tus datos, redirect to EditUser */}
//         {/* Primer paso, ubicación */}
//         {/* País */}
//         <Form.Item
//           name="country"
//           label="País"
//           hasFeedback
//           rules={[{ required: true, message: 'Por favor, selecciona un país' }]}
//         >
//           <Select placeholder="Por favor, selecciona un país">
//             <Option value="Colombia">Colombia</Option>
//           </Select>
//         </Form.Item>
//         {/* Departamento y ciudad */}
//         <Form.Item
//           name="department_city"
//           label="Departamento y Ciudad"
//           hasFeedback
//           rules={[{ required: true, message: 'Por favor, selecciona un Departamento y una ciudad'}]}
//           >
//           <Cascader options={options} placeholder="Por favor, selecciona un Departamento y una ciudad" />
//         </Form.Item>
  
//       {/* Dirección */}
//         {/* Via principal */}
//         <Input.Group>
//         <Row>
//           <Col span={4}>
//             <Form.Item
//               name="main_type"
//               label="Tipo"
//               rules={[{ required: true, message: 'Por favor, ingrese el tipo de vía' }]}
//             >
//               <Select placeholder=">>">
//                 {streets.map((type, i) => <Option value={type}>{type}</Option>)}
//               </Select>
//             </Form.Item>
//           </Col>
//           <Col span={4}>
//             <Form.Item
//               name="main_num"
//               label="Número"
//               rules={[{ required: true, message: 'Por favor, ingrese el número' }]}
//             >
//               <InputNumber placeholder="#" min={1}/>
//             </ Form.Item>
//           </Col>
//           <Col span={4}>
//             <Form.Item
//               name="main_Bis"
//               label="Bis"
//               valuePropName="Bis"
//             >
//               <Switch />
//             </Form.Item>
//           </Col>
//           <Col span={4}>
//             <Form.Item
//               name="main_letter"
//               label="Letra"
//             >
//               <Select placeholder=">...">
//                 {alphabet.map((type, i) => <Option key={i} value={type}>{type}</Option>)}
//               </Select>
//             </Form.Item>
//           </Col>
//           <Col span={4}>
//             <Form.Item
//               name="main_cardinal"
//               label="Sentido de la vía"
//             >
//               <Select placeholder="> >">
//                 {cardinals.map((type, i) => <Option key={i} value={type}>{type}</Option>)}
//               </Select>
//             </Form.Item>
//           </Col>
//         </Row>
//         </Input.Group>
          

//         {/* Via generadora */}
//           <Form.Item
//             name="gn_num"
//             label="Número"
//             rules={[{ required: true, message: 'Por favor, ingrese el número' }]}
//           >
//             <InputNumber placeholder="#" min={1} />
//           </ Form.Item>
//           <Form.Item
//             name="gn_letter"
//             label="Letra"
//           >
//             <Select placeholder=">...">
//               {alphabet.map((type, i) => <Option value={type}>{type}</Option>)}
//             </Select>
//           </Form.Item>

//           <Form.Item
//             name="gn_portal"
//             label="Número"
//             rules={[{ required: true, message: 'Por favor, ingrese el número' }]}
//           >
//             <InputNumber placeholder="#" min={1} />
//           </ Form.Item>

//           <Form.Item
//             name="gn_cardinal"
//             label="Sentido de la vía"
//           >
//             <Select placeholder="> >">
//               <Option value={''}>{'> >'}</Option>
//               {cardinals.map((type, i) => <Option value={type}>{type}</Option>)}
//             </Select>
//           </Form.Item>
//         {/* Segundo Paso: características */}
        

//         {/* Tercer paso: agregar imágenes */}
//         <Form.Item label="Dragger">
//           <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
//             <Upload.Dragger name="files" action="/upload.do">
//               <p className="ant-upload-drag-icon">
//                 <InboxOutlined />
//               </p>
//               <p className="ant-upload-text">Click or drag file to this area to upload</p>
//               <p className="ant-upload-hint">Support for a single or bulk upload.</p>
//             </Upload.Dragger>
//           </Form.Item>
//         </Form.Item>

//         {/* Cuarto Paso: seleccionar tipo de plan */}

//         {/* Quinto Paso: pago */}

//         {/* Sexto paso: checkout */}
  
//         <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
//           <Button type="primary" htmlType="submit">
//             Submit
//           </Button>
//         </Form.Item>
//       </Form>
//       </div>
//     );
//   };
  
// export default Demo;