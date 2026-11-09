import {createRootRoute,createRoute, createRouter} from '@tanstack/react-router'
import MainLayout from '../components/layout/MainLayout';
import DashboardPage from '../pages/DashboardPage';
import MyTasksPage from '../pages/MyTasksPage';

const rootRoute=createRootRoute({
    component:MainLayout
});

const dashboardRoute=createRoute({
    getParentRoute:() => rootRoute,
    path:"/",
    component:DashboardPage
})

const tasksRoute=createRoute({
    getParentRoute:() => rootRoute,
    path:"/tasks",
    component:MyTasksPage
})

const routeTree = rootRoute.addChildren([
    dashboardRoute,
    tasksRoute
]);

export const router = createRouter({
  routeTree,
});
