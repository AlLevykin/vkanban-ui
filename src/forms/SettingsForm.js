import React from 'react';
import { Input, Select, FormLayout, Group, Header, Avatar, Textarea, Cell } from '@vkontakte/vkui';

class SettingsForm extends React.Component {
 /*
    constructor(props) 
     {
      super(props);
  
      this.state = {
        email: '',
        purpose: ''
      }
  
      this.addressItems = [
        { label: 'Почтовый индекс', name: 'zip' },
        { label: 'Страна', name: 'country' },
        { label: 'Город', name: 'city' }
      ];
  
      this.onChange = this.onChange.bind(this);
    } */
  
    // onChange(e) {
    //   const { name, value } = e.currentTarget;
    //   this.setState({ [name]: value });
    // }
  
    render() {
      return (
            <FormLayout>
              {/* <Input
                type="email"
                top="E-mail"
                name="email"
                value={email}
                onChange={this.onChange}
                status={email ? 'valid' : 'error'}
                bottom={email ? 'Электронная почта введена верно!' : 'Пожалуйста, введите электронную почту'}
              />
  
              <FormLayoutGroup top="Пароль" bottom="Пароль может содержать только латинские буквы и цифры.">
                <Input type="password"  placeholder="Введите пароль" />
                <Input type="password" placeholder="Повторите пароль" />
              </FormLayoutGroup> */}
  
              <Input top="Название" />
              <Input top="Цель" />
  
              <Select top="Статус" placeholder="статус">
                <option value="m">не завешен</option>
                <option value="f">в работе</option>
                <option value="f">завершен</option>
              </Select>

              <Group description="">
                <Header mode="secondary">Участники</Header>
                <Cell before={<Avatar/>}>Евгений Авсиевич</Cell>
                <Cell before={<Avatar/>}>Татьяна Плуталова</Cell>
                <Cell before={<Avatar/>}>Олег Илларианов</Cell>
             </Group>

              <Textarea top="" placeholder="Комментарий..." />

              {/* <FormLayoutGroup top="Тип документа">
                <Radio name="type">Паспорт</Radio>
                <Radio name="type">Загран</Radio>
              </FormLayoutGroup>
  
              {this.addressItems.map(({ label, name }) => (
                <Input type="text" name={name} key={name} top={label} />
              ))}
  
              <Select
                top="Цель поездки"
                placeholder="Выберите цель поездки"
                status={purpose ? 'valid' : 'error'}
                bottom={purpose ? '' : 'Пожалуйста, укажите цель поездки'}
                onChange={this.onChange}
                value={purpose}
                name="purpose"
              >
                <option value="0">Бизнес или работа</option>
                <option value="1">Индивидуальный туризм</option>
                <option value="2">Посещение близких родственников</option>
              </Select>
  
              <Textarea top="О себе" />
  
              <Checkbox>Согласен со всем <Link>этим</Link></Checkbox>
              <Button size="xl">Зарегистрироваться</Button> */}
            </FormLayout>
      );
    }
  }

  export default SettingsForm;