import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import Header from '@vkontakte/vkui/dist/components/Header/Header';
import List from '@vkontakte/vkui/dist/components/List/List'
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell'
import Counter from '@vkontakte/vkui/dist/components/Counter/Counter';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

const cost = [
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
    },
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
    },
    {
        id: 1,
        description: "Разработка формы чек-листа мероприятия"
    },
    {
        id: 1,
        description: "Заключение договора с Call-центром"
    },
    {
        id: 2,
        description: "Получение списков ветеранов в центре социальной защиты"
    }
]

const osName = platform();

const CostPanel = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={props.go} data-to="projectlist">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		>
			Бюджет
		</PanelHeader>
        <Header>
        Проект "Помощь ветеранам"
        </Header>
        <List>
        {cost.map(item => (
                <Cell indicator={<Counter>{Math.ceil(Math.random()*100000)+1000} руб.</Counter>}>{item.description}</Cell>
            ))}
        </List>
	</Panel>
);

CostPanel.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default CostPanel;