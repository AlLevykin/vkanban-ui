import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import CardScroll from '@vkontakte/vkui/dist/components/CardScroll/CardScroll';
import Card from '@vkontakte/vkui/dist/components/Card/Card';
import Header from '@vkontakte/vkui/dist/components/Header/Header';
import Separator from '@vkontakte/vkui/dist/components/Separator/Separator'
import Counter from '@vkontakte/vkui/dist/components/Counter/Counter';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import CellButton from '@vkontakte/vkui/dist/components/CellButton/CellButton'
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24Discussions from '@vkontakte/icons/dist/24/discussions'
import Icon24UserOutgoing from '@vkontakte/icons/dist/24/user_outgoing'
import Icon24OpenIn from '@vkontakte/icons/dist/24/open_in';
import Icon24Privacy from '@vkontakte/icons/dist/24/privacy'
import Icon24ThumbUp from '@vkontakte/icons/dist/24/thumb_up'

const backlog = [
    {
        id: 1,
        description: "Организация транспортировки продуктов."
    },
    {
        id: 2,
        description: "Поиск предложений на рынке foodsharing."
    }, 
    {
        id: 3,
        description: "Сортировка и упаковка продуктов."
    },        
    {
        id: 4,
        description: "Телефонный обзвон ветеранов и получение обратной связи."
    },     
    {
        id: 5,
        description: "Подведение итогов и составление отчета."
    } 
]

const inprogress = [
    {
        id: 1,
        description: "Согласование времени визита."
    },
    {
        id: 2,
        description: "Уточнение потребности в лекарствах."
    }, 
    {
        id: 3,
        description: "Утверждение списков в социальной службе."
    },        
    {
        id: 4,
        description: "Рачет логистики визитов."
    },     
    {
        id: 5,
        description: "Закрепление за волонтерскими группами."
    },
    {
        id: 6,
        description: "Согласование времени визита."
    },
    {
        id: 7,
        description: "Уточнение потребности в лекарствах."
    }, 
    {
        id: 8,
        description: "Утверждение списков в социальной службе."
    },        
    {
        id: 9,
        description: "Рачет логистики визитов."
    },     
    {
        id: 10,
        description: "Закрепление за волонтерскими группами."
    }     
]

const ready = [
    {
        id: 1,
        description: "Разработка формы чек-листа мероприятия"
    }
]

const done = [
    {
        id: 1,
        description: "Заключение договора с Call-центром"
    },
    {
        id: 2,
        description: "Получение списков ветеранов в центре социальной защиты"
    },    
]

const osName = platform();

const KanbanBoard = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={props.go} data-to="projectlist">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		>
			Доска задач
		</PanelHeader>
        <Header>
        Проект "Помощь ветеранам"
        </Header>
        <Separator style={{ margin: '12px 0' }} />
        <Cell before={<Icon24Discussions />} indicator={<Counter>{backlog.length}</Counter>} >Планы</Cell>
        <CardScroll>

            {backlog.map(item => (
                <Card size="s">
                <div style={{ width: 256, height: 128 }} >
                    <Cell multiline>{item.description}</Cell>
                    <CellButton before={<Icon24OpenIn />}>Открыть</CellButton>
                </div>
                </Card>
            ))}

        </CardScroll>
        <Separator style={{ margin: '12px 0' }} />
        <Cell before={<Icon24UserOutgoing />} indicator={<Counter>{inprogress.length}</Counter>} >В работе</Cell>
        <CardScroll>

            {inprogress.map(item => (
                <Card size="s">
                <div style={{ width: 256, height: 128 }} >
                    <Cell multiline>{item.description}</Cell>
                    <CellButton before={<Icon24OpenIn />}>Открыть</CellButton>
                </div>
                </Card>
            ))}

        </CardScroll>
        <Separator style={{ margin: '12px 0' }} />
        <Cell before={<Icon24Privacy />} indicator={<Counter>{ready.length}</Counter>} >Готово</Cell>
        <CardScroll>

            {ready.map(item => (
                <Card size="s">
                <div style={{ width: 256, height: 128 }} >
                    <Cell multiline>{item.description}</Cell>
                    <CellButton before={<Icon24OpenIn />}>Открыть</CellButton>
                </div>
                </Card>
            ))}

        </CardScroll>
        <Separator style={{ margin: '12px 0' }} />
        <Cell before={<Icon24ThumbUp />} indicator={<Counter>{done.length}</Counter>} >Завершено</Cell>
        <CardScroll>

            {done.map(item => (
                <Card size="s">
                <div style={{ width: 256, height: 128 }} >
                    <Cell multiline>{item.description}</Cell>
                    <CellButton before={<Icon24OpenIn />}>Открыть</CellButton>
                </div>
                </Card>
            ))}

        </CardScroll>

	</Panel>    
);

KanbanBoard.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default KanbanBoard;