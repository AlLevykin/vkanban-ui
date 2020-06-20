import React from 'react'
import PropTypes from 'prop-types'
import { platform, IOS } from '@vkontakte/vkui'
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel'
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader'
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton'
import Group from '@vkontakte/vkui/dist/components/Group/Group'
import CardGrid from '@vkontakte/vkui/dist/components/CardGrid/CardGrid'
import Header from '@vkontakte/vkui/dist/components/Header/Header'
import Card from '@vkontakte/vkui/dist/components/Card/Card'
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell'
import List from '@vkontakte/vkui/dist/components/List/List'
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back'
import Icon24Back from '@vkontakte/icons/dist/24/back'
import Icon28UserOutline from '@vkontakte/icons/dist/24/user_outline'

const projects = [
    {
        id: 1,
        name: "Встреча с ветеранами",
        deadline: "08.05.2021",
        manager: "Петр Иванов",
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

const osName = platform()

const ProjectList = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={props.go} data-to="dashboard">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		>
			Мои проекты
		</PanelHeader>
        {projects.map(item => (
            <Group id={item.id} separator="hide" header={<Header mode="secondary">{item.name}</Header>}>
            <CardGrid>
                <Card size="l" mode="shadow">
                <Cell  description="Менеджер проекта" expandable before={<Icon28UserOutline />}>{item.manager}</Cell>
                <Group header={<Header mode="secondary">Задачи</Header>}>
                <List>
                    <Cell>Планы</Cell>
                    <Cell>В работе</Cell>
                    <Cell>Готово</Cell>
                    <Cell>Завершено</Cell>                    
                </List>
                </Group>
                </Card>
            </CardGrid>
            </Group>
          ))}
	</Panel>
)

ProjectList.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
}

export default ProjectList