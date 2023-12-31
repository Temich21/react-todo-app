import { Route, Routes } from 'react-router-dom'
import { IRoute, routePublic } from './routes/routePublic'
import { routeDashboard } from './routes/routeDashboard'
import { routePokemon } from './routes/routePokemon'
import { CssBaseline } from '@mui/material'
import * as React from 'react'
import { ThemeSettingProvider } from '../theme/theme'

const ReturnComponent = (Component: React.ComponentType) => {
    return <Component />
}

export const MainRouter = () => {
    const allRoutes: IRoute[] = [...routePublic, ...routeDashboard, ...routePokemon]

    return (
        <ThemeSettingProvider>
            <CssBaseline />
            <Routes>
                {allRoutes.map((route: IRoute) => {
                    return <Route path={route.path} element={ReturnComponent(route.element)} key={route.path} />
                })}
            </Routes>
        </ThemeSettingProvider>
    )
}
