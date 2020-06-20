import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import DashboardPanel from './panels/DashboardPanel';
import TeamPanel from './panels/TeamPanel';
import ProjectPanel from './panels/ProjectPanel';
import ProjectSettingsPanel from './panels/ProjectSettingsPanel';
import TaskSettingsPanel from './panels/TaskSettingsPanel';

const App = () => {
	const [activePanel, setActivePanel] = useState('dashboard');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<View activePanel={activePanel} popout={popout}>
			<DashboardPanel id='dashboard' fetchedUser={fetchedUser} go={go} />
			<TeamPanel id='team' go={go} />
			<ProjectPanel id='project' go={go} />
			<ProjectSettingsPanel id='projectsettings' go={go} />
			<TaskSettingsPanel id='tasksettings' go={go} />
		</View>
	);
}

export default App;

