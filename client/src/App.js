import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Landing from './components/landing/Landing';

import StudentSideNav from './components/student/sidebar/SideBar';
import StudentGallery from './components/student/gallery/Gallery';
import StudentWelcome from './components/student/welcome/Welcome';
import StudentSeminar from './components/student/seminar/Seminar';
import StudentNews from './components/student/news/News';
import StudentInfo from './components/student/information/Info';
import StudentBudget from './components/student/budget/Budget';
import StudentTimeTable from './components/student/timetable/TimeTable';
import StudentHandout from './components/student/handout/Handout';
import StudentECommerce from './components/student/e-commerce/ECommerce';
import StudentPoll from './components/student/poll/Poll';
import StudentMessage from './components/student/message/Message';
import StudentApplication from './components/student/application/Application';
import StudentPassword from './components/student/password/Password';
import StudentPurchase from './components/student/purchase/Purchase';

import SrcSideNav from './components/src/sidebar/SideBar';
import SrcGallery from './components/src/gallery/Gallery';
import SrcWelcome from './components/src/welcome/Welcome';
import SrcSeminar from './components/src/seminar/Seminar';
import SrcNews from './components/src/news/News';
import SrcInfo from './components/src/information/Info';
import SrcTimeTable from './components/src/timetable/TimeTable';
import SrcBudget from './components/src/budget/Budget';
import SrcHandout from './components/src/handout/Handout';
import SrcECommerce from './components/src/e-commerce/ECommerce';
import SrcPoll from './components/src/poll/Poll';
import SrcMessage from './components/src/message/Message';
import SrcVoter from './components/src/voter/Voter';
import SrcPassword from './components/src/password/Password';
import SrcApplication from './components/src/application/Application';
import SrcPurchase from './components/src/purchase/Purchase';

const studentRoutes = [
	{
		path: '/studentWelcome',
		sidebar: () => <StudentSideNav />,
		main: () => <StudentWelcome />,
	},
	{
		path: '/studentGallery',
		sidebar: () => <StudentSideNav />,
		main: () => <StudentGallery />,
	},
	{
		path: '/studentSeminar',
		sidebar: () => <StudentSideNav />,
		main: () => <StudentSeminar />,
	},
	{
		path: '/studentNews',
		sidebar: () => <StudentSideNav />,
		main: () => <StudentNews />,
	},
	{
		path: '/studentInfo',
		sidebar: () => <StudentSideNav />,
		main: () => <StudentInfo />,
	},
	{
		path: '/studentBudget',
		sidebar: () => <StudentSideNav />,
		main: () => <StudentBudget />,
	},
	{
		path: '/studentTimeTable',
		sidebar: () => <StudentSideNav />,
		main: () => <StudentTimeTable />,
	},
	{
		path: '/studentHandout',
		sidebar: () => <StudentSideNav />,
		main: () => <StudentHandout />,
	},
	{
		path: '/studentECommerce',
		sidebar: () => <StudentSideNav />,
		main: () => <StudentECommerce />,
	},
	{
		path: '/studentPurchase',
		sidebar: () => <StudentSideNav />,
		main: () => <StudentPurchase />,
	},
	{
		path: '/studentPoll',
		sidebar: () => <StudentSideNav />,
		main: () => <StudentPoll />,
	},
	{
		path: '/studentMessage',
		sidebar: () => <StudentSideNav />,
		main: () => <StudentMessage />,
	},
	{
		path: '/studentApplication',
		sidebar: () => <StudentSideNav />,
		main: () => <StudentApplication />,
	},
	{
		path: '/studentPassword',
		sidebar: () => <StudentSideNav />,
		main: () => <StudentPassword />,
	},
];

const srcRoutes = [
	{
		path: '/srcWelcome',
		sidebar: () => <SrcSideNav />,
		main: () => <SrcWelcome />,
	},
	{
		path: '/srcGallery',
		sidebar: () => <SrcSideNav />,
		main: () => <SrcGallery />,
	},
	{
		path: '/srcSeminar',
		sidebar: () => <SrcSideNav />,
		main: () => <SrcSeminar />,
	},
	{
		path: '/srcNews',
		sidebar: () => <SrcSideNav />,
		main: () => <SrcNews />,
	},
	{
		path: '/srcInfo',
		sidebar: () => <SrcSideNav />,
		main: () => <SrcInfo />,
	},
	{
		path: '/srcBudget',
		sidebar: () => <SrcSideNav />,
		main: () => <SrcBudget />,
	},
	{
		path: '/srcTimeTable',
		sidebar: () => <SrcSideNav />,
		main: () => <SrcTimeTable />,
	},
	{
		path: '/srcHandout',
		sidebar: () => <SrcSideNav />,
		main: () => <SrcHandout />,
	},
	{
		path: '/srcECommerce',
		sidebar: () => <SrcSideNav />,
		main: () => <SrcECommerce />,
	},
	{
		path: '/srcPoll',
		sidebar: () => <SrcSideNav />,
		main: () => <SrcPoll />,
	},
	{
		path: '/srcMessage',
		sidebar: () => <SrcSideNav />,
		main: () => <SrcMessage />,
	},
	{
		path: '/srcVoter',
		sidebar: () => <SrcSideNav />,
		main: () => <SrcVoter />,
	},
	{
		path: '/srcPassword',
		sidebar: () => <SrcSideNav />,
		main: () => <SrcPassword />,
	},
	{
		path: '/srcApplication',
		sidebar: () => <SrcSideNav />,
		main: () => <SrcApplication />,
	},
	{
		path: '/srcPurchase',
		sidebar: () => <SrcSideNav />,
		main: () => <SrcPurchase />,
	},
];

const App = () => (
	<div>
		<Router>
			<Route path='/' exact component={Landing} />

			{studentRoutes.map((route) => (
				<Route
					key={route.path}
					path={route.path}
					exact={route.exact}
					component={route.sidebar}
				/>
			))}

			{studentRoutes.map((route) => (
				<Route
					key={route.path}
					path={route.path}
					exact={route.exact}
					component={route.main}
				/>
			))}

			{srcRoutes.map((route) => (
				<Route
					key={route.path}
					path={route.path}
					exact={route.exact}
					component={route.sidebar}
				/>
			))}

			{srcRoutes.map((route) => (
				<Route
					key={route.path}
					path={route.path}
					exact={route.exact}
					component={route.main}
				/>
			))}
		</Router>
	</div>
);

export default App;
