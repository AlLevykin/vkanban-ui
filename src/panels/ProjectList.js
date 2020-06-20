import React from 'react'
import PropTypes from 'prop-types'
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel'
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader'
import Group from '@vkontakte/vkui/dist/components/Group/Group'
import CardGrid from '@vkontakte/vkui/dist/components/CardGrid/CardGrid'
import Header from '@vkontakte/vkui/dist/components/Header/Header'
import Card from '@vkontakte/vkui/dist/components/Card/Card'
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell'
import List from '@vkontakte/vkui/dist/components/List/List'
import Separator from '@vkontakte/vkui/dist/components/Separator/Separator'
import Counter from '@vkontakte/vkui/dist/components/Counter/Counter'
import Button from '@vkontakte/vkui/dist/components/Button/Button'
import Div from '@vkontakte/vkui/dist/components/Div/Div'
import Icon28UserOutline from '@vkontakte/icons/dist/24/user_outline'
import Icon24Newsfeed from '@vkontakte/icons/dist/24/newsfeed'
import Icon24Settings from '@vkontakte/icons/dist/24/settings'
import Icon24ThumbUp from '@vkontakte/icons/dist/24/thumb_up'
import Icon24Privacy from '@vkontakte/icons/dist/24/privacy'
import Icon24UserOutgoing from '@vkontakte/icons/dist/24/user_outgoing'
import Icon24Discussions from '@vkontakte/icons/dist/24/discussions'
import Icon24MoneyCircle from '@vkontakte/icons/dist/24/money_circle'

const projects = [
    {
        id: 1,
        name: "Помощь ветеранам",
        deadline: "08.05.2021",
        manager: "Евгений Авсиевич",
        backlog: 5,
        inprogress: 7,
        ready: 3,
        done: 1
    },
    {
        id: 2,
        name: "Ремонт детской площадки",
        deadline: "01.07.2020",
        manager: "Мария Смирнова",
        backlog: 15,
        inprogress: 17,
        ready: 13,
        done: 5
    },  
    {
        id: 3,
        name: "Благоустройство территории школы",
        deadline: "20.08.2020",
        manager: "Денис Зыков",
        backlog: 10,
        inprogress: 7,
        ready: 1,
        done: 3
    },       
]

const ProjectList = props => (
	<Panel id={props.id}>
		<PanelHeader>Мои проекты</PanelHeader>
		
        {projects.map(item => (
            <Group id={item.id} separator="hide" header={<Header mode="secondary">{item.name}</Header>}>
            <CardGrid>
                <Card size="l" mode="shadow">
                <Cell  description="Руководитель проекта" expandable before={<Icon28UserOutline />}>{item.manager}</Cell>
                <Group header={<Header mode="secondary">Задачи</Header>}>
                <List>
                    <Cell before={<Icon24Discussions />} indicator={<Counter>{item.backlog}</Counter>} >Планы</Cell>
                    <Cell before={<Icon24UserOutgoing />} indicator={<Counter>{item.inprogress}</Counter>} >В работе</Cell>
                    <Cell before={<Icon24Privacy />} indicator={<Counter>{item.ready}</Counter>} >Готово</Cell>
                    <Cell before={<Icon24ThumbUp />} indicator={<Counter>{item.done}</Counter>} >Завершено</Cell>                    
                </List>
                </Group>
                </Card>
            </CardGrid>
            <Div style={{display: 'flex'}}>
                <Button before={<Icon24Settings />} size="l" stretched style={{ marginRight: 8 }} onClick={props.go} data-to="projectsettings">Свойства</Button>
                <Button before={<Icon24MoneyCircle />} size="l" stretched  onClick={props.go} data-to="costpanel" style={{ marginRight: 8 }}>Бюджет</Button>
                <Button before={<Icon24Newsfeed />} size="l" stretched onClick={props.go} data-to="kanbanboard">Доска задач</Button>
            </Div>
            <Separator style={{ margin: '12px 0' }} />
            </Group>
          ))}
	</Panel>
)

ProjectList.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
}

export default ProjectList