import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import '@vkontakte/vkui/dist/vkui.css';

import DashboardPanel from './panels/DashboardPanel';
import TeamPanel from './panels/TeamPanel';
import ProjectList from './panels/ProjectList';
import ProjectSettingsPanel from './panels/ProjectSettingsPanel';
import TaskSettingsPanel from './panels/TaskSettingsPanel';
import KanbanBoard from './panels/KanbanBoard';
import CostPanel from './panels/CostPanel';

const App = () => {
	const [activePanel, setActivePanel] = useState('projectlist');
	const [fetchedUser, setUser] = useState(null);

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
		}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<View activePanel={activePanel}>
			<DashboardPanel id='dashboard' fetchedUser={fetchedUser} go={go} />
			<TeamPanel id='team' go={go} />
			<ProjectList id='projectlist' fetchedUser={fetchedUser} go={go} />
			<KanbanBoard id='kanbanboard' go={go} />
			<ProjectSettingsPanel id='projectsettings' go={go} />
			<TaskSettingsPanel id='tasksettings' go={go} />
			<CostPanel id='costpanel' go={go} />			
		</View>
	);
}

export default App;

