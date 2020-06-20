import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Div from '@vkontakte/vkui/dist/components/Div/Div'
import Button from '@vkontakte/vkui/dist/components/Button/Button'
import Icon24Newsfeed from '@vkontakte/icons/dist/24/newsfeed'
import Icon24MoneyCircle from '@vkontakte/icons/dist/24/money_circle'
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import SettingsForm from '../forms/SettingsForm'

const osName = platform();

const ProjectSettingsPanel = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={props.go} data-to="projectlist">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		>
			Свойства проекта
		</PanelHeader>
        <SettingsForm/>
		<Div style={{display: 'flex'}}>
            <Button before={<Icon24MoneyCircle />} size="l" onClick={props.go} data-to="costpanel" stretched style={{ marginRight: 8 }}>Бюджет</Button>
            <Button before={<Icon24Newsfeed />} size="l" stretched onClick={props.go} data-to="kanbanboard">Доска задач</Button>
        </Div>
	</Panel>
);

ProjectSettingsPanel.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default ProjectSettingsPanel;